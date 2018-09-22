# SunShineX
An alternative to RainMeter to dispaly buttons on desktop

SunShine X was created out of the frustration that RainMeter causes when launched via the network. Where sometimes it will lead to the following message 

![RaiNmeter error](https://i.imgur.com/oc1987P.png)

I wasn't using RainMeter to create something complicated, I just needed the users of a desktop to be able to click 3 buttons if required.

So ElectronJS came to the rescue. With a little bit of HTML, JS and CSS magic I was able to replicate what I've built with RainMeter quite easily and pack it up in a nice executable.

![SunshineX preview](https://i.imgur.com/tndcF3U.png)

## What do I need to alter it and build it as an exe?


* You will need to install electron, this was build with Electron v2.0.9 https://electronjs.org
* Electron-builder installed with yarn "*yarn add electron-builder --dev*"
* You will also need your favourite text editor to alter links, images, etc. 
* Build it with Electron-Builder, I've done it via powershell 

`.\electron-builder --win portable --ia32 --project "C:\Users\XXXXX\Documents\electron\sunshineX\"`

## Where did you get the icons from?

* Sunshine logo https://www.iconfinder.com/sorasak21
* Status icon https://www.iconfinder.com/colebemis
* Email icon https://www.iconfinder.com/Enesdal
* Link icon http://danielbruce.se/

## Are there any dependencies?

Yes, you will need https://github.com/toonvanvr/electron-transparency-mouse-fix

## I've head electronJS uses tons of RAM...

The app is pretty simple just display a few images with a link so I doesn't really use much CPU or RAM

![ram usage](https://i.imgur.com/5fu2R8M.png)
