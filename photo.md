---
layout: page
title: Photo
class: photo
nav-position: 1
permalink: /photo/
---

<div class="hero">
  <div class="content-wrapper">
    <div class="hero__container">
      <h1 class="hero__heading">
        <span class="hero__description-prevent-break">Kevin is a photographer</span>
        <span class="hero__description-prevent-break">specializing in portraits,</span>
        <span class="hero__description-prevent-break">weddings, and events</span>
      </h1>
      <div class="hero__slideshow-wrapper">
        <div class="hero__slideshow-sizer">
          <div class="hero__slideshow" id="fancy-slideshow">
            <img src="../assets/images/gallery/00.jpg">
            <img src="../assets/images/gallery/01.jpg">
            <img src="../assets/images/gallery/02.jpg">
            <img src="../assets/images/gallery/03.jpg">
            <img src="../assets/images/gallery/04.jpg">
            <img src="../assets/images/gallery/05.jpg">
            <img src="../assets/images/gallery/06.jpg">
            <img src="../assets/images/gallery/07.jpg">
            <img src="../assets/images/gallery/08.jpg">
            <img src="../assets/images/gallery/09.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="page-body">
  <div class="content-wrapper">
    <h2 class="page-body__title">A history of film and digital</h2>
    <p class="page-body__copy">
      Kevin started shooting with his dad's Nikon film camera in the Summer of 2007. He founded VAMP (Vintage Analog Manual Photographers), a student organization at the University of Illinois at Urbana-Champaign. Since graduating, current students and alum continue the film tradition.
    </p>
    <p class="page-body__copy">
      Kevin works with both film and digital mediums in Chicago, photographing weddings, events, and portraits. His love of Chicago’s vibrant music and startup community has led him to photograph some of the most innovative up and coming artists. His work can be seen in various web and print publications.
    </p>
    <p class="page-body__copy">
      Past music clients include Different Sleep, Hey Champ, Lavelle, Ramonst3r, Vagabond Maurice, JROB, and many more.
    </p>
    <div class="page-body__contact">
      <h3 class="page-body__contact-heading">Get in touch with photo inquiries</h3>
      <form class="simpleform hide" id="simpleform" action="https://getsimpleform.com/messages?form_api_token=1b8d5d4e7de55ac5111769f80a7747bf" method="post">
        <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
        <input type="hidden" name="redirect_to" value="{{ site.url }}/thanks" />
        <!-- all your input fields here.... -->
        <div class="page-body__input-wrapper">
          <label for="name">Name</label>
          <input id="name" type='text' name='message' />
        </div>
        <div class="page-body__input-wrapper">
          <label for="email">Email</label>
          <input id="email" type='text' name='message' />
        </div>
        <div class="page-body__input-wrapper">
          <label for="info">How can I help?</label>
          <textarea id="info" type='text' name='message'></textarea>
        </div>
        <div class="page-body__input-wrapper">
          <div class="page-body__submit-spacer"></div>
          <input type='submit' value='Submit' />
        </div>
      </form>
      <a class="page-body__contact-button" id="toggle-contact-form" href="javascript:;">Contact</a>
    </div>
  </div>
</div>
