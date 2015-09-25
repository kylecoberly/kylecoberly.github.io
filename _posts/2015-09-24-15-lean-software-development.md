---
layout: post
title:  "Lean Software Development"
date:   2015-09-24
categories: Business
tags: business, development, lean
summary: A summary of lean software principles
permalink: blog/lean-software-development
---

Think big, act small, fail fast, learn rapidly. Lean may have its origin in the factory, but its principles are equally relevant to any kind of production, including software. Far from being something only marketing or management wonks need to know about, lean is for the whole organization. The primary tenets of lean are:

### Reduce Waste

Waste is defined as anything that doesn&rsquo;t add value to the customer (which is the person paying for it). This often shows up as features no one asked for, unnecessary meetings, documentation for its own sake, software defects, or ignoring the skills at your disposal. Building good software is hard and expensive, so wait to do it until it&rsquo;s harder and more expensive not to.

### Amplify Learning

By running small experiments and having your customers use your product early and often, you can continually ensure that you&rsquo;re solving the right problems. You should also run automated software tests so that defects come to the surface quickly. These are both examples of [tightening the feedback loop](http://www.slideshare.net/thekua/tightening-the-feedback-loop-43496320). 

### Decide Late

If a decision doesn&rsquo;t need to be made now, defer until the last responsible moment. Because you will know more in the future than you know now, you will make a more informed decision. This may be what programming language or platform to use, what color something should be, or when/if a particular feature should be built.

### Deliver Soon

Build something useful, however unpolished, and show it to your customers as quickly as possible. This is the best way to ensure that you and they are on the same page. As a means of communication, it blows written requirements, drawings, and meetings out of the water.

### Empower People

Rather than management telling developers how to do their jobs, developers should tell managers how something should be built and how long it will take. Developers organize themselves and divide work based on their strengths. The role of management shifts from controlling the team to supporting them and removing obstacles to success.

### Build Quality In

Instead of examining a project for quality at the end, build quality into the structure of the work with tools like automated testing and continuous integration. Aggressively refactor out duplicated code.

### See The Whole

All of these principles are complementary and are worth more than the sum of their parts. They impact culture and quality in a way that helps you build a better, more resilient organization. Any one of these principles will save dollars and time if that&rsquo;s all you&rsquo;re looking for. But if you implement them together, you&rsquo;ll save employee turnover, market alignment, customer frustration, and maybe even your company.

### An Example

You hypothesize that people want a fast food delivery app. You first need to figure out if anyone actually does, and what features they might find valuable. You make a simple web form where people type out the fast food they want, which is sent to you as an email. You do all of the shopping and delivery, take payment with Square, ask your customers questions, and make note of emerging patterns. The customer thinks you have a scaled app, a big team, ongoing analytics, and limitless capacity. From their perspective that might as well be true, but in between the order and delivery you&rsquo;re doing everything by hand (in lean terms, this is called a [concierge MVP](http://www.slideshare.net/timgasper/concierge-mvp)).

You validate your hypothesis, and make another one based on the information you get: People want to see past orders and make reorders based on them. You have a developer build out the simplest way to test the theory. Your developer tells you that just by saving the typed grocery list in HTML5 Local Storage, it can be made to look like it&rsquo;s &ldquo;saved&rdquo; without actually having to build out a persistence layer for the application. Your developer claims they can have it tested and ready in two days. When delivering orders, you ask users about their experience with the &ldquo;new feature&rdquo;, and also manually analyze how much their orders vary.

As the ability to handle orders overwhelms the person reading the lists and buying and delivering the food, capacity needs to expand (in lean terms, this is called [the constraint](http://www.leanproduction.com/theory-of-constraints.html)) to continue growing the business. You decide to automate parts of the existing process with software. Instead of typing out a full list into a text field, you have the users type out list items, quantities, and locations separately. Then, the time savings from processing data eliminate the constraint of your ability to process orders. When this isn&rsquo;t enough, you build in a login system and a persistence layer to store orders and payment information. After that, you might have users select from menus populated by APIs. The order you build features in is driven by validating hypotheses and eliminating constraints.

This is lean software development. Here&rsquo;s what didn&rsquo;t happen: Hiring 8 people to come up with a bunch of feature ideas, building a robust, scalable software platform, deploying it after 3 months of hard work, and hoping people like the result. Instead:

* Very little software was built (no waste)
* The product was based on the needs of actual paying customers (amplify learning)
* Nothing was decided until it had to be (decide late)
* Ideas were tested with customers immediately (deliver soon)
* Technologies and estimates were decided by the person building them (empower people)
* Code was tested as it was delivered (build quality in)
* All of these implemented as a cohesive system (see the whole)

Software is fundamentally about solving problems. While methodologies like Agile help us build better software, lean principles are about making sure that our better software solves the right problems. Think big, act small, fail fast, learn rapidly.

---

To read more about lean development in action, check out [The Lean Startup](http://theleanstartup.com/) by Eric Ries.
