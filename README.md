WebRTC 入门学习 Demo
======

第一个 Demo，用[主播端](http://cdn.rawgit.com/xing393939/webrtc-samples/master/static/push.html)获取摄像头视频流创建直播，[播放端](http://cdn.rawgit.com/xing393939/webrtc-samples/master/static/play.html)和主播端建立连接并接收直播流播放。

第二个 Demo 是一个[ 8 人视频会议](http://cdn.rawgit.com/xing393939/webrtc-samples/master/static/room_chat.html)。

## 启动信号服务器

node app.js

## 启动 STUN 服务器

node stun_server.js

## 验证 STUN 服务器

node stun_client.js

如果验证成功，则返回：

```javascript
Complete(0): Open NB=I EF=I (Open to internet) mapped=127.0.0.1:61072 rtt=0
```

## 第三方依赖

1. [PeerServer](https://github.com/peers/peerjs-server)
1. [PeerJS](https://github.com/peers/peerjs)
1. [node-stun-server](https://github.com/enobufs/stun)