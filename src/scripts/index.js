//TEL MASK

import IMask from "imask";

let phoneMask = document.querySelector('.signup__tel');
let maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
let mask = IMask(phoneMask, maskOptions);

phoneMask.value = mask.value;

//SCROLL

const aboutEl = document.querySelector('.about');
const aboutButton = document.querySelector('.navbar__item_about');

const serviceEl = document.querySelector('.service');
const serviceButton = document.querySelector('.navbar__item_service');

const signupEl = document.querySelector('.signup');
const signupInput = document.querySelector('.signup__name');
const signupButton = document.querySelector('.signup__button');

function scrollAbout() {
  aboutEl.scrollIntoView({behavior: "smooth", block: "center"})
}

function scrollService() {
  serviceEl.scrollIntoView({behavior: "smooth", block: "center"})
}

function scrollSignup() {
  signupEl.scrollIntoView({behavior: "smooth", block: "center"});
  setTimeout(() => signupInput.focus(), 1000)
}

aboutButton.onclick = scrollAbout;
serviceButton.onclick = scrollService;
signupButton.onclick = scrollSignup;

//FORM

const signupForm = document.querySelector('.signup__form');

signupForm.addEventListener('submit', formSend);

async function formSend(evt){
  evt.preventDefault();

  let error = formValidate(signupForm);

  let formData = new FormData(signupForm);

  if (error === 0) {
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });

    if (response.ok){
      alert('Ваше сообщение отправлено!');
      signupForm.reset();
      
    } else {
      alert('Ошибка отправки');
    }

  } else {
    alert ('Заполните обязательные поля');
  }

}

function formAddError(input){
  input.classList.add('_error');
}

function formRemoveError(input){
  input.classList.remove('_error');
}
  


function formValidate(signupForm){
  let error = 0;
  let formReq = document.querySelectorAll('._req');

  for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.value === '') {
          formAddError(input);
          error++;
      }
  }

  return error;

}

//ACCORDION

class Accordion {
  constructor(el) {
    this.el = el;
    this.summary = el.querySelector('summary');
    this.content = el.querySelector('.about__accordion-content');

    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener('click', (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();
    this.el.style.overflow = 'hidden';
    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + 36}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => this.onAnimationFinish(false);
    this.animation.oncancle = () => this.isClosing = false;
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight + 70}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => this.onAnimationFinish(true);
    this.animation.oncancel = () => this.isExpanding = false;
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = '';
  }
}

document.querySelectorAll('.about__accordion').forEach((el) => {
  new Accordion(el);
});


