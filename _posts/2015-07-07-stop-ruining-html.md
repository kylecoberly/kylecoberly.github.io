---
layout: post
title:  "Stop Ruining Your HTML With Your CSS"
date:   2015-07-07
categories: Development
tags: HTML, CSS, opinion
summary: Documents are about structure, stylesheets are about looks. Can we please start keeping them that way?
permalink: blog/stop-ruining-html-with-css
---

Take a tour of the popular CSS style guides and several commonsense themes will emerge: Indent your code, don&rsquo;t ignore semicolons, and don&rsquo;t mix tabs and spaces. There is also likely to be a rampant celebration of the virtues of putting classes on everything and avoiding nested selectors. The reasons cited are usually poor selector performance (a [mostly imaginary problem](http://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/)), non-specific warnings about how complex specificity is ([it isn&rsquo;t](http://www.w3.org/TR/css3-selectors/#specificity)), and how nice it is to have a flat CSS hierarchy. 

I think this is a *terrible* trend, and so should you.

### What&rsquo;s wrong?
Both the stylesheet and the document become mangled casualties in the quest for performant CSS. For example, take a look at this all-too-common markup:

```html
<div class="post">

    <header class="post-header">
        <h1 class="post-title">Stop Ruining HTML</h1>
        <p class="post-meta">By Kyle Coberly</p>
    </header>

    <article class="post-content">
        <p class="post-first-paragraph">First paragraph here.</p> 
        <p class="post-paragraph">More content here.</p> 
    </article>

</div>
```

By taking out the completely redundant classes, we get a document that&rsquo;s easier to read and more expressive:

```html
<div class="post">
    <header>
        <h1>Stop Ruining HTML</h1>
        <p>By Kyle Coberly</p>
    </header>
    <article>
        <p>First paragraph here.</p>
        <p>More content here.</p>
    </article>
</div>
```

The so-called efficient stylesheet for this is flat, the hierarchy and semantics of the document are completely ignored, and six extra names have to be devised for elements that already have great names!

```css
.post {
    background-color: red;
}
.post-header {
    background-color: blue;
}
.post-title {
    background-color: yellow;
}
.post-meta {
    background-color: green;
}
.post-content {
    background-color: white;
}
.post-first-paragraph {
    background-color: orange;
}
.post-paragraph {
    background-color: purple;
}
```

By using a single class name and the nesting features of SCSS, we can make the stylesheet much more readable and reflective of the structure of the document:

```css
.post {
    background-color: red;
    header {
        background-color: blue;
        h1 {
            background-color: yellow;
        }
        p {
            background-color: green;
        }
    }
    article {
        background-color: white;
        p {
            background-color: orange;
            &:first {
                background-color: purple;
            }
        }
    }
}
```

The most expensive selector will render as `.post article p:first`, which has a whopping 12 points of specifity and will probably render in well under a millisecond on most devices.

Another thing you&rsquo;ll see in many traditional approaches to CSS are &ldquo;display classes,&rdquo; which intentionally couple the structure of the document to its presentation:

```html
<div class="blue-border half-width">Content here</div>
``` 

Display classes supposedly help maintain a flatter structure, while simultaneously enabling reusability between applications. They&rsquo;re also a bedrock principle for the popular CSS frameworks, such as Bootstrap and Foundation. The problem is that this approach mushes the responsibilities of the document and the stylesheet together, so they can&rsquo;t develop independently and it&rsquo;s rarely obvious which one is dictating any particular style. It also creates a maintenance nightmare (what if `blue-border` becomes `green-border`?), and a barrier to extensibility (is it also `half-width` on mobile? On a smart watch? On a TV?).

In addition to the lack of readability, maintainability, and extensibility caused by traditional styling techniques, there are further &ldquo;big picture&rdquo; costs. Naming everything with classes encourages you to expend less effort selecting the correct HTML tags (when was the last time you used `<figure>`, `<article>` or `<aside>`?). Mixing document and styling concerns also encourages you to structure your document based on how you want it to look, rather than on how the information should be hierarchically organized. Having a poorly structured document impacts the accessibility of your site or app, thwarts all attempts at progressive enhancement, and makes your content more difficult for non-browser programs to use (think screen readers, syndicators, scrapers, and crawlers). 

### What can be done?

#### **Use SCSS**

[SCSS](http://sass-lang.com/) is a superset of CSS, meaning that all valid CSS is also valid SCSS. It adds a bunch of features that make writing great stylesheets a snap.



#### **Nest generously, tag appropriately, and use classes cautiously**

The greatest feature of SCSS is the ability to nest selectors. If you make good use of nesting and semantic HTML5 tags, you can get away with creating only those classes which uniquely describe your site or application. Check out the SCSS example from above for an example.

#### **Use variables and mixins**

SCSS allows you to super-charge your style organization with variables and mixins. For example, you might have a `colors.scss` file that stores your application&rsquo;s color pallette:

```css
$dark-grey: hsl(0,0,0.3);
$primary-color: hsl(120, 50%, 50%);
```

You can then reference these variables throughout your stylesheets:

```css
@import "colors";
body {
    background-color: $primary-color;
    color: $dark-grey;
}
```

For more complex styles you want to reuse, you can define a mixin. For example, you may have a `typography.scss` file:

```css
@mixin header-type {
    font-size: 8rem;
    font-family: Arial, sans-serif;
    font-weight: 700;
    letter-spacing: -5px;
    word-spacing: 15px;
}
```

You can then include the mixin wherever you want to use it. You can even override it!

```css
@import "typography";
h1 {
    @include header-type;
    font-size: 6rem;
}
```

#### **One file per view**

With your application&rsquo;s variables and mixins defined, you can use them to compose your views. I recommend using one file for each view in your application, and namespacing its contents.

```css
@import "colors";
@import "typography";
@import "breakpoints";
.about-me {
    position: relative;
    h2 {
        @include header-type;
    }
    img {
        box-shadow: 2px 2px 1px $dark-grey;
        text-align: center;
        @media (max-width: $small-breakpoint){
            width: 100%;
        }
    }
}
```

Now your documents and styles are independent, your HTML is semantically organized with a minimum amount of markup, and your stylesheets are declarative, simple, modular and extensible. You get accessibility, a sane way to address responsiveness, and maximum readability for free. There are performance-sensitive situations where a particular nested style may be a bottleneck; being on the bleeding edge of the web requires flexibility and compromise. That said, don&rsquo;t ruin your code to solve problems you don&rsquo;t have. Respect the separation of concerns, write just enough markup, and make your stylesheets as beautiful as the layouts they create.

-----

For more of my thoughts on CSS, check out my [CSS Styleguide](https://github.com/kylecoberly/css-style-guide).
