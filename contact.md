---
layout: page
title: Contact
class: contact
nav-position: 4
permalink: /contact/
---

<div class="hero">
  <div class="content-wrapper">
    <div class="hero__container">
      <div class="hero__avatar-contact"></div>
      <div class="hero__about">
        <h1 class="hero__heading">Hi, I'm Kevin</h1>
        <div class="hero__about-body">
          <p>I'm a creative professional living in Chicago. You can find me taking photographs, video, or playing records at night.</p>
          <p>I am always interested in new opportunities, projects and collaborations.</p>
        </div>
    </div>
  </div>
</div>
<div class="page-body">
  <div class="content-wrapper">
    <h2 class="page-body__title">
      Contact Kevin Hsia
    </h2>
    <p class="page-body__copy">
      Get in touch with Kevin via <a href="mailto:khsia2@gmail.com">email</a>, or via the form below.
    </p>
    <form class="simpleform" action="https://getsimpleform.com/messages?form_api_token=1b8d5d4e7de55ac5111769f80a7747bf" method="post">
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
  </div>
</div>
