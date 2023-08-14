/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (() => {

eval("//SCROLL\r\n\r\nconst aboutEl = document.querySelector('.about');\r\nconst aboutButton = document.querySelector('.navbar__item_about');\r\n\r\nconst serviceEl = document.querySelector('.service');\r\nconst serviceButton = document.querySelector('.navbar__item_service');\r\n\r\nconst signupEl = document.querySelector('.signup');\r\nconst signupInput = document.querySelector('.signup__name');\r\nconst signupButton = document.querySelector('.signup__button');\r\n\r\nfunction scrollAbout() {\r\n  aboutEl.scrollIntoView({behavior: \"smooth\", block: \"start\"})\r\n}\r\n\r\nfunction scrollService() {\r\n  serviceEl.scrollIntoView({behavior: \"smooth\", block: \"center\"})\r\n}\r\n\r\nfunction scrollSignup() {\r\n  signupEl.scrollIntoView({behavior: \"smooth\", block: \"center\"});\r\n  setTimeout(() => signupInput.focus(), 1000)\r\n}\r\n\r\naboutButton.onclick = scrollAbout;\r\nserviceButton.onclick = scrollService;\r\nsignupButton.onclick = scrollSignup;\r\n\r\n//FORM\r\n\r\nconst signupForm = document.querySelector('.signup__form');\r\n\r\nsignupForm.addEventListener('submit', formSend);\r\n\r\nasync function formSend(evt){\r\n  evt.preventDefault();\r\n\r\n  let error = formValidate(signupForm);\r\n\r\n  let formData = new FormData(signupForm);\r\n\r\n  if (error === 0) {\r\n    let response = await fetch('sendmail.php', {\r\n      method: 'POST',\r\n      body: formData\r\n    });\r\n\r\n    if (response.ok){\r\n      alert('Ваше сообщение отправлено!');\r\n      signupForm.reset();\r\n      \r\n    } else {\r\n      alert('Ошибка отправки');\r\n    }\r\n\r\n  } else {\r\n    alert ('Заполните обязательные поля');\r\n  }\r\n\r\n}\r\n\r\nfunction formAddError(input){\r\n  input.classList.add('_error');\r\n}\r\n\r\nfunction formRemoveError(input){\r\n  input.classList.remove('_error');\r\n}\r\n  \r\n\r\n\r\nfunction formValidate(signupForm){\r\n  let error = 0;\r\n  let formReq = document.querySelectorAll('._req');\r\n\r\n  for (let i = 0; i < formReq.length; i++) {\r\n      const input = formReq[i];\r\n      formRemoveError(input);\r\n\r\n      if (input.value === '') {\r\n          formAddError(input);\r\n          error++;\r\n      }\r\n  }\r\n\r\n  return error;\r\n\r\n}\r\n\r\n//ACCORDION\r\n\r\n// class Accordion {\r\n//   constructor(el) {\r\n//     this.el = el;\r\n//     this.summary = el.querySelector('summary');\r\n//     this.content = el.querySelector('.about__accordion-content');\r\n\r\n//     this.animation = null;\r\n//     this.isClosing = false;\r\n//     this.isExpanding = false;\r\n//     this.summary.addEventListener('click', (e) => this.onClick(e));\r\n//   }\r\n\r\n//   onClick(e) {\r\n//     e.preventDefault();\r\n//     this.el.style.overflow = 'hidden';\r\n//     if (this.isClosing || !this.el.open) {\r\n//       this.open();\r\n//     } else if (this.isExpanding || this.el.open) {\r\n//       this.shrink();\r\n//     }\r\n//   }\r\n\r\n//   shrink() {\r\n//     this.isClosing = true;\r\n//     const startHeight = `${this.el.offsetHeight}px`;\r\n//     const endHeight = `59.2px`;\r\n\r\n//     if (this.animation) {\r\n//       this.animation.cancel();\r\n//     }\r\n\r\n//     this.animation = this.el.animate({\r\n//       height: [startHeight, endHeight]\r\n//     }, {\r\n//       duration: 400,\r\n//       easing: 'ease-out'\r\n//     });\r\n\r\n//     this.animation.onfinish = () => this.onAnimationFinish(false);\r\n//     this.animation.oncancle = () => this.isClosing = false;\r\n//   }\r\n\r\n//   open() {\r\n//     this.el.style.height = `${this.el.offsetHeight}px`;\r\n//     this.el.open = true;\r\n//     window.requestAnimationFrame(() => this.expand());\r\n//   }\r\n\r\n//   expand() {\r\n//     this.isExpanding = true;\r\n//     const startHeight = '59.2px';\r\n//     const endHeight = el.querySelector('.about__accordion-content').height;\r\n//     console.log(endHeight);\r\n\r\n//     if (this.animation) {\r\n//       this.animation.cancel();\r\n//     }\r\n\r\n//     this.animation = this.el.animate({\r\n//       height: [startHeight, endHeight]\r\n//     }, {\r\n//       duration: 400,\r\n//       easing: 'ease-out'\r\n//     });\r\n\r\n//     this.animation.onfinish = () => this.onAnimationFinish(true);\r\n//     this.animation.oncancel = () => this.isExpanding = false;\r\n//   }\r\n\r\n//   onAnimationFinish(open) {\r\n//     this.el.open = open;\r\n//     this.animation = null;\r\n//     this.isClosing = false;\r\n//     this.isExpanding = false;\r\n//     this.el.style.height = this.el.style.overflow = '';\r\n//   }\r\n// }\r\n\r\n// document.querySelectorAll('.about__accordion').forEach((el) => {\r\n//   new Accordion(el);\r\n// });\r\n\r\n\r\n\n\n//# sourceURL=webpack://yanabychkova/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/index.js"]();
/******/ 	
/******/ })()
;