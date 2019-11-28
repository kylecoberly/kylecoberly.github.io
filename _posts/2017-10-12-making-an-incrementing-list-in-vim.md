---
layout: post
title:  "Making An Incrementing List In Vim"
date:   2017-10-12
categories: Tutorial 
tags: vim, tricks
summary: One weird trick to make an incrementing list in 12 key strokes
permalink: /blog/making-an-incrementing-list-in-vim/
---
Let's say you want to make a list item, copy it an arbitrary number of times, and increment some counter on it. For example:

```html
<ul>
    <li>Item 1</li>
</ul>
```

Highlight the line with the `<li>`, use `yy` to copy the line, and `9p` to paste it 9 times. This will leave you with:

```html
<ul>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
</ul>
```

Type `f1` to jump to the `1`, `j` to move to the second item, `ctrl+p` to do a block selection, and `8j` to highlight the 2nd-10th `1`s. Here's where the magic happens:

If you type `g ctrl+a`, you'll have incremented all of the numbers in only 12 keystrokes!

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
    <li>Item 7</li>
    <li>Item 8</li>
    <li>Item 9</li>
    <li>Item 10</li>
</ul>
```

### How It Works

You can increment any number in vim with `ctrl+a` (decrementing is done with `ctrl+x`). Why the `g` prefix? It supposedly stands for "global", but unlike most normal commands, there's no deep rationale behind its operation. It's just a wacky trick worth memorizing.

_Note: This only works in vim 8+_
