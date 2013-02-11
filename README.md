#ZupChat
==============

You can have a look at the demo on http://koodikalle.net:8000

## Features

* Keeps track of active users and automatically adds/removes audio & video from users that join/leave the video call
* Small preview of the local video in the bottom right corner
* Remote videos can be arranged by dragging and resizing
* Currently only works on Chrome

##TODO

* Firefox support ([http://www.webrtc.org/interop](webrtc.org) has a list of API differences between Chrome and Firefox that need to be addressed)
* A control for toggling local video preview
* A control for toggling between auto/custom arrangement of remote videos


##Installing and running

Run in your terminal

```bash 
git clone git@github.com:ZupaDupa/zupchat.git
```

```bash 
cd zupchat
```

```bash 
npm install
```

```bash 
cd src
```

```bash 
node server.js
```

In a version of Chrome that have webRTC support.

go to [localhost:8000](http://localhost:8000)

click allow to see your camera

go to [localhost:8000](http://localhost:8000)

click allow to see your camera and the connection will be made between your to open windows.


##Thanks to

ZupChat is based on [https://github.com/webRTC/webrtc.io-demo](webrtc.io-demo) by Ben Brittain, Dennis Mårtensson and David Peter.
