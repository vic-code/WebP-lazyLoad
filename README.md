# WebP-lazyLoad
webp优化，懒加载

WebP图片优化demo，懒加载，减小图片体积，自动识别，有webp图片就用webp格式的，没有就用原图jpg
</br>
配合lazyloadJs懒加载使用，原理是给每个图片都准备一个同名的.webp格式的文件，然后替换原本图片url，使其名字变成对应的webp格式的图片名字，然后传给data-original，最后执行懒加载函数
