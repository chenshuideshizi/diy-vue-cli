# diy-vue-cli

自己开发一个 vue-cli

### npm  link

mac 上执行 npm link 需要加上 sudo，也就是 ```sudo npm link```

执行 npm link，会默认把当前目录下 package.json 文件中的 bin 选项挂载到全局。

### 踩坑
- ora 要用 4.0.2 版本的，高版本会报错