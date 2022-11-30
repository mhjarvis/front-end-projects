# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG).

## Table of contents

  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

A preview card built with HTML and CSS that is responsive.

### Screenshot

![Desktop](./desktop.png)
![Tablet](./tablet.png)
![Mobile](./mobile.png)

### Links

- Solution URL: [https://github.com/mhjarvis/frontend-mentor-projects/tree/main/newbie_solutions/pod-request-access-landing-page](https://github.com/mhjarvis/frontend-mentor-projects/tree/main/newbie_solutions/pod-request-access-landing-page)
- Live Site URL: [https://mhjarvis-pod-request-landing-page.netlify.app/](https://mhjarvis-pod-request-landing-page.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

1. One issue I was having when creating smaller components was how to make it responsive so that it would adjust even when the window went below the lowwest height/width. One approach I found via https://xavortm.com/responsive-containers-in-css/:

Instead of using fixed height/width, such as:

    .container {
      height: 600px;
      width: 375px;
      background-image: url('someimage.png');
      background-size: cover;
    }

We can use this approach to help resize content: 

    .container {
      height: 600px;
      width: 100%;
      width: 375px;
      background-image: url('someimage.png');
      background-size: cover;
    }

### Useful resources

- [Reponive Containers in CSS](https://xavortm.com/responsive-containers-in-css/) - Good article on how to create responsive containers - something that has been stumbling me for a while. This article seemed to reinforce it.

## Author

- Frontend Mentor - [@mhjarvis](https://www.frontendmentor.io/profile/mhjarvis)
- GitHub - [@mhjarvis](https://github.com/mhjarvis)