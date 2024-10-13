---
title: golang map
slug: /2024/golang-map
date: 2024-08-17
unlisted: true
---





:::tip

本文可以看作是对 [hashmap | Go 程序员面试笔试宝典](https://golang.design/go-questions/map/) 的整理和总结

:::



## yaml

```yaml

- topic: map
  url:
  qs:
    - q: 用hashtable实现hashmap，和用search-tree实现hashmap，有啥区别？为啥golang, java, redis使用hashtable实现map，而cpp使用RBT实现map？
      x: 这类问题的本质实际上还是比较hashtable, RBT和trie-tree


    - q: map 在遍历时，并不是从 0 号 bucket 开始遍历，而是从一个随机 bucket 的随机 cell 开始遍历
    - q: 为什么 map 增删改会触发标志位，导致 panic？
    - q: 通过 hash 函数获取目标 key 的哈希，哈希和数组的长度通过位运算，获取数组位置的索引。遍历 bmap 里的 key，和目标 key 对比获取 key 的索引。根据 key 的索引通过计算偏移量，获取到对应 value。
      x: 用位运算转换求余操作，m % n，当 `n = 1 << B` 的时候，可以转换成 `m & (1 << B - 1)`


    - q: tophash 数组的设计加速了 key 的查找过程，tophash 也被复用来标记扩容操作时的状态
    - q: mapassign
    - q: 双桶, mapextra 用来优化 GC,
    - q: hmap struct 中有哪些是主要字段？hmap 的 extra 有啥用？
    - q: hmap 中的负载因子 B 是什么？为什么是 6.5？负载因子如何影响map的性能？溢出率
      x: LB是最大可容纳元素数，用来衡量当前哈希表中空间利用率的核心指标。是因为负载因子太大了，会有很多溢出的桶；太小了，就会浪费很多空间。

#    - q: bmap 是什么？为什么golang的map还需要bmap？ bucket

    - q: map扩容机制

    - q: map 有缩容机制吗？

    - q: golang中map进行 读操作 的具体过程(查找数据的具体流程)?
      x: key 经过 hash 后共 64 位，根据 hmap 中 B 的值，计算它到底要落在哪个桶时，桶的数量为 2^B，如 B=5，那么用 64 位最后 5 位表示第几号桶，在用 hash 值的高 8 位确定在 bucket 中的存储位置，当前 bmap 中的 bucket 未找到，则查询对应的 overflowbucket，对应位置有数据则对比完整的哈希值，确定是否是要查找的数据。如果当前 map 处于数据搬移状态，则优先人 oldbuck-ets 查找。

    - q: golang中map进行 写操作 的具体过程?

    - q: golang map是怎么解决hash collision的? Why?
      x: CA

    - q: "***能否帮我对比一下 golang 的 map 和 redis 的 HashMap 的区别？关键字：双 table、渐进式 rehash、扩容条件、缩容条件、bgsave、COW 机制?***"
      u: https://blog.csdn.net/tptpppp/article/details/103510214
      x: 双 table、渐进式 rehash、bgsave、COW 机制、扩容条件、缩容条件





```


```yaml

    # map常用操作
    - q: "***golang 修改map中的元素? 怎么修改map of struct中的的值 (原地修改map)?***"
      u: https://blog.csdn.net/W25679/article/details/124604637

    - q: How to convert []map to []struct?

    - q: map[string]interface{} to struct

    - q: 怎么用map实现并发读写?
      x: 比较 "mutex+map" 和 sync.Map

    - q: How to check efficiently if a map contains a key in Go?
      x: comma ok idiom (whether err/kv/chan exist, datatype detect)

    - q: How to check whether the key of map exists?

    - q: "***手写实现 golang 中 map 的有序查找，且支持 add、支持 delete、支持迭代？构造一个辅助 slice***"
      u: https://gist.github.com/xbpk3t/ddab2b9d20186ff27ec0e159e835e779
      x: How does map read data? And the specific process for finding key, assigning key, deleting key and traversing key?

    - q: slice 和 map 作为函数参数时，有什么区别？
      x: |
        函数内对 map 的操作会影响 map 自身，对 slice 操作则不会；因为 map 的底层结构是指针`*hmap`，slice 的底层结构是 struct

        *Go 语言中的函数传参都是值传递，在函数内部，参数会被 copy 到本地。`*hmap`指针 copy 完之后，仍然指向同一个 map，因此函数内部对 map 的操作会影响实参。而 slice 被 copy 后，会成为一个新的 slice，对它进行的操作不会影响到实参。*


```



## golang map的实现原理

在开始介绍golang map的实现原理之前，先用几个问题热热身，调动一下我们对于map的基本认知

- map有哪几种实现方法？hashtable和search-tree有啥区别？为啥目前大部分语言都用hashmap而非search-tree?
- 实现hashtable的keypoints?


***keypoints 无非是 hash func, load factor, hash-collision, 双桶, 渐进式rehash***


```go
type hmap struct {
 count     int
 flags     uint8
 B         uint8
 noverflow uint16
 hash0     uint32
 buckets    unsafe.Pointer
 oldbuckets unsafe.Pointer
 nevacuate  uintptr
 extra *mapextra // optional fields
}
```

参照golang map源码就可以看到

- hash0 就是 hash func
- buckets, oldbuckets 就是双桶
- B 就是 load factor

除此之外，就是 count, flags, noverflow, nevacuate

[map.png]

[bmap-ds.png]

可以看到bmap的kv不是 k/v/k/v/... 这种格式，而是 k/k/v/v/... 这种格式，是为了节省内存。因为k/v这种格式的话，每组之间都需要padding，如果 k/k/v/v 的话，则每个bucket共享一个padding即可



```markdown
每个 bucket 设计成最多只能放 8 个 key-value 对，如果有第 9 个 key-value 落入当前的 bucket，那就需要再构建一个 bucket ，通过 overflow 指针连接起来。
```

```markdown
哈希表的每个桶都只能存储 8 个键值对，一旦当前哈希的某个桶超出 8 个，新的键值对就会存储到哈希的溢出桶中。随着键值对数量的增加，溢出桶的数量和哈希的装载因子也会逐渐升高，超过一定范围就会触发扩容，扩容会将桶的数量翻倍，元素再分配的过程也是在调用写操作时增量进行的，不会造成性能的瞬时巨大抖动。
```

每个bucket(也就是bmap)只存储8个kv，超出就放到新bucket





## 遍历过程


## 扩容机制


```markdown
查看 hashGrow() 以及 渐进式扩容 growWork().

当 map 的负载因子超过预设的阈值（通常是 6.5）或者溢出桶（overflow buckets）数量过多时，Go 会触发 map 的扩容机制。

- *为什么需要扩容？* 随着 map 中元素的增加，发生哈希冲突的概率会增加，Map 的读写性能也会下降，所以我们需要更多的桶和更大的内存来保证 Map 的读写性能。
- *具体怎么扩容？有哪些扩容策略？* 在实际应用中，当装载因子超过某个阈值时，会动态地增加 Map 长度，实现自动扩容。map 长度变化，所有 key 在 map 中对应的索引都需要重新计算；但是一次性完成扩容的性能太差，所以需要渐进式扩容；



- `装载因子`和`溢出桶的数量`是决定哈希表是否进行扩容的关键指标；
- 扩容实际上是以空间换时间的手段，在 map 将要添加、修改或者删除 key 时，都会检查是否需要扩容；
- 扩容分为增量扩容和等量扩容；增量扩容，会直接把桶的个数增加一倍，把原来一个桶的 key 重新分配到两个桶中；等量扩容，不会更改桶的个数，只会把桶中的数据变得紧凑；
- 扩容过程是渐进式的，主要是防止一次扩容需要搬迁太多 key，引发性能问题；
- 触发扩容的时机是增加了新元素，桶搬迁的时机则发生在赋值、删除期间，每次最多搬迁两个桶。*查找、赋值、删除的一个很核心的内容是如何定位到 key 所在的位置，需要重点理解。*
```


## 缩容机制

```markdown
伪缩容，因为map 的扩缩容的主要区别在于 hmap.B 的容量大小改变，而缩容由于 hmap.B 压根没变，内存空间的占用也是没有变化的（具体来说就是，在删除元素时，并不会释放内存），所以一定不要往 golang 的 map 中塞入太多数据。

若是扩容，则 bigger 为 1，也就是 B+1。代表 hash 表容量扩大 1 倍。不满足就是缩容，也就是 hash 表容量不变。可以得出结论：map 的扩缩容的主要区别在于 hmap.B 的容量大小改变。而缩容由于 hmap.B 压根没变，内存空间的占用也是没有变化的。
```






## SwissMapType

[[go] all: split old and swiss map abi and compiler integration](https://groups.google.com/g/golang-checkins/c/YkzdsibwrPg?pli=1)

[all: split old and swiss map abi and compiler integration (580779) · Gerrit Code Review](https://go-review.googlesource.com/c/go/+/580779)

[SwissMap(Go外部哈希表)](http://pekue.top/2023/03/14/tool_swissmap/)

把之前的 src/runtime/hashmap.go 拆成了 src/runtime/map_noswiss.go 和 src/runtime/map_swiss.go 两个，为了更好的compiler编译





## sync.Map


```yaml
- topic: sync.Map
  url: https://github.com/golang/go/blob/master/src/sync/map.go
  qs:
    - q: "***How does sync.Map implemented? 能否认为sync.Map是read-preferring呢?***"
      x: 使用了读写分离来去保证线程安全的，sync.map 的数据结构分为读 map(read)、写 map(dirty)、还有mutex以及一个记录穿透次数的值(misses)。具体实现是每次读取都会先读取读部分的 kv，没有则去读写部分的 kv(操作写部分时都会上锁)。当穿透到写部分的次数大于写部分的长度时，就会将写部分同步到读部分，并且把写部分清空。所以多协程下一般都会先打到无锁的读部分，这能保证读取性能。
    - q: "***sync.Map feats? 逐一说明 double-checking, 读写分离和动态调整, 延迟删除(在 sync.Map 中删除一个键值对实际上只是将其标记为删除，真正的删除操作会在 read 升级时进行，这样可以减少锁的持有时间。), read-preferring ***"
      x: |
        read map(atomic.Value), dirty map(mutex) 之间互相转化，分别在什么样的时机下会进行？nil, normal
        entry的p可能的状态，有哪些？
        entry 的 p 可能的状态包括 nil（空值）、指向正常数据的指针、指向脏数据的指针、锁定状态的指针、等待状态的指针和过期状态的指针。


    - q: Store(), Load(), Delete() 各自的实现
    #        - "***Why is map not thread-safe? How to make map achieve concurrent reading and writing?***"
    - q: "***Why is sync.Map rarely used in golang? pros and cons?***"
      x: sync.Map适合读多写少的场景（...），这就是“使用sync.Map时需要考虑读写比”这个说法
    - q: pseudo shrink leads to mem-leak, How to resolve?

```



## ref

- [map| Go 语言设计与实现](https://draveness.me/golang/docs/part2-foundation/ch03-datastructure/golang-hashmap/)












[Redis和Go中map的异同_go的map 和 redis的map实现有啥共同点吗-CSDN博客](https://blog.csdn.net/tptpppp/article/details/103510214)

[redis渐进式rehash机制 - 割肉机 - 博客园](https://www.cnblogs.com/williamjie/p/11205593.html)


[iface 和 eface 的区别是什么 | Go 程序员面试笔试宝典](https://golang.design/go-questions/interface/iface-eface/)

[Go 语言切片的实现原理 | Go 语言设计与实现](https://draveness.me/golang/docs/part2-foundation/ch03-datastructure/golang-array-and-slice/)

[cch123/golang-notes: Go source code analysis(zh-cn)](https://github.com/cch123/golang-notes?tab=readme-ov-file)

[golang-notes/map.md at master · cch123/golang-notes](https://github.com/cch123/golang-notes/blob/master/map.md#%E5%88%A0%E9%99%A4)



