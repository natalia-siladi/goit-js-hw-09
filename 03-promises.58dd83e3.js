!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t);var r=t("h6c0i"),i=document.querySelector(".form"),u=document.querySelector('[name = "delay"]'),a=document.querySelector('[name = "step"]'),c=document.querySelector('[name = "amount"]');function l(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(u.value),o=Number(a.value),t=Number(c.value),i=1;i<=t;i+=1)l(i,n).then((function(e){var n=e.position,o=e.delay;return r.Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;return r.Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=o}))}();
//# sourceMappingURL=03-promises.58dd83e3.js.map
