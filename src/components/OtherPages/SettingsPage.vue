<template>
<main class="vh-100">
  <div class="container pt-4">
    <h1 >Settings</h1>
    <h2>User Settings</h2>
    <hr>
  </div>

  <div>
    <div class="avatar">
    <div class="d-flex mb-0">
        <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
        class="rounded-circle" alt="example placeholder" style="width: 100px;" />
        <div class="btn btn-primary btn-rounded">
            <label class="form-label text-white m-1" for="customFile2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg></label>
            <input type="file" class="form-control d-none" id="customFile2" />
          </div>
    <h3 class="d-flex">Name</h3>
    </div>
    </div>
  </div>

  <div>
    <div class="details d-flex flex-direction-row pt-2">
      <div class="row-child">
        <div class="row-child-btn">
          <h4>Email</h4>
          <button type="button" class="btn btn-primary email-btn">Edit</button>
        </div>
        <p> user@example.com</p>
      </div>
      <div class="row-child">
        <div class="row-child-btn">
          <h4>Telephone Number</h4>
          <button type="button" class="btn btn-primary tel-btn">Edit</button>
        </div>
        <p> 0XX-XXX-YYYY</p>
      </div>
    </div>
    <div class="password">
        <h4>Password</h4>
        <button type="button" class="btn btn-primary">Change Password</button>
      </div>
  </div>

  <div class="theme pt-2">
    <h3>Appearance</h3>
    <h4>Theme</h4>
    <div class="theme-toggles">
      <div>
        <button class="light-mode">
          <div class="theme-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 -5 20 20">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
            </svg>
          <p>Light Mode</p>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          </div>
        </button>
      </div>
      <div>
        <button class="dark-mode">
          <div class="theme-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 -5 20 20">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
</svg>
          <p>Dark Mode</p>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          </div>
        </button>
      </div>
    </div>
  </div>

  <div class="accessibility pt-2">
    <div class="desc d-flex">
        <h3>Accessibility</h3>
        <p>Accesibility Mode: <span>Off</span></p>
        <p class="desc-p"><span>*Accessibility Mode increases font-size</span><span>and contrast to improve text readability</span><span>and promote easier usage.</span></p>
    </div>
    <button type="button" class="btn btn-primary"><span>Turn On</span></button>
  </div>

  <div class="language pt-2">
    <div class="lang d-flex">
        <h3>Language</h3>
        <p>Current Language: <span>English</span></p>
        <p class="desc-p">*Switch between English and Filipino</p>
    </div>
    <button type="button" class="btn btn-primary">Switch to <span> Filipino</span></button>
  </div>

</main>
</template>

<style scoped>
main {
    padding-top: 0;
    padding-left: 0;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
}
hr {
  border: 2px solid black !important;
  width: 128%;
  margin-left: 0;
  margin-right: auto;
}
h1 {
  font-size: xx-large;
  margin-left: 0;
}
h2 {
  font-size: x-large;
}
.avatar h3 {
  align-items: center;
  margin: 0 1rem;
}
.avatar {
  margin: 0 1rem;
  position: relative;
}
.avatar .btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  position: absolute;
  bottom: 0;
  margin-left: 4rem;
}
.btn-rounded .form-label {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin: 0;
}

.btn-rounded {
  border-radius: 50%;
  width: 30px; /* adjust the size as needed */
  height: 30px; /* adjust the size as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  margin: 0 0.5rem;
}
.details {
  margin-top: 1rem;
  margin-left: 2rem;
}
.row-child {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 5rem;
}
.row-child-btn {
  display: flex;
  justify-content: space-between;
}
.row-child-btn .email-btn {
margin-left: 10rem;
}
.row-child-btn .tel-btn {
  margin-left: 5rem;
}
.password {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  margin-left: 2rem;
}
.theme {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 2rem;
  margin-top: 1rem;
}
.theme-label {
  display: flex;
  align-content: center;
  margin: 0 1rem;
}
.theme button {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: .5rem .5rem;
  margin-right: 1rem;
}
.theme .bi {
  margin: 0 .5rem;
}
.theme-toggles {
  display: flex;
}
.light-mode {
  background-color: white;
}
.dark-mode {
  background-color: black;
  color: white;
}
.desc {
  align-items: flex-start;
  flex-direction: column;
}
.desc p {
  margin-bottom:  0;
}
.desc-p {
  display: flex;
  flex-direction: column;
  font-size: small;
}
.accessibility {
  margin-left: 2rem;
  margin-top: 1rem;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
}
.accessibility button {
  display: flex;
  justify-content: space-between;
  margin-left: 5rem;
  margin-top: 3rem;
}
.language {
  margin-left: 2rem;
  margin-top: 1rem;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
}
.language button {
  display: flex;
  justify-content: space-between;
  margin-left: 6rem;
  margin-top: 2rem;
}
.lang{
  align-items: flex-start;
  flex-direction: column;
}
.lang p {
  margin-bottom:  0;
}
span {
  margin-left: .2rem;
}
</style>