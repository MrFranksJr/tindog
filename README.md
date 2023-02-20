*Feb 14, 2022 - Franky Jr Blondeel*
<p align="center">
<img alt="banner image" src="https://raw.githubusercontent.com/MrFranksJr/MrFranksJr/main/assets/tindog/Banner.png">
</p>

# Tindog – a Tinder clone

## Overview

**Live version [here](https://tindogzzz.netlify.app/)**

Tindog was the solo project of Module 7 (advanced JavaScript) over at [scrimba.com](https://scrimba.com)'s front-end developer career path course.
The goal was to build a simple tinder clone, using Javascript classes, as a perfect closer for what had been taught in the previous couple of scrims.

Below are the requirements:
<p align="center">
<img alt="requirements" src="https://raw.githubusercontent.com/MrFranksJr/MrFranksJr/main/assets/tindog/requirements.png">
</p>

We also got provided a Figma design, and part of the goal was to follow that design.

## My original plan
Originally, I wanted to build the app just as seen in the screenshot. This meant 100% I should follow the Figma design, which is a mobile first approach. I started by creating a hard-coded mockup in HTML, so I could fine-tune all the CSS, before I pulled anything in dynamically over Javascript

As was also part of the requirement, I created one main class 'Dog' which I would use to pull in all kinds of data related to the dog:
* age of the dog
* bio of the dog
* name
* avatar

Additionally, some 'invisible' data is also part of the dog and that is wether or not the dog was swiped and/or was liked.

I have to say that building the base-app was quite a blast, and honestly, not hard at all. The biggest joy for me is noticing how my way of thinking is really starting to change with each passing week. Also, Tindog was really rewarding in the fact that I could put all my friends' dogs in the app, which they all loved :D

It didn't take me too long to set some stretch goals and to think of some extra's I wanted to see in the app.

## Stretch goals - some extra's
For this particular assignment, no real stretch goals were set. However, I didn't think it too hard to come up with a couple of interesting extras myself.

### Mobile first?
First issue I encountered after the first version of the app was published online, was the fact that it seemed hard to get a proper vertical scaling going on Safari or on mobile browsers in general.
Basically, what I noticed is that Safari didn't play nice with '100vh' did not play nice on Safari with the collapsable toolbars. When you landed on the Tindog home screen, the toolbar would obscure part of the '100vh' body element.
So I scanned around google to find some piece of code that would fix this and take it into account.
By looking at the **window.innerHeight** property, and adjusting the container height to this window.innerHeight, allowed me to keep everything in view of the user, if their toolbars were collapsed or not :) 

So I found this:
```
const convertStyle = () => {
    const height = window.innerHeight;
    Array.from(document.getElementsByClassName("container")).forEach((element) => {
    element.style.height = `${height}px`
    })
}

```
and this piece of code is run, every time the user loads the page, as well as resizes the window.

Really nice trick that I'll surely be able to use later!!

Furthermore, I just blocked the vertical scrolling on the app entirely. Reason for this was actually introduced later: I wanted to implement a swiping feature, just like the real thing :) And the up/down scrolling bounce did not play nice with my horizontal swiping feature.
So I added the following in my CSS:
```
body:has(.requires-no-scroll) {
    overflow: hidden;
  }
```
Which seemed to do the job perfectly.
<p align="center">
<img alt="demo of the resizing" src="https://raw.githubusercontent.com/MrFranksJr/MrFranksJr/main/assets/tindog/toolbar.webp">
</p>

### Multiple Photos
One thing I really wanted to make part of the app is the fact that a dog could have multiple photos on their profile, just like the real Tinder (I think??)
The idea is to have some navigation dots appear on the bottom of the photo, if there are multiple photos available. That meant changing the data structure a bit of the data.js file, which contains all the dogs in the system, to hold an array of relative URLs.
If multiple are available, that meant there are multiple pictures.

Next up, I needed to make the left and right sides of the pictures clickable, in order to load in the next or the previous pictures.

I first did this by setting up big <a> elements that covered the entire left and right side of the pictures. Something I had to refactor later entirely (due to the swipe feature I had to introduce)

It was a bit of a search, but in the end, I could easily navigate through pictures, and it really brought the app to life!
<p align="center">
<img alt="photo scrolling" src="https://raw.githubusercontent.com/MrFranksJr/MrFranksJr/main/assets/tindog/photos.webp">
</p>

### Some Design changes
Next up, I spent some attention on the details, adding some icons to the site (like favicons, apple touch logos, etc).

It really made the whole thing look a lot nicer when sharing to other people over Whatsapp and such!
<p align="center">
<img alt="photo scrolling" src="https://raw.githubusercontent.com/MrFranksJr/MrFranksJr/main/assets/tindog/apple-touch.jpeg">
</p>
<p align="center">
<img alt="photo scrolling" src="https://raw.githubusercontent.com/MrFranksJr/MrFranksJr/main/assets/tindog/whatsapp.png">
</p>


### Desktop Version

### Actual Swiping

### More dogs!!

## Conclusion