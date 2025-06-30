"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AIBot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function AIBot() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const styles = `
      @layer properties {
        @property --elh {
          syntax: '<number>';
          inherits: true;
          initial-value: 1;
        }
        @property --erx {
          syntax: '<percentage>';
          inherits: true;
          initial-value: 0%;
        }
        @property --fx {
          syntax: '<percentage>';
          inherits: true;
          initial-value: 0%;
        }
        @property --ealw {
          syntax: '<number>';
          inherits: true;
          initial-value: 1;
        }
        @property --earw {
          syntax: '<number>';
          inherits: true;
          initial-value: 1;
        }
        @property --erh {
          syntax: '<number>';
          inherits: true;
          initial-value: 1;
        }
        @property --mh {
          syntax: '<number>';
          inherits: true;
          initial-value: 1;
        }
        @property --mw {
          syntax: '<number>';
          inherits: true;
          initial-value: 1;
        }
      }

      .ai-bot {
        --surface: #111;
        --c: white;
        --c2: #9ae3dc;
        --c3: magenta;
        scale: 0.8;
        width: 34px;
        aspect-ratio: 1;
        position: relative;
        display: grid;
        place-items: center;
        animation: blink 2.4s ease infinite, move-head 4.2s linear(0 0%, 0 2.27%, 0.02 4.53%, 0.04 6.8%, 0.06 9.07%, 0.1 11.33%, 0.14 13.6%, 0.25 18.15%, 0.39 22.7%, 0.56 27.25%, 0.77 31.8%, 1 36.35%, 0.89 40.9%, 0.85 43.18%, 0.81 45.45%, 0.79 47.72%, 0.77 50%, 0.75 52.27%, 0.75 54.55%, 0.75 56.82%, 0.77 59.1%, 0.79 61.38%, 0.81 63.65%, 0.85 65.93%, 0.89 68.2%, 1 72.7%, 0.97 74.98%, 0.95 77.25%, 0.94 79.53%, 0.94 81.8%, 0.94 84.08%, 0.95 86.35%, 0.97 88.63%, 1 90.9%, 0.99 93.18%, 0.98 95.45%, 0.99 97.73%, 1 100%) infinite, mouth 1.2s ease-in infinite;
      }

      .ai-bot .head {
        background: linear-gradient(var(--c) 80%, color-mix(in srgb, var(--c), black 30%), var(--c));
        border-radius: .375rem;
        position: absolute;
        width: 28px;
        height: 20px;
      }

      .ai-bot .head:before,
      .ai-bot .head:after {
        content: '';
        position: absolute;
        left: -4px;
        top: 6px;
        width: 2px;
        height: 8px;
        background: var(--c, 1);
        border-radius: 2px 0 0 2px;
        scale: var(--ealw, 1) 1;
      }

      .ai-bot .head:after {
        right: -4px;
        left: unset;
        border-radius: 0 2px 2px 0;
        scale: var(--earw, 1) 1;
      }

      .ai-bot .face {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        inset: 0 3px;
        background: var(--surface);
        translate: var(--fx) 0;
        border-radius: 4px;
        padding: 4px 4px 2px 4px;
        gap: 3px;
      }

      .ai-bot .face:before {
        content: '';
        background: var(--c);
        position: absolute;
        height: 1px;
        width: 10px;
        top: -2px;
        border-radius: 2px 2px 0 0;
        mask: radial-gradient(circle at 50% 100%, transparent 45%, black 45%);
      }

      .ai-bot .eyes {
        display: flex;
        height: 8px;
        gap: 6px;
      }

      .ai-bot .eyes:before,
      .ai-bot .eyes:after {
        content: '';
        width: 5px;
        height: 8px;
        scale: 1 var(--elh);
        filter: drop-shadow(0 0 2px var(--c2));
        background: repeating-linear-gradient(to bottom, var(--c), var(--c) .25px, transparent .25px, transparent .6px), linear-gradient(to bottom, var(--c3), transparent 60%), var(--c2);
        border-radius: 1px;
        translate: var(--erx) 0;
      }

      .ai-bot .eyes:after {
        scale: 1 var(--erh);
        translate: var(--erx) 0;
      }

      .ai-bot .mouth {
        width: 10px;
        height: 2px;
        background: var(--c2);
        border-radius: 0 0 1px 1px;
        filter: drop-shadow(0 0 2px var(--c2));
        scale: var(--mw, 1) var(--mh, 1);
      }

      @keyframes blink {
        from, 10%, to {
          --elh: 1;
          --erh: 1;
        }
        2% {
          --elh: .2;
        }
        8% {
          --erh: .1;
        }
      }

      @keyframes mouth {
        from, 30%, 70%, to {
          --mh: 1;
          --mw: 1;
        }
        20% {
          --mh: .5;
        }
        60% {
          --mw: .7;
        }
      }

      @keyframes move-head {
        from, 20%, 40%, to {
          --erx: 0%;
          --fx: 0%;
          --ealw: 1;
          --earw: 1;
        }
        10% {
          --erx: 20%;
          --fx: 10%;
          --ealw: 1.5;
          --earw: .5;
        }
        30% {
          --erx: -20%;
          --fx: -10%;
          --ealw: .5;
          --earw: 1.5;
        }
      }
    `;
        if (typeof document !== "undefined") {
            const styleElement = document.createElement("style");
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);
            return ()=>{
                document.head.removeChild(styleElement);
            };
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "ai-bot",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "head",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "face",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "eyes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mouth"
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AnimatedSphere)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./styles/theme.js
// Design system theme configuration
const theme = {
    colors: {
        primary: {
            orange: "#ff6600",
            gradient: {
                start: "hsl(98 100% 62%)",
                end: "hsl(204 100% 59%)",
                animated: {
                    from: "hsl(210 100% 59%)",
                    to: "hsl(310 100% 59%)"
                }
            }
        },
        text: {
            primary: "#ffffff",
            secondary: "#9CA3AF",
            muted: "#666666"
        },
        background: {
            primary: "#000000",
            secondary: "#101010"
        }
    },
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem"
    },
    animations: {
        duration: {
            fast: "0.15s",
            normal: "0.3s",
            slow: "0.5s",
            sphere: "2s",
            rotation: "5s"
        },
        easing: {
            linear: "linear",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out"
        }
    },
    breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
    },
    typography: {
        fontFamily: {
            mono: '"Dank Mono", ui-monospace, monospace',
            sans: "system-ui, -apple-system, sans-serif"
        },
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            hero: "10vmin"
        }
    },
    shadows: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
        glow: "0 0 0.3vmin 0.3vmin"
    }
};
// CSS Custom Properties generator
const generateCSSVariables = (theme)=>{
    const cssVars = {};
    const flatten = (obj, prefix = "")=>{
        Object.keys(obj).forEach((key)=>{
            const value = obj[key];
            const newKey = prefix ? `${prefix}-${key}` : key;
            if (typeof value === "object" && value !== null) {
                flatten(value, newKey);
            } else {
                cssVars[`--${newKey}`] = value;
            }
        });
    };
    flatten(theme);
    return cssVars;
};
/* harmony default export */ const styles_theme = (theme);

;// CONCATENATED MODULE: ./components/AnimatedSphere.js




const AnimatedSphere = ({ size ="15vmin" , color =styles_theme.colors.primary.orange , speed =styles_theme.animations.duration.sphere , rotationSpeed =styles_theme.animations.duration.rotation , rings =21 , className =""  })=>{
    const { 0: isVisible , 1: setIsVisible  } = (0,external_react_.useState)(false);
    const { 0: isReducedMotion , 1: setIsReducedMotion  } = (0,external_react_.useState)(false);
    // Check for reduced motion preference
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    // Intersection Observer for performance optimization
    (0,external_react_.useEffect)(()=>{
        if (false) {} else {
            setIsVisible(true);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: style_default().dynamic([
                    [
                        "1ced9cfb24b495e1",
                        [
                            speed,
                            color,
                            size,
                            size
                        ]
                    ]
                ]) + " " + "sphere",
                children: Array.from({
                    length: 21
                }, (_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "1ced9cfb24b495e1",
                                [
                                    speed,
                                    color,
                                    size,
                                    size
                                ]
                            ]
                        ])
                    }, i))
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "1ced9cfb24b495e1",
                dynamic: [
                    speed,
                    color,
                    size,
                    size
                ],
                children: `.sphere.__jsx-style-dynamic-selector{--s:${speed};--d:40;--c:${color};width:${size};height:${size};background:transparent;position:relative;-webkit-animation:spin 5s linear 0s infinite;-moz-animation:spin 5s linear 0s infinite;-o-animation:spin 5s linear 0s infinite;animation:spin 5s linear 0s infinite;-webkit-animation-play-state:running;-moz-animation-play-state:running;-o-animation-play-state:running;animation-play-state:running;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;will-change:transform}@media(prefers-reduced-motion:reduce){.sphere.__jsx-style-dynamic-selector{-webkit-animation:none;-moz-animation:none;-o-animation:none;animation:none}}.sphere.__jsx-style-dynamic-selector:hover{-webkit-animation-play-state:paused;-moz-animation-play-state:paused;-o-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spin{0%{-webkit-transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg)}100%{-webkit-transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg)}}@-moz-keyframes spin{0%{-moz-transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg)}100%{-moz-transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg)}}@-o-keyframes spin{0%{transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg)}100%{transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg)}}@keyframes spin{0%{-webkit-transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg);-moz-transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg)}100%{-webkit-transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg);-moz-transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg)}}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{--sz:23%;--dv:calc(var(--s) / var(--d));--dl:calc(var(--dv) * -1);width:var(--sz);height:var(--sz);position:absolute;border:.15vmin solid var(--c);-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;-webkit-transform:rotateX(90deg)translateZ(7.35vmin);-moz-transform:rotateX(90deg)translateZ(7.35vmin);transform:rotateX(90deg)translateZ(7.35vmin);-webkit-box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;-moz-box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;-webkit-animation:shine var(--s)linear var(--dl)infinite;-moz-animation:shine var(--s)linear var(--dl)infinite;-o-animation:shine var(--s)linear var(--dl)infinite;animation:shine var(--s)linear var(--dl)infinite;background:transparent;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes shine{50%,100%{border-color:#10101000;-webkit-box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;-webkit-filter:hue-rotate(540deg);filter:hue-rotate(540deg)}}@-moz-keyframes shine{50%,100%{border-color:#10101000;-moz-box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;filter:hue-rotate(540deg)}}@-o-keyframes shine{50%,100%{border-color:#10101000;box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;filter:hue-rotate(540deg)}}@keyframes shine{50%,100%{border-color:#10101000;-webkit-box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;-moz-box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;-webkit-filter:hue-rotate(540deg);filter:hue-rotate(540deg)}}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:before{content:"";width:100%;height:100%;position:absolute;border:.15vmin solid var(--c);-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;-webkit-box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;-moz-box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;-webkit-animation:shine var(--s)linear -webkit-calc(var(--dl)*-1)infinite;-moz-animation:shine var(--s)linear -moz-calc(var(--dl)*-1)infinite;-o-animation:shine var(--s)linear calc(var(--dl)*-1)infinite;animation:shine var(--s)linear -webkit-calc(var(--dl)*-1)infinite;animation:shine var(--s)linear -moz-calc(var(--dl)*-1)infinite;animation:shine var(--s)linear calc(var(--dl)*-1)infinite}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(2){-webkit-transform:rotateX(90deg)translateZ(6.75vmin);-moz-transform:rotateX(90deg)translateZ(6.75vmin);transform:rotateX(90deg)translateZ(6.75vmin);--sz:43%;--dl:calc(var(--dv) * -2);-webkit-filter:hue-rotate(-2deg);filter:hue-rotate(-2deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(3){-webkit-transform:rotateX(90deg)translateZ(6vmin);-moz-transform:rotateX(90deg)translateZ(6vmin);transform:rotateX(90deg)translateZ(6vmin);--sz:60%;--dl:calc(var(--dv) * -3);-webkit-filter:hue-rotate(-4deg);filter:hue-rotate(-4deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(4){-webkit-transform:rotateX(90deg)translateZ(5.25vmin);-moz-transform:rotateX(90deg)translateZ(5.25vmin);transform:rotateX(90deg)translateZ(5.25vmin);--sz:71%;--dl:calc(var(--dv) * -4);-webkit-filter:hue-rotate(-6deg);filter:hue-rotate(-6deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(5){-webkit-transform:rotateX(90deg)translateZ(4.5vmin);-moz-transform:rotateX(90deg)translateZ(4.5vmin);transform:rotateX(90deg)translateZ(4.5vmin);--sz:80%;--dl:calc(var(--dv) * -5);-webkit-filter:hue-rotate(-8deg);filter:hue-rotate(-8deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(6){-webkit-transform:rotateX(90deg)translateZ(3.75vmin);-moz-transform:rotateX(90deg)translateZ(3.75vmin);transform:rotateX(90deg)translateZ(3.75vmin);--sz:86%;--dl:calc(var(--dv) * -6);-webkit-filter:hue-rotate(-10deg);filter:hue-rotate(-10deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(7){-webkit-transform:rotateX(90deg)translateZ(3vmin);-moz-transform:rotateX(90deg)translateZ(3vmin);transform:rotateX(90deg)translateZ(3vmin);--sz:91%;--dl:calc(var(--dv) * -7);-webkit-filter:hue-rotate(-12deg);filter:hue-rotate(-12deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(8){-webkit-transform:rotateX(90deg)translateZ(2.25vmin);-moz-transform:rotateX(90deg)translateZ(2.25vmin);transform:rotateX(90deg)translateZ(2.25vmin);--sz:95%;--dl:calc(var(--dv) * -8);-webkit-filter:hue-rotate(-14deg);filter:hue-rotate(-14deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(9){-webkit-transform:rotateX(90deg)translateZ(1.5vmin);-moz-transform:rotateX(90deg)translateZ(1.5vmin);transform:rotateX(90deg)translateZ(1.5vmin);--sz:97%;--dl:calc(var(--dv) * -9);-webkit-filter:hue-rotate(-16deg);filter:hue-rotate(-16deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(10){-webkit-transform:rotateX(90deg)translateZ(.75vmin);-moz-transform:rotateX(90deg)translateZ(.75vmin);transform:rotateX(90deg)translateZ(.75vmin);--sz:99%;--dl:calc(var(--dv) * -10);-webkit-filter:hue-rotate(-18deg);filter:hue-rotate(-18deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(11){-webkit-transform:rotateX(90deg);-moz-transform:rotateX(90deg);transform:rotateX(90deg);--sz:100%;--dl:calc(var(--dv) * -11);-webkit-filter:hue-rotate(-20deg);filter:hue-rotate(-20deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(12){-webkit-transform:rotateX(90deg)translateZ(-.75vmin);-moz-transform:rotateX(90deg)translateZ(-.75vmin);transform:rotateX(90deg)translateZ(-.75vmin);--sz:99%;--dl:calc(var(--dv) * -12);-webkit-filter:hue-rotate(-22deg);filter:hue-rotate(-22deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(13){-webkit-transform:rotateX(90deg)translateZ(-1.5vmin);-moz-transform:rotateX(90deg)translateZ(-1.5vmin);transform:rotateX(90deg)translateZ(-1.5vmin);--sz:97%;--dl:calc(var(--dv) * -13);-webkit-filter:hue-rotate(-24deg);filter:hue-rotate(-24deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(14){-webkit-transform:rotateX(90deg)translateZ(-2.25vmin);-moz-transform:rotateX(90deg)translateZ(-2.25vmin);transform:rotateX(90deg)translateZ(-2.25vmin);--sz:95%;--dl:calc(var(--dv) * -14);-webkit-filter:hue-rotate(-26deg);filter:hue-rotate(-26deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(15){-webkit-transform:rotateX(90deg)translateZ(-3vmin);-moz-transform:rotateX(90deg)translateZ(-3vmin);transform:rotateX(90deg)translateZ(-3vmin);--sz:91%;--dl:calc(var(--dv) * -15);-webkit-filter:hue-rotate(-28deg);filter:hue-rotate(-28deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(16){-webkit-transform:rotateX(90deg)translateZ(-3.75vmin);-moz-transform:rotateX(90deg)translateZ(-3.75vmin);transform:rotateX(90deg)translateZ(-3.75vmin);--sz:86%;--dl:calc(var(--dv) * -16);-webkit-filter:hue-rotate(-30deg);filter:hue-rotate(-30deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(17){-webkit-transform:rotateX(90deg)translateZ(-4.5vmin);-moz-transform:rotateX(90deg)translateZ(-4.5vmin);transform:rotateX(90deg)translateZ(-4.5vmin);--sz:80%;--dl:calc(var(--dv) * -17);-webkit-filter:hue-rotate(-32deg);filter:hue-rotate(-32deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(18){-webkit-transform:rotateX(90deg)translateZ(-5.25vmin);-moz-transform:rotateX(90deg)translateZ(-5.25vmin);transform:rotateX(90deg)translateZ(-5.25vmin);--sz:71%;--dl:calc(var(--dv) * -18);-webkit-filter:hue-rotate(-34deg);filter:hue-rotate(-34deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(19){-webkit-transform:rotateX(90deg)translateZ(-6vmin);-moz-transform:rotateX(90deg)translateZ(-6vmin);transform:rotateX(90deg)translateZ(-6vmin);--sz:60%;--dl:calc(var(--dv) * -19);-webkit-filter:hue-rotate(-36deg);filter:hue-rotate(-36deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(20){-webkit-transform:rotateX(90deg)translateZ(-6.75vmin);-moz-transform:rotateX(90deg)translateZ(-6.75vmin);transform:rotateX(90deg)translateZ(-6.75vmin);--sz:43%;--dl:calc(var(--dv) * -20);-webkit-filter:hue-rotate(-38deg);filter:hue-rotate(-38deg)}.sphere.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:nth-child(21){-webkit-transform:rotateX(90deg)translateZ(-7.35vmin);-moz-transform:rotateX(90deg)translateZ(-7.35vmin);transform:rotateX(90deg)translateZ(-7.35vmin);--sz:23%;--dl:calc(var(--dv) * -21);-webkit-filter:hue-rotate(-40deg);filter:hue-rotate(-40deg)}`
            })
        ]
    });
};
/* harmony default export */ const components_AnimatedSphere = (AnimatedSphere);


/***/ }),

/***/ 331:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AnnouncementBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function AnnouncementBar() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6
        },
        className: "inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-xs font-medium text-white/90",
                children: "This AI model is still being trained."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                animate: {
                    rotate: 360
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                },
                className: "w-3 h-3 border-2 border-purple-400 border-t-transparent rounded-full"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChatMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
/* harmony import */ var _AIBot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ChatMessage({ message  }) {
    const isUser = message.type === "user";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95
        },
        transition: {
            duration: 0.3
        },
        className: `flex ${isUser ? "justify-end" : "justify-start"} mb-4`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 ${isUser ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white ml-auto" : "bg-gradient-to-r from-gray-800 to-gray-700 text-white mr-auto"}`,
            children: [
                !isUser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                transform: "scale(0.8)"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AIBot__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-sm font-medium text-gray-300",
                            children: "Omni"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-sm md:text-base leading-relaxed whitespace-pre-wrap",
                    children: message.content
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-xs text-gray-300 mt-2 opacity-70",
                    children: new Date(message.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CircularText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function CircularText({ text ="AI • PROMPT • INTERFACE • LANGFLOW • " , spinDuration =20 , onHover ="slowDown" , className =""  }) {
    const { 0: isHovered , 1: setIsHovered  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const getAnimationDuration = ()=>{
        if (!isHovered) return spinDuration;
        switch(onHover){
            case "slowDown":
                return spinDuration * 2;
            case "speedUp":
                return spinDuration * 0.5;
            case "pause":
                return 0;
            case "goBonkers":
                return spinDuration * 0.1;
            default:
                return spinDuration;
        }
    };
    const chars = text.split("");
    const radius = 50;
    const angleStep = 360 / chars.length;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `relative inline-block ${className}`,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            className: "relative w-32 h-32",
            animate: {
                rotate: 360
            },
            transition: {
                duration: getAnimationDuration(),
                repeat: Infinity,
                ease: "linear"
            },
            children: chars.map((char, index)=>{
                const angle = index * angleStep;
                const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "absolute text-sm font-medium text-white/80 transform -translate-x-1/2 -translate-y-1/2",
                    style: {
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: `translate(-50%, -50%) rotate(${angle}deg)`
                    },
                    children: char
                }, index);
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function DecryptedText({ text ="" , speed =50 , maxIterations =10 , sequential =false , revealDirection ="start" , useOriginalCharsOnly =false , className ="" , parentClassName ="" , encryptedClassName ="" , animateOn ="view"  }) {
    const { 0: displayText , 1: setDisplayText  } = useState("");
    const { 0: isAnimating , 1: setIsAnimating  } = useState(false);
    const { 0: isVisible , 1: setIsVisible  } = useState(false);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const getRandomChar = (originalChar)=>{
        if (useOriginalCharsOnly) {
            const textChars = [
                ...new Set(text.split(""))
            ];
            return textChars[Math.floor(Math.random() * textChars.length)];
        }
        return chars[Math.floor(Math.random() * chars.length)];
    };
    const decrypt = ()=>{
        if (isAnimating) return;
        setIsAnimating(true);
        let iterations = 0;
        const targetText = text;
        const interval = setInterval(()=>{
            if (sequential) {
                // Sequential reveal
                const revealCount = Math.floor(iterations / maxIterations * targetText.length);
                let newText = "";
                for(let i = 0; i < targetText.length; i++){
                    if (revealDirection === "start" && i < revealCount) {
                        newText += targetText[i];
                    } else if (revealDirection === "end" && i >= targetText.length - revealCount) {
                        newText += targetText[i];
                    } else if (revealDirection === "center") {
                        const center = Math.floor(targetText.length / 2);
                        const distance = Math.abs(i - center);
                        if (distance < revealCount / 2) {
                            newText += targetText[i];
                        } else {
                            newText += targetText[i] === " " ? " " : getRandomChar(targetText[i]);
                        }
                    } else {
                        newText += targetText[i] === " " ? " " : getRandomChar(targetText[i]);
                    }
                }
                setDisplayText(newText);
            } else {
                // Random reveal
                let newText1 = "";
                for(let i1 = 0; i1 < targetText.length; i1++){
                    if (targetText[i1] === " ") {
                        newText1 += " ";
                    } else if (Math.random() < iterations / maxIterations) {
                        newText1 += targetText[i1];
                    } else {
                        newText1 += getRandomChar(targetText[i1]);
                    }
                }
                setDisplayText(newText1);
            }
            iterations++;
            if (iterations >= maxIterations) {
                clearInterval(interval);
                setDisplayText(targetText);
                setIsAnimating(false);
            }
        }, speed);
    };
    useEffect(()=>{
        if (animateOn === "view" && isVisible) {
            decrypt();
        }
    }, [
        isVisible,
        text
    ]);
    useEffect(()=>{
        if (animateOn === "view") {
            setIsVisible(true);
        }
    }, []);
    const handleMouseEnter = ()=>{
        if (animateOn === "hover") {
            decrypt();
        }
    };
    return /*#__PURE__*/ _jsx(motion.div, {
        className: `${parentClassName}`,
        onMouseEnter: handleMouseEnter,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.6
        },
        children: /*#__PURE__*/ _jsx("span", {
            className: `${className} ${isAnimating ? encryptedClassName : ""}`,
            children: displayText || text
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function GradientText({ children , className ="" , colors =[
    "#40ffaa",
    "#4079ff",
    "#40ffaa",
    "#4079ff",
    "#40ffaa"
] , animationSpeed =8 , showBorder =false  }) {
    const gradientColors = colors.join(", ");
    return /*#__PURE__*/ _jsxs(motion.div, {
        className: `relative inline-block ${className}`,
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.8,
            ease: "easeOut"
        },
        children: [
            /*#__PURE__*/ _jsx(motion.span, {
                className: "bg-clip-text text-transparent font-light",
                style: {
                    backgroundImage: `linear-gradient(45deg, ${gradientColors})`,
                    backgroundSize: "400% 400%"
                },
                animate: {
                    backgroundPosition: [
                        "0% 50%",
                        "100% 50%",
                        "0% 50%"
                    ]
                },
                transition: {
                    duration: animationSpeed,
                    repeat: Infinity,
                    ease: "linear"
                },
                children: children
            }),
            showBorder && /*#__PURE__*/ _jsx(motion.div, {
                className: "absolute inset-0 rounded-lg",
                style: {
                    background: `linear-gradient(45deg, ${gradientColors})`,
                    backgroundSize: "400% 400%",
                    padding: "2px",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude"
                },
                animate: {
                    backgroundPosition: [
                        "0% 50%",
                        "100% 50%",
                        "0% 50%"
                    ]
                },
                transition: {
                    duration: animationSpeed,
                    repeat: Infinity,
                    ease: "linear"
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
/* harmony import */ var _AIBot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Preloader({ isVisible =true  }) {
    if (!isVisible) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black",
        initial: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.5
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                transform: "scale(4.2)"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AIBot__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PromptInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function PromptInput({ onSend , placeholder , disabled =false  }) {
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: isFocused , 1: setIsFocused  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (value.trim() && !disabled) {
            onSend(value.trim());
            setValue("");
            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
            }
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };
    const handleChange = (e)=>{
        setValue(e.target.value);
        // Auto-resize textarea
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [
        value
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.form, {
        onSubmit: handleSubmit,
        className: "relative w-full",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: 0.3
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-purple-500 p-[2px]",
                    animate: {
                        backgroundPosition: [
                            "0% 50%",
                            "100% 50%",
                            "0% 50%"
                        ]
                    },
                    transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    style: {
                        backgroundSize: "200% 200%"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full bg-gray-900/90 backdrop-blur-sm rounded-2xl"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex items-end gap-3 p-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            ref: textareaRef,
                            value: value,
                            onChange: handleChange,
                            onKeyDown: handleKeyDown,
                            onFocus: ()=>setIsFocused(true),
                            onBlur: ()=>setIsFocused(false),
                            placeholder: placeholder,
                            disabled: disabled,
                            rows: 1,
                            className: "flex-1 bg-transparent text-white placeholder-gray-400 border-none outline-none resize-none min-h-[96px] max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent font-ibm-plex-mono",
                            style: {
                                lineHeight: "1.5",
                                fontSize: "14px"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                            type: "submit",
                            disabled: !value.trim() || disabled,
                            className: "flex-shrink-0 p-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SilkBackground)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function SilkBackground({ speed =5 , scale =1 , color ="#7B7481" , noiseIntensity =1.5 , rotation =0  }) {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const animationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let time = 0;
        const resizeCanvas = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        const drawSilk = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            // Create gradient
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(canvas.width, canvas.height) / 2);
            gradient.addColorStop(0, `${color}20`);
            gradient.addColorStop(0.5, `${color}10`);
            gradient.addColorStop(1, `${color}05`);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Draw silk pattern
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(rotation);
            ctx.scale(scale, scale);
            for(let i = 0; i < 50; i++){
                const x = Math.sin(time * speed * 0.01 + i * 0.5) * 200;
                const y = Math.cos(time * speed * 0.01 + i * 0.3) * 150;
                const size = Math.sin(time * speed * 0.02 + i) * 20 + 30;
                const alpha = (Math.sin(time * speed * 0.01 + i) + 1) * 0.1;
                ctx.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, "0")}`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
            time += 1;
            animationRef.current = requestAnimationFrame(drawSilk);
        };
        resizeCanvas();
        drawSilk();
        window.addEventListener("resize", resizeCanvas);
        return ()=>{
            window.removeEventListener("resize", resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [
        speed,
        scale,
        color,
        noiseIntensity,
        rotation
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 w-full h-full pointer-events-none",
        style: {
            zIndex: -1
        }
    });
}


/***/ }),

/***/ 24:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThinkingIndicator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var _AIBot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const thinkingMessages = [
    "thinking...",
    "hashing this out...",
    "working on a response..."
];
function ThinkingIndicator() {
    const { 0: currentMessage , 1: setCurrentMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCurrentMessage((prev)=>(prev + 1) % thinkingMessages.length);
        }, 1500);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -10
        },
        className: "flex items-center justify-center gap-3 py-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AIBot__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
                initial: {
                    opacity: 0,
                    x: 10
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                exit: {
                    opacity: 0,
                    x: -10
                },
                transition: {
                    duration: 0.3
                },
                className: "text-gray-400 text-sm md:text-base font-medium",
                children: thinkingMessages[currentMessage]
            }, currentMessage),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex gap-1",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: "w-2 h-2 bg-purple-400 rounded-full",
                        animate: {
                            scale: [
                                1,
                                1.2,
                                1
                            ]
                        },
                        transition: {
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2
                        }
                    }, i))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(197);
/* harmony import */ var _utils_langflowAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(731);
/* harmony import */ var _components_CircularText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(592);
/* harmony import */ var _components_SilkBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(559);
/* harmony import */ var _components_AnnouncementBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(331);
/* harmony import */ var _components_AnimatedSphere__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(183);
/* harmony import */ var _components_GradientText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(285);
/* harmony import */ var _components_DecryptedText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(963);
/* harmony import */ var _components_PromptInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(829);
/* harmony import */ var _components_ChatMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(705);
/* harmony import */ var _components_ThinkingIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24);
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_CircularText__WEBPACK_IMPORTED_MODULE_5__, _components_AnnouncementBar__WEBPACK_IMPORTED_MODULE_7__, _components_GradientText__WEBPACK_IMPORTED_MODULE_9__, _components_DecryptedText__WEBPACK_IMPORTED_MODULE_10__, _components_PromptInput__WEBPACK_IMPORTED_MODULE_11__, _components_ChatMessage__WEBPACK_IMPORTED_MODULE_12__, _components_ThinkingIndicator__WEBPACK_IMPORTED_MODULE_13__, _components_Preloader__WEBPACK_IMPORTED_MODULE_14__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_CircularText__WEBPACK_IMPORTED_MODULE_5__, _components_AnnouncementBar__WEBPACK_IMPORTED_MODULE_7__, _components_GradientText__WEBPACK_IMPORTED_MODULE_9__, _components_DecryptedText__WEBPACK_IMPORTED_MODULE_10__, _components_PromptInput__WEBPACK_IMPORTED_MODULE_11__, _components_ChatMessage__WEBPACK_IMPORTED_MODULE_12__, _components_ThinkingIndicator__WEBPACK_IMPORTED_MODULE_13__, _components_Preloader__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const placeholders = [
    "What do you need the brain squad to solve?",
    "Drop your chaos. We'll reason it out.",
    "Ask away — the gods are listening.",
    "Type your mission. They'll handle the logic.",
    "What's the big idea? Let's crack it."
];
function Home() {
    const { 0: sessionId , 1: setSessionId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{
        // Generate unique session ID on component mount
        return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    });
    const { 0: messages , 1: setMessages  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{
        // Load messages from localStorage for this session
        if (false) {}
        return [];
    });
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: currentPlaceholder , 1: setCurrentPlaceholder  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: showPreloader , 1: setShowPreloader  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCurrentPlaceholder((prev)=>(prev + 1) % placeholders.length);
        }, 3000);
        return ()=>clearInterval(interval);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setShowPreloader(false);
        }, 3000);
        return ()=>clearTimeout(timer);
    }, []);
    // Save messages to localStorage whenever they change
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (false) {}
    }, [
        messages,
        sessionId
    ]);
    // Clear current session
    const clearSession = ()=>{
        if (false) {}
        setMessages([]);
    };
    // Start new session
    const startNewSession = ()=>{
        const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        setSessionId(newSessionId);
        setMessages([]);
        if (false) {}
    };
    const handleSendMessage = async (message)=>{
        if (!message.trim()) return;
        const userMessage = {
            type: "user",
            content: message,
            timestamp: Date.now()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setIsLoading(true);
        try {
            const aiContent = await _utils_langflowAPI__WEBPACK_IMPORTED_MODULE_4__/* .langflowAPI.sendMessage */ .Dh.sendMessage(message, sessionId);
            const aiMessage = {
                type: "ai",
                content: aiContent,
                timestamp: Date.now(),
                icon: "\uD83E\uDD16"
            };
            setMessages((prev)=>[
                    ...prev,
                    aiMessage
                ]);
        } catch (error) {
            console.error("Error calling Langflow:", error);
            const errorMessage = {
                type: "ai",
                content: error.message || "Sorry, I encountered an error. Please try again.",
                timestamp: Date.now(),
                icon: "⚠️"
            };
            setMessages((prev)=>[
                    ...prev,
                    errorMessage
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                children: showPreloader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Preloader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-h-screen bg-black text-white relative overflow-hidden px-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SilkBackground__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "relative z-10 flex justify-between items-center px-6 pt-6 md:px-8 md:pt-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/alogo.png",
                                    alt: "Omni Logo",
                                    className: "h-16 w-auto md:h-20",
                                    style: {
                                        maxWidth: "120px",
                                        height: "auto"
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden md:block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CircularText__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    text: "ARTIFICIAL INTELLIGENCE . EXPERIMENT",
                                    className: "w-24 h-24 md:w-32 md:h-32"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative z-10 flex justify-center -mt-2 md:-mt-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AnnouncementBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative z-10 flex justify-center py-2 md:py-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AnimatedSphere__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: "relative z-10 flex flex-col items-center px-4 pt-2 md:px-8",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full max-w-4xl mx-auto space-y-2 md:space-y-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-5acd1853e797f13b" + " " + "text-center space-y-6 md:space-y-8 mb-4",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            id: "5acd1853e797f13b",
                                            children: '@property --color-1{syntax:"<color>";inherits:false;initial-value:hsl(98 100%62%)}@property --color-2{syntax:"<color>";inherits:false;initial-value:hsl(204 100%59%)}@-webkit-keyframes gradient-change{to{--color-1:hsl(210 100% 59%);--color-2:hsl(310 100% 59%)}}@-moz-keyframes gradient-change{to{--color-1:hsl(210 100% 59%);--color-2:hsl(310 100% 59%)}}@-o-keyframes gradient-change{to{--color-1:hsl(210 100% 59%);--color-2:hsl(310 100% 59%)}}@keyframes gradient-change{to{--color-1:hsl(210 100% 59%);--color-2:hsl(310 100% 59%)}}.animated-gradient-article.jsx-5acd1853e797f13b{display:grid;gap:.3lh;text-align:center}.animated-gradient-h1.jsx-5acd1853e797f13b{-webkit-animation:gradient-change 2s linear infinite alternate;-moz-animation:gradient-change 2s linear infinite alternate;-o-animation:gradient-change 2s linear infinite alternate;animation:gradient-change 2s linear infinite alternate;background:-webkit-linear-gradient(to right in oklch,var(--color-1),var(--color-2));background:-moz-linear-gradient(to right in oklch,var(--color-1),var(--color-2));background:-o-linear-gradient(to right in oklch,var(--color-1),var(--color-2));background:linear-gradient(to right in oklch,var(--color-1),var(--color-2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent}.animated-gradient-h1.jsx-5acd1853e797f13b{font-family:var(--font-inter),sans-serif;font-weight:700;font-size:10vmin;line-height:1.25cap;margin:0;text-wrap:balance}.animated-gradient-p.jsx-5acd1853e797f13b{font-family:var(--font-inter),sans-serif;font-weight:300;margin:0;text-wrap:balance;color:#9ca3af}.sphere.jsx-5acd1853e797f13b{--s:2s;--d:40;--c:#ff6600;width:15vmin;height:15vmin;background:transparent;position:relative;-webkit-animation:spin 5s linear 0s infinite;-moz-animation:spin 5s linear 0s infinite;-o-animation:spin 5s linear 0s infinite;animation:spin 5s linear 0s infinite;-webkit-animation-play-state:running;-moz-animation-play-state:running;-o-animation-play-state:running;animation-play-state:running;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d}.sphere.jsx-5acd1853e797f13b:hover{-webkit-animation-play-state:paused;-moz-animation-play-state:paused;-o-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spin{0%{-webkit-transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg)}100%{-webkit-transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg)}}@-moz-keyframes spin{0%{-moz-transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg)}100%{-moz-transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg)}}@-o-keyframes spin{0%{transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg)}100%{transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg)}}@keyframes spin{0%{-webkit-transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg);-moz-transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(0deg)rotateZ(185deg)}100%{-webkit-transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg);-moz-transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg);transform:rotateX(-210deg)rotateY(360deg)rotateZ(185deg)}}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b{--sz:23%;--dv:calc(var(--s) / var(--d));--dl:calc(var(--dv) * -1);width:var(--sz);height:var(--sz);position:absolute;border:.15vmin solid var(--c);-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;-webkit-transform:rotateX(90deg)translateZ(7.35vmin);-moz-transform:rotateX(90deg)translateZ(7.35vmin);transform:rotateX(90deg)translateZ(7.35vmin);-webkit-box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;-moz-box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;-webkit-animation:shine var(--s)linear var(--dl)infinite;-moz-animation:shine var(--s)linear var(--dl)infinite;-o-animation:shine var(--s)linear var(--dl)infinite;animation:shine var(--s)linear var(--dl)infinite;background:transparent;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes shine{50%,100%{border-color:#10101000;-webkit-box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;-webkit-filter:hue-rotate(540deg);filter:hue-rotate(540deg)}}@-moz-keyframes shine{50%,100%{border-color:#10101000;-moz-box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;filter:hue-rotate(540deg)}}@-o-keyframes shine{50%,100%{border-color:#10101000;box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;filter:hue-rotate(540deg)}}@keyframes shine{50%,100%{border-color:#10101000;-webkit-box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;-moz-box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;box-shadow:0 0 1px 1px#10101000,0 0 1px 1px#10101000 inset;-webkit-filter:hue-rotate(540deg);filter:hue-rotate(540deg)}}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:before{content:"";width:100%;height:100%;position:absolute;border:.15vmin solid var(--c);-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;-webkit-box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;-moz-box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;box-shadow:0 0 .3vmin .3vmin var(--c),0 0 .3vmin .3vmin var(--c)inset;-webkit-animation:shine var(--s)linear -webkit-calc(var(--dl)*-1)infinite;-moz-animation:shine var(--s)linear -moz-calc(var(--dl)*-1)infinite;-o-animation:shine var(--s)linear calc(var(--dl)*-1)infinite;animation:shine var(--s)linear -webkit-calc(var(--dl)*-1)infinite;animation:shine var(--s)linear -moz-calc(var(--dl)*-1)infinite;animation:shine var(--s)linear calc(var(--dl)*-1)infinite}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(2){-webkit-transform:rotateX(90deg)translateZ(6.75vmin);-moz-transform:rotateX(90deg)translateZ(6.75vmin);transform:rotateX(90deg)translateZ(6.75vmin);--sz:43%;--dl:calc(var(--dv) * -2);-webkit-filter:hue-rotate(-2deg);filter:hue-rotate(-2deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(3){-webkit-transform:rotateX(90deg)translateZ(6vmin);-moz-transform:rotateX(90deg)translateZ(6vmin);transform:rotateX(90deg)translateZ(6vmin);--sz:60%;--dl:calc(var(--dv) * -3);-webkit-filter:hue-rotate(-4deg);filter:hue-rotate(-4deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(4){-webkit-transform:rotateX(90deg)translateZ(5.25vmin);-moz-transform:rotateX(90deg)translateZ(5.25vmin);transform:rotateX(90deg)translateZ(5.25vmin);--sz:71%;--dl:calc(var(--dv) * -4);-webkit-filter:hue-rotate(-6deg);filter:hue-rotate(-6deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(5){-webkit-transform:rotateX(90deg)translateZ(4.5vmin);-moz-transform:rotateX(90deg)translateZ(4.5vmin);transform:rotateX(90deg)translateZ(4.5vmin);--sz:80%;--dl:calc(var(--dv) * -5);-webkit-filter:hue-rotate(-8deg);filter:hue-rotate(-8deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(6){-webkit-transform:rotateX(90deg)translateZ(3.75vmin);-moz-transform:rotateX(90deg)translateZ(3.75vmin);transform:rotateX(90deg)translateZ(3.75vmin);--sz:86%;--dl:calc(var(--dv) * -6);-webkit-filter:hue-rotate(-10deg);filter:hue-rotate(-10deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(7){-webkit-transform:rotateX(90deg)translateZ(3vmin);-moz-transform:rotateX(90deg)translateZ(3vmin);transform:rotateX(90deg)translateZ(3vmin);--sz:91%;--dl:calc(var(--dv) * -7);-webkit-filter:hue-rotate(-12deg);filter:hue-rotate(-12deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(8){-webkit-transform:rotateX(90deg)translateZ(2.25vmin);-moz-transform:rotateX(90deg)translateZ(2.25vmin);transform:rotateX(90deg)translateZ(2.25vmin);--sz:95%;--dl:calc(var(--dv) * -8);-webkit-filter:hue-rotate(-14deg);filter:hue-rotate(-14deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(9){-webkit-transform:rotateX(90deg)translateZ(1.5vmin);-moz-transform:rotateX(90deg)translateZ(1.5vmin);transform:rotateX(90deg)translateZ(1.5vmin);--sz:97%;--dl:calc(var(--dv) * -9);-webkit-filter:hue-rotate(-16deg);filter:hue-rotate(-16deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(10){-webkit-transform:rotateX(90deg)translateZ(.75vmin);-moz-transform:rotateX(90deg)translateZ(.75vmin);transform:rotateX(90deg)translateZ(.75vmin);--sz:99%;--dl:calc(var(--dv) * -10);-webkit-filter:hue-rotate(-18deg);filter:hue-rotate(-18deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(11){-webkit-transform:rotateX(90deg);-moz-transform:rotateX(90deg);transform:rotateX(90deg);--sz:100%;--dl:calc(var(--dv) * -11);-webkit-filter:hue-rotate(-20deg);filter:hue-rotate(-20deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(12){-webkit-transform:rotateX(90deg)translateZ(-.75vmin);-moz-transform:rotateX(90deg)translateZ(-.75vmin);transform:rotateX(90deg)translateZ(-.75vmin);--sz:99%;--dl:calc(var(--dv) * -12);-webkit-filter:hue-rotate(-22deg);filter:hue-rotate(-22deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(13){-webkit-transform:rotateX(90deg)translateZ(-1.5vmin);-moz-transform:rotateX(90deg)translateZ(-1.5vmin);transform:rotateX(90deg)translateZ(-1.5vmin);--sz:97%;--dl:calc(var(--dv) * -13);-webkit-filter:hue-rotate(-24deg);filter:hue-rotate(-24deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(14){-webkit-transform:rotateX(90deg)translateZ(-2.25vmin);-moz-transform:rotateX(90deg)translateZ(-2.25vmin);transform:rotateX(90deg)translateZ(-2.25vmin);--sz:95%;--dl:calc(var(--dv) * -14);-webkit-filter:hue-rotate(-26deg);filter:hue-rotate(-26deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(15){-webkit-transform:rotateX(90deg)translateZ(-3vmin);-moz-transform:rotateX(90deg)translateZ(-3vmin);transform:rotateX(90deg)translateZ(-3vmin);--sz:91%;--dl:calc(var(--dv) * -15);-webkit-filter:hue-rotate(-28deg);filter:hue-rotate(-28deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(16){-webkit-transform:rotateX(90deg)translateZ(-3.75vmin);-moz-transform:rotateX(90deg)translateZ(-3.75vmin);transform:rotateX(90deg)translateZ(-3.75vmin);--sz:86%;--dl:calc(var(--dv) * -16);-webkit-filter:hue-rotate(-30deg);filter:hue-rotate(-30deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(17){-webkit-transform:rotateX(90deg)translateZ(-4.5vmin);-moz-transform:rotateX(90deg)translateZ(-4.5vmin);transform:rotateX(90deg)translateZ(-4.5vmin);--sz:80%;--dl:calc(var(--dv) * -17);-webkit-filter:hue-rotate(-32deg);filter:hue-rotate(-32deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(18){-webkit-transform:rotateX(90deg)translateZ(-5.25vmin);-moz-transform:rotateX(90deg)translateZ(-5.25vmin);transform:rotateX(90deg)translateZ(-5.25vmin);--sz:71%;--dl:calc(var(--dv) * -18);-webkit-filter:hue-rotate(-34deg);filter:hue-rotate(-34deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(19){-webkit-transform:rotateX(90deg)translateZ(-6vmin);-moz-transform:rotateX(90deg)translateZ(-6vmin);transform:rotateX(90deg)translateZ(-6vmin);--sz:60%;--dl:calc(var(--dv) * -19);-webkit-filter:hue-rotate(-36deg);filter:hue-rotate(-36deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(20){-webkit-transform:rotateX(90deg)translateZ(-6.75vmin);-moz-transform:rotateX(90deg)translateZ(-6.75vmin);transform:rotateX(90deg)translateZ(-6.75vmin);--sz:43%;--dl:calc(var(--dv) * -20);-webkit-filter:hue-rotate(-38deg);filter:hue-rotate(-38deg)}.sphere.jsx-5acd1853e797f13b div.jsx-5acd1853e797f13b:nth-child(21){-webkit-transform:rotateX(90deg)translateZ(-7.35vmin);-moz-transform:rotateX(90deg)translateZ(-7.35vmin);transform:rotateX(90deg)translateZ(-7.35vmin);--sz:23%;--dl:calc(var(--dv) * -21);-webkit-filter:hue-rotate(-40deg);filter:hue-rotate(-40deg)}'
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                            className: "jsx-5acd1853e797f13b" + " " + "animated-gradient-article",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "jsx-5acd1853e797f13b" + " " + "animated-gradient-h1 font-bold",
                                                    children: "Omni AI"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-5acd1853e797f13b" + " " + "animated-gradient-p",
                                                    children: "Multi-agent AI experiment"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full max-w-md mx-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PromptInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        onSend: handleSendMessage,
                                        placeholder: placeholders[currentPlaceholder],
                                        disabled: isLoading
                                    })
                                }),
                                isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThinkingIndicator__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                                messages.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "space-y-4 max-h-96 overflow-y-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                                        children: messages.map((message)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ChatMessage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                message: message
                                            }, message.timestamp))
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        className: "relative z-10 text-center py-6 md:py-8"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dh": () => (/* binding */ langflowAPI)
/* harmony export */ });
/* unused harmony export LangflowAPI */
// Using native fetch API instead of axios
/**
 * Client-side Langflow API utility
 * Handles direct API calls to Langflow from the browser
 */ class LangflowAPI {
    constructor(){
        this.baseURL = "https://api.langflow.astra.datastax.com/lf/23e4c4d8-958e-403f-b4bf-a92326c3f972/api/v1/run/b604b328-3de1-4a6e-b298-bde8a54d8593" || 0;
        this.apiKey = "AstraCS:bBGCPHUqguNkcZoKslcCTDmP:527dc04700e01b1f8a07586025ae509c6a3cdbefd0c683553767920bfa72b945";
        if (!this.apiKey) {
            console.warn("NEXT_PUBLIC_LANGFLOW_API_KEY not found in environment variables");
        }
    }
    /**
   * Send a message to Langflow API
   * @param {string} message - The user message
   * @param {string} sessionId - Session identifier
   * @returns {Promise<string>} - The AI response
   */ async sendMessage(message, sessionId) {
        if (!this.apiKey) {
            throw new Error("API key not configured. Please set NEXT_PUBLIC_LANGFLOW_API_KEY in your environment.");
        }
        let retries = 3;
        let delay = 1000;
        for(let i = 0; i < retries; i++){
            try {
                // Use CORS proxy to bypass browser restrictions
                const corsProxy = "https://cors-anywhere.herokuapp.com/";
                const targetUrl = `${this.baseURL}?stream=false`;
                const response = await fetch(corsProxy + targetUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${this.apiKey}`,
                        "Accept": "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    body: JSON.stringify({
                        input_value: message,
                        output_type: "chat",
                        input_type: "chat",
                        session_id: sessionId || "default-session"
                    })
                });
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                // Extract the AI response from the Langflow API response structure
                let aiContent = "No response received";
                if (data?.outputs?.[0]?.outputs?.[0]?.results?.message?.data?.text) {
                    aiContent = data.outputs[0].outputs[0].results.message.data.text;
                } else if (data?.outputs?.[0]?.outputs?.[0]?.results?.message?.text) {
                    aiContent = data.outputs[0].outputs[0].results.message.text;
                } else if (data?.message) {
                    aiContent = data.message;
                }
                return aiContent;
            } catch (error) {
                console.error(`Langflow API Error (Attempt ${i + 1}/${retries}):`, error);
                // Check if it's a CORS error
                if (error.message.includes("CORS") || error.message.includes("fetch")) {
                    throw new Error("Unable to connect to AI service. This may be due to browser security restrictions. Please try refreshing the page or contact support.");
                }
                const isRetriable = error.message.includes("500") || error.message.includes("502") || error.message.includes("503");
                if (isRetriable && i < retries - 1) {
                    await new Promise((res)=>setTimeout(res, delay));
                    delay *= 2; // Exponential backoff
                    continue;
                }
                // Provide more specific error messages
                if (error.message.includes("401")) {
                    throw new Error("Authentication failed. There might be an issue with the application's API credentials. The administrator has been notified.");
                } else if (error.message.includes("404")) {
                    throw new Error("API endpoint not found. Please check the Langflow URL.");
                } else if (error.message.includes("500") || error.message.includes("502") || error.message.includes("503")) {
                    throw new Error("Server error. The Langflow service may be temporarily unavailable. Please try again in a few moments.");
                }
                throw new Error("Network error. Please check your internet connection and try again.");
            }
        }
    }
}
// Create a singleton instance
const langflowAPI = new LangflowAPI();
// Default export for convenience
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (langflowAPI)));


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(678));
module.exports = __webpack_exports__;

})();