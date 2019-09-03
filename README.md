saga effects和generators可以同步运行异步的任务。使用的是blocking的saga effects

在有sideeffects依赖其他side effects的返回结果的时候，可以停止或者挂起iteration，比如take，call

在运行的side effects不需要返回值的时候，使用非阻塞的effects，比如put和fork

并行使用all

actionchannel可以同步的形式运行多个effects，它可以入队请求，一个接一个的处理





