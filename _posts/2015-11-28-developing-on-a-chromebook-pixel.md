---
layout: post
title:  "Developing on a Chromebook Pixel"
date:   2015-11-28
categories: tutorial
tags: chromebook, pixel, tutorial
summary: The Chromebook Pixel is the best development computer available today.
permalink: /blog/developing-on-a-chromebook-pixel/
---

The Chromebook Pixel is the best computer for software development available today. This may come as a surprise if you've ready any of the multitude of blog posts talking about how absurd it is to pay even as much as $300 for a glorified browser when you could get a "real computer" for that much money. So-called tech journalists get especially incredulous when presented with the $1300 Chromebook Pixel- no one in their right mind could justify should a ridiculous purchase.

### Chromebook Pixel

<dl>
    <dt>Processor</dt>
    <dd>Dual-Core i7-5500U 2.4GHz</dd>
    <dt>Memory</dt>
    <dd>16GB DDR3L-1600</dd>
    <dt>Storage</dt>
    <dd>64GB SSD</dd>
    <dt>Display</dt>
    <dd>13" 3:2 Touch Screen 239ppi</dd>
    <dt>Connectivity</dt>
    <dd>Dual USB-C, Dual USB-3, SD Card</dd>
    <dt>Price</dt>
    <dd>$1300</dd>
</dl>

### MacBook Pro

<dl>
    <dt>Processor</dt>
    <dd>Quad-Core i7-4770HQ 2.2GHz</dd>
    <dt>Memory</dt>
    <dd>16GB DDR3L-1600</dd>
    <dt>Storage</dt>
    <dd>256GB SSD</dd>
    <dt>Display</dt>
    <dd>15" 16:10 220ppi</dd>
    <dt>Connectivity</dt>
    <dd>Dual Thunderbolt, Dual USB-3, HDMI</dd>
    <dt>Price</dt>
    <dd>$2500</dd>
</dl>

So what does an extra $1200 get you, hardware-wise? A bonus 2 slower cores, a bunch of extra local storage (in 2015??), a slightly larger screen with a less vertical, lower resolution, and no touch, and a pair of slower, proprietary connections. It's also about a pound heavier. I'll pass.

What about the software? Not enough credit is given to [Crouton](https://github.com/dnschneid/crouton), a flexible, extremely powerful way to access to the underlying Linux kernel of ChromeOS. Think of it as Ubuntu in a Chrome tab, and much more.

To install Crouton:
1. Put your Chromebook in Developer Mode by pressing `ESC` + `Refresh` + `Power`. Note that this will wipe the computer.
1. Press `Control`+`D` during boot to start the computer. You will need to do this every time you boot.
1. Download [Crouton](https://goo.gl/fd3zc).
1. Press `Control`+`Alt`+`T` to start a new ChromeOS shell- this is a limited-purpose shell with a handful of commands.
1. Type `shell` to enter the actual shell for the OS
1. The `sudo sh ~/Downloads/crouton` command will be the base command to install your new OS. Here are the flags you can pass:
    * -r [release-name]. This is the code name (eg. trusty) for any Ubuntu, Debian, or Kali release.
    * -n [name]. This is a nickname for your OS, in case you have want to have multiple installs.
    * -t [comma-separated list of options]. These are the features of the OS you want to install.

This command installs Ubuntu 14.04 ("Trusty"), named "Kyle", with Chrome, Touch Support, Unity Desktop environment, and a tool for running GUI apps in the command line:

`sudo sh ~/Downloads/crouton -r trusty -n kyle -t chrome,trusty,unity,xiwi`

That's it! To launch your new OS:

1. `Control`+`Alt`+`T` to open a new Chrosh shell
1. `shell` to drop down to the real shell
1. `sudo enter-chroot -n kyle` to enter your new OS

If you want to launch into your new OS via a cool, GIMP-running, Atom-using, Steam-playing desktop manager:

1. `Control`+`Alt`+`T` to open a new Chrosh shell
1. `shell` to drop down to the real shell
1. `sudo startunity -n kyle` to launch Unity

The entire process should take about 15 minutes. When you're done, you'll have the ultimate laptop running the ultimate development environment at half the price of the popular alternative, with a host of extra features.
