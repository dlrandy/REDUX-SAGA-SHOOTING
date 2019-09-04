saga effects和generators可以同步运行异步的任务。使用的是blocking的saga effects

在有sideeffects依赖其他side effects的返回结果的时候，可以停止或者挂起iteration，比如take，call

在运行的side effects不需要返回值的时候，使用非阻塞的effects，比如put和fork

并行使用all

actionchannel可以同步的形式运行多个effects，它可以入队请求，一个接一个的处理

为了方便测试，一般不要直接调用effects。因为effects的创建和执行的隔离，使得测试generator更方便

call VS fork VS spawn
call是阻塞型的；fork和spawn是非阻塞型的，它俩的区别在于generator会等待fork完成之后才返回和spawn

相当于一个独立的process，generator不会等他的resolution之后再返回。

references links：
https://medium.com/knerd/typescript-tips-series-proper-typing-of-react-redux-connected-components-eda058b6727d



