---
layout: page
title: Music
class: music
nav-position: 3
permalink: /music/
---

<div class="hero">
  <div class="content-wrapper">
    <div class="hero__container">
      <h1 class="hero__heading">
        <span class="hero__description-prevent-break">Kevin is a DJ</span>
        <span class="hero__description-prevent-break">with a penchant for</span>
        <span class="hero__description-prevent-break">soul, funk, R&amp;B, and disco</span>
      </h1>
      <div class="hero__soundcloud-wrapper">
        <div class="hero__soundcloud-sizer">
          <iframe class="hero__soundcloud-embed" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2858291&amp;color=ff5500&amp;auto_play=false&amp;show_artwork=true"></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="page-body">
  <div class="content-wrapper">
    <h2 class="page-body__title">All about the music</h2>
    <p class="page-body__copy">
      Witnessing a KJH set is a body and soul experience. He can move from mood-setting jams to upbeat soul, funk, disco, and house. Maybe a little sax throughout too.
    </p>
    <p class="page-body__copy">
      As an avid record collector, his vinyl collection ranges from left-field grooves to feel good hits. You can find him holding down Silk &amp; Soul at Punch House on second Wednesdays, as well as various nights at his favorite spots in Chicago.
    </p>
    <div class="page-body__contact">
      <h3 class="page-body__contact-heading">Get in touch with DJ inquiries</h3>
      <form class="simpleform hide" id="simpleform" action="https://getsimpleform.com/messages?form_api_token=1b8d5d4e7de55ac5111769f80a7747bf" method="post">
        <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
        <input type="hidden" name="redirect_to" value="{{ site.url }}/thanks" />
        <!-- all your input fields here.... -->
        <div class="page-body__input-wrapper">
          <label for="name">Name</label>
          <input id="name" type='text' name='name' />
        </div>
        <div class="page-body__input-wrapper">
          <label for="email">Email</label>
          <input id="email" type='text' name='email' />
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
