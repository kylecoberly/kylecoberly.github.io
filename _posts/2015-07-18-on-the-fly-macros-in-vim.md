---
layout: post
title:  "On-The-Fly Macros in Vim"
date:   2015-07-18
categories: vim, tutorials
tags: vim, tutorials
summary: On-the-fly macros are simple and one of the best vim time-savers you can learn.
permalink: blog/on-the-fly-macros-in-vim
---

A macro is a series of commands that you can record and play back. Vim provides a simple interface for creating and using macros that can automate all of your repetitive tasks.

To record a macro in vim:

1. Go into normal mode
2. Press `q` and then any letter to start recording (your macro will be saved to this letter)
3. Enter the commands you want to record
4. Press `q` to stop recording

To playback a macro in vim:

1. Go into normal mode
2. Enter the number of times you want to repeat the action
3. Press `@`
4. Enter the letter that your macro was saved to

That's it! The next time you find yourself wrapping things in quotes, adding spaces after separators, or converting something between formats, consider recording your actions as a macro.

Some tips:

* Macros can call other macros
* Recording to a capital letter will let you append, rather than overwrite a macro
* You can call *ex* commands from macros (eg. `:wnext`)
* Be mindful of where your cursor starts and ends
* `@@` repeats your last playback
* You can use `:nnoremap <Space> @q` to allow you to run the macro in `q` with spacebar in normal mode
* `:reg` will show you the contents of all your saved macros, while `:reg q` will show you the contents of the macro in `q`
* Macros are saved between vim sessions
* You can save a macro in your .vimrc (to prevent overwriting or allow portability) by adding `let @<letter>='<commands>'
* To edit the macro in `q`, type `:let @q='`, press `ctrl+r` `ctrl+r` `q`, edit your commands, then type `'` to close the expression
