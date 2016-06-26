---
layout: post
title:  "Using Marks In Vim"
date:   2016-06-26
categories: Tutorial 
tags: vim, marks
summary: How to leverage the power of marks in vim
permalink: blog/using-marks-in-vim
---

Vim's motion commands are very flexible and work well for general use. You can go to the beginning of a line, replace a word, or change a sentence. What about things that are semantically relevant to your files, like an important or buggy function definition, the point of entry for your application, or a stack you're trying to trace? For these, you can use marks (read as: "bookmarks"). These are "save points" in your files that you can set, jump between, and even use with commands.

### Local and Global Marks

A local mark is specific to a particular file and is indicated by a lowercase letter, while global marks are universal across all of your files and use uppercase letters. That is, many files can have an `\`a` mark, while `\`A` points to a particular location in one particular file. 

### Viewing Marks

View a list of your current marks with `:marks`. Note that marks are invisible in `vim` without the use of a ([plug-in](#plugin)).

### Setting Marks

Set marks with `m` key in normal mode. To set a local mark of `a` where the cursor is, type `ma`. To jump to this location, type `\`a` anywhere in the file.

### Deleting Marks

You can delete marks with the `:delm` command. To delete marks `\`a`, `\`e`, and `\`G`, you would type `:delm aeG`. You can delete all local marks with `:delm!`.

### Some tips

* Marks are motions, so you can use them with actions. For example, `y\`w` will copy everything between your current cursor location andthe `\`w` mark.
* `\`\`` will return you to the last place you jumped from
* `\`0` will return you to the last file you had open before you quit vim
* `'` will jump you to the first non-blank character on the same line as the mark
* If set `\`V` to the top of your `.vimrc` file, you can jump to it from any file (saved between `vim` sessions by default)
* You can cycle through local marks with `[\``/`]\``
* <a name="plugin"></a>The [kshenoy/vim-signature](https://github.com/kshenoy/vim-signature) plug-in will add visual indications of marks to your line numbers, as well as giving you the ability to delete marks with `dm[mark letter]`, assign the next available mark with `m`, and more
