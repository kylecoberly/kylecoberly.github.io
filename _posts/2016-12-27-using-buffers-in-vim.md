---
layout: post
title:  "Using Vim Buffers"
date:   2016-12-27
categories: tutorial 
tags: vim, productivity
summary: Work with multiple files in Vim like a pro!
permalink: /blog/using-vim-buffers/
---

Want to improve your ability to work with multiple files in Vim? Spending a lot of time searching through directories with Netrw or NERDtree? Become proficient with buffers and you&rsquo;ll be leaving your GUI editor comrades in the dust.

### What are buffers?
Think of buffers as tabs&sup1; in Sublime or Atom. When you open a file in Vim, its contents are read into a "buffer," which is the thing Vim is actually working on. When you run `` :w ``, the contents of the buffer are written back to the file. When you open a new file in Vim with ``:e`` or ``:E``, the buffer you were just using doesn't close, even though you're not looking at it anymore. You can see all of your open buffers by running ``:ls``.

&sup1;Vim has something called tabs too, but these are [_not_ similar to tabs in GUI applications](http://joshldavis.com/2014/04/05/vim-tab-madness-buffers-vs-tabs/). A more accurate term for Vim tabs would probably be "layouts."

### Add buffer support to airline

The first thing we can do to make working with buffers easier is to visualize them. Let's install the status bar plug-in [Airline](https://www.github.com/vim-airline/vim-airline). If you're using NeoBundle, you can do this by adding `NeoBundle 'vim-airline/vim-airline'` to your `.vimrc`.

Airline hides buffer names by default. To make them show up, add `let g:airline#extensions#tabline#enabled = 1` to your `.vimrc`.

Now the names of your open buffers will show up across the top of your terminal, just like tabs!

### Ctrl-p

The second thing we can do to improve the buffer experience is to install the [Ctrl-P plug-in](https://www.github.com/ctrlpvim/ctrlp.vim). With NeoBundle, that's as easy as `NeoBundle 'ctrlpvim/ctrlp.vim'`.

Ctrl-p allows you to open files and buffers using fuzzy-search. Here are some default configuration settings to add to your `.vimrc`:

```
let g:ctrlp_use_caching=0
let g:ctrlp_custom_ignore = 'bin$\|build$\|node_modules$\|.git|.bak|.swp|.pyc|.class'
let g:ctrlp_working_path_mode = 0
let g:ctrlp_max_files=0
let g:ctrlp_max_height = 18
```

### Buffer Shortcuts

The commands for working with buffers are a little long and unwieldy. These are the shortcut mappings I use:

```
nnoremap <Leader>ff :CtrlP<CR>
nnoremap <Leader><Leader> :CtrlPBuffer<CR>
nnoremap <Leader>d :bd<CR>
nnoremap <Leader>n :bn<CR>
nnoremap <Leader>N :bN<CR>
```

Add these to your `.vimrc` to use buffers at Vim-speed! I use spacebar as my `<leader>` by adding `mapleader=" "` to my .vimrc. Feel free to use another key if it's more comfortable! Now you can:

* *Open a file.*  Start fuzzy-searching for any files inside the folder you opened Vim in with `Space f f`
* *Open a buffer.* Start fuzzy-searching for any existing buffer (check your buffer list at the top!) by tapping your spacebar twice
* *Close a buffer.* Close the active buffer with `Space d`
* *Go to the next buffer.* Open the next buffer in the list with `Space n`
* *Go to the previous buffer.* Open the previous buffer in the list with `Space N`

That's enough to get started working with buffers in Vim! The next time you're tempted to reach for a file navigation tool, try using fuzzy search and buffers instead!
