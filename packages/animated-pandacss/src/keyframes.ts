import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  bounce: {
    '0%,  20%,  53%,  to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translateZ(0)',
    },
    '40%,  43%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
    },
    '70%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
    },
    '80%': {
      transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translateZ(0) scaleY(0.95)',
    },
    '90%': {
      transform: 'translate3d(0, -4px, 0) scaleY(1.02)',
    },
  },
  flash: {
    '0%,  50%,  to': { opacity: 1 },
    '25%,  75%': { opacity: 0 },
  },
  pulse: {
    '0%': { transform: 'scaleX(1)' },
    '50%': { transform: 'scale3d(1.05, 1.05, 1.05)' },
    to: { transform: 'scaleX(1)' },
  },
  rubberBand: {
    '0%': { transform: 'scaleX(1)' },
    '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
    '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
    '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
    '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
    '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
    to: { transform: 'scaleX(1)' },
  },
  shakeX: {
    '0%,  to': { transform: 'translateZ(0)' },
    '10%,  30%,  50%,  70%,  90%': { transform: 'translate3d(-10px, 0, 0)' },
    '20%,  40%,  60%,  80%': { transform: 'translate3d(10px, 0, 0)' },
  },
  shakeY: {
    '0%,  to': { transform: 'translateZ(0)' },
    '10%,  30%,  50%,  70%,  90%': { transform: 'translate3d(0, -10px, 0)' },
    '20%,  40%,  60%,  80%': { transform: 'translate3d(0, 10px, 0)' },
  },
  headShake: {
    '0%': { transform: 'translateX(0)' },
    '6.5%': {
      transform: 'translateX(-6px) rotateY(-9deg)',
    },
    '18.5%': { transform: 'translateX(5px) rotateY(7deg)' },
    '31.5%': {
      transform: 'translateX(-3px) rotateY(-5deg)',
    },
    '43.5%': { transform: 'translateX(2px) rotateY(3deg)' },
    '50%': { transform: 'translateX(0)' },
  },
  swing: {
    '20%': { transform: 'rotate(15deg)' },
    '40%': { transform: 'rotate(-10deg)' },
    '60%': { transform: 'rotate(5deg)' },
    '80%': { transform: 'rotate(-5deg)' },
    to: { transform: 'rotate(0deg)' },
  },
  tada: {
    '0%': { transform: 'scaleX(1)' },
    '10%,  20%': {
      transform: 'scale3d(0.9, 0.9, 0.9) rotate(-3deg)',
    },
    '30%,  50%,  70%,  90%': {
      transform: 'scale3d(1.1, 1.1, 1.1) rotate(3deg)',
    },
    '40%,  60%,  80%': {
      transform: 'scale3d(1.1, 1.1, 1.1) rotate(-3deg)',
    },
    to: { transform: 'scaleX(1)' },
  },
  wobble: {
    '0%': { transform: 'translateZ(0)' },
    '15%': {
      transform: 'translate3d(-25%, 0, 0) rotate(-5deg)',
    },
    '30%': {
      transform: 'translate3d(20%, 0, 0) rotate(3deg)',
    },
    '45%': {
      transform: 'translate3d(-15%, 0, 0) rotate(-3deg)',
    },
    '60%': {
      transform: 'translate3d(10%, 0, 0) rotate(2deg)',
    },
    '75%': {
      transform: 'translate3d(-5%, 0, 0) rotate(-1deg)',
    },
    to: { transform: 'translateZ(0)' },
  },
  jello: {
    '0%,  11.1%,  to': { transform: 'translateZ(0)' },
    '22.2%': {
      transform: 'skewX(-12.5deg) skewY(-12.5deg)',
    },
    '33.3%': { transform: 'skewX(6.25deg) skewY(6.25deg)' },
    '44.4%': {
      transform: 'skewX(-3.125deg) skewY(-3.125deg)',
    },
    '55.5%': {
      transform: 'skewX(1.5625deg) skewY(1.5625deg)',
    },
    '66.6%': {
      transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
    },
    '77.7%': {
      transform: 'skewX(0.390625deg) skewY(0.390625deg)',
    },
    '88.8%': {
      transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
    },
  },
  heartBeat: {
    '0%': { transform: 'scale(1)' },
    '14%': { transform: 'scale(1.3)' },
    '28%': { transform: 'scale(1)' },
    '42%': { transform: 'scale(1.3)' },
    '70%': { transform: 'scale(1)' },
  },
  backInDown: {
    '0%': {
      transform: 'translateY(-1200px) scale(0.7)',
      opacity: 0.7,
    },
    '80%': {
      transform: 'translateY(0) scale(0.7)',
      opacity: 0.7,
    },
    to: { transform: 'scale(1)', opacity: 1 },
  },
  backInLeft: {
    '0%': {
      transform: 'translateX(-2000px) scale(0.7)',
      opacity: 0.7,
    },
    '80%': {
      transform: 'translateX(0) scale(0.7)',
      opacity: 0.7,
    },
    to: { transform: 'scale(1)', opacity: 1 },
  },
  backInRight: {
    '0%': {
      transform: 'translateX(2000px) scale(0.7)',
      opacity: 0.7,
    },
    '80%': {
      transform: 'translateX(0) scale(0.7)',
      opacity: 0.7,
    },
    to: { transform: 'scale(1)', opacity: 1 },
  },
  backInUp: {
    '0%': {
      transform: 'translateY(1200px) scale(0.7)',
      opacity: 0.7,
    },
    '80%': {
      transform: 'translateY(0) scale(0.7)',
      opacity: 0.7,
    },
    to: { transform: 'scale(1)', opacity: 1 },
  },
  backOutDown: {
    '0%': { transform: 'scale(1)', opacity: 1 },
    '20%': {
      transform: 'translateY(0) scale(0.7)',
      opacity: 0.7,
    },
    to: {
      transform: 'translateY(700px) scale(0.7)',
      opacity: 0.7,
    },
  },
  backOutLeft: {
    '0%': { transform: 'scale(1)', opacity: 1 },
    '20%': {
      transform: 'translateX(0) scale(0.7)',
      opacity: 0.7,
    },
    to: {
      transform: 'translateX(-2000px) scale(0.7)',
      opacity: 0.7,
    },
  },
  backOutRight: {
    '0%': { transform: 'scale(1)', opacity: 1 },
    '20%': {
      transform: 'translateX(0) scale(0.7)',
      opacity: 0.7,
    },
    to: {
      transform: 'translateX(2000px) scale(0.7)',
      opacity: 0.7,
    },
  },
  backOutUp: {
    '0%': { transform: 'scale(1)', opacity: 1 },
    '20%': {
      transform: 'translateY(0) scale(0.7)',
      opacity: 0.7,
    },
    to: {
      transform: 'translateY(-700px) scale(0.7)',
      opacity: 0.7,
    },
  },
  bounceIn: {
    '0%,  20%,  40%,  60%,  80%,  to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    '0%': {
      opacity: 0,
      transform: 'scale3d(0.3, 0.3, 0.3)',
    },
    '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
    '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
    '60%': {
      opacity: 1,
      transform: 'scale3d(1.03, 1.03, 1.03)',
    },
    '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
    to: { opacity: 1, transform: 'scaleX(1)' },
  },
  bounceInDown: {
    '0%,  60%,  75%,  90%,  to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    '0%': {
      opacity: 0,
      transform: 'translate3d(0, -3000px, 0) scaleY(3)',
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(0, 25px, 0) scaleY(0.9)',
    },
    '75%': {
      transform: 'translate3d(0, -10px, 0) scaleY(0.95)',
    },
    '90%': {
      transform: 'translate3d(0, 5px, 0) scaleY(0.985)',
    },
    to: { transform: 'translateZ(0)' },
  },
  bounceInLeft: {
    '0%,  60%,  75%,  90%,  to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    '0%': {
      opacity: 0,
      transform: 'translate3d(-3000px, 0, 0) scaleX(3)',
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(25px, 0, 0) scaleX(1)',
    },
    '75%': {
      transform: 'translate3d(-10px, 0, 0) scaleX(0.98)',
    },
    '90%': {
      transform: 'translate3d(5px, 0, 0) scaleX(0.995)',
    },
    to: { transform: 'translateZ(0)' },
  },
  bounceInRight: {
    '0%,  60%,  75%,  90%,  to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    '0%': {
      opacity: 0,
      transform: 'translate3d(3000px, 0, 0) scaleX(3)',
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(-25px, 0, 0) scaleX(1)',
    },
    '75%': {
      transform: 'translate3d(10px, 0, 0) scaleX(0.98)',
    },
    '90%': {
      transform: 'translate3d(-5px, 0, 0) scaleX(0.995)',
    },
    to: { transform: 'translateZ(0)' },
  },
  bounceInUp: {
    '0%,  60%,  75%,  90%,  to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    '0%': {
      opacity: 0,
      transform: 'translate3d(0, 3000px, 0) scaleY(5)',
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(0, -20px, 0) scaleY(0.9)',
    },
    '75%': {
      transform: 'translate3d(0, 10px, 0) scaleY(0.95)',
    },
    '90%': {
      transform: 'translate3d(0, -5px, 0) scaleY(0.985)',
    },
    to: { transform: 'translateZ(0)' },
  },
  bounceOut: {
    '20%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
    '50%,  55%': {
      opacity: 1,
      transform: 'scale3d(1.1, 1.1, 1.1)',
    },
    to: {
      opacity: 0,
      transform: 'scale3d(0.3, 0.3, 0.3)',
    },
  },
  bounceOutDown: {
    '20%': {
      transform: 'translate3d(0, 10px, 0) scaleY(0.985)',
    },
    '40%,  45%': {
      opacity: 1,
      transform: 'translate3d(0, -20px, 0) scaleY(0.9)',
    },
    to: {
      opacity: 0,
      transform: 'translate3d(0, 2000px, 0) scaleY(3)',
    },
  },
  bounceOutLeft: {
    '20%': {
      opacity: 1,
      transform: 'translate3d(20px, 0, 0) scaleX(0.9)',
    },
    to: {
      opacity: 0,
      transform: 'translate3d(-2000px, 0, 0) scaleX(2)',
    },
  },
  bounceOutRight: {
    '20%': {
      opacity: 1,
      transform: 'translate3d(-20px, 0, 0) scaleX(0.9)',
    },
    to: {
      opacity: 0,
      transform: 'translate3d(2000px, 0, 0) scaleX(2)',
    },
  },
  bounceOutUp: {
    '20%': {
      transform: 'translate3d(0, -10px, 0) scaleY(0.985)',
    },
    '40%,  45%': {
      opacity: 1,
      transform: 'translate3d(0, 20px, 0) scaleY(0.9)',
    },
    to: {
      opacity: 0,
      transform: 'translate3d(0, -2000px, 0) scaleY(3)',
    },
  },
  fadeIn: { '0%': { opacity: 0 }, to: { opacity: 1 } },
  fadeInDown: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(0, -100%, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeInDownBig: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(0, -2000px, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeInLeft: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeInLeftBig: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(-2000px, 0, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeInRight: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeInRightBig: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(2000px, 0, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeInUp: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeInUpBig: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(0, 2000px, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeInTopLeft: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(-100%, -100%, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeInTopRight: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(100%, -100%, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeInBottomLeft: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(-100%, 100%, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeInBottomRight: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(100%, 100%, 0)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  fadeOut: { '0%': { opacity: 1 }, to: { opacity: 0 } },
  fadeOutDown: {
    '0%': { opacity: 1 },
    to: {
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)',
    },
  },
  fadeOutDownBig: {
    '0%': { opacity: 1 },
    to: {
      opacity: 0,
      transform: 'translate3d(0, 2000px, 0)',
    },
  },
  fadeOutLeft: {
    '0%': { opacity: 1 },
    to: {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)',
    },
  },
  fadeOutLeftBig: {
    '0%': { opacity: 1 },
    to: {
      opacity: 0,
      transform: 'translate3d(-2000px, 0, 0)',
    },
  },
  fadeOutRight: {
    '0%': { opacity: 1 },
    to: {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)',
    },
  },
  fadeOutRightBig: {
    '0%': { opacity: 1 },
    to: {
      opacity: 0,
      transform: 'translate3d(2000px, 0, 0)',
    },
  },
  fadeOutUp: {
    '0%': { opacity: 1 },
    to: {
      opacity: 0,
      transform: 'translate3d(0, -100%, 0)',
    },
  },
  fadeOutUpBig: {
    '0%': { opacity: 1 },
    to: {
      opacity: 0,
      transform: 'translate3d(0, -2000px, 0)',
    },
  },
  fadeOutTopLeft: {
    '0%': { opacity: 1, transform: 'translateZ(0)' },
    to: {
      opacity: 0,
      transform: 'translate3d(-100%, -100%, 0)',
    },
  },
  fadeOutTopRight: {
    '0%': { opacity: 1, transform: 'translateZ(0)' },
    to: {
      opacity: 0,
      transform: 'translate3d(100%, -100%, 0)',
    },
  },
  fadeOutBottomRight: {
    '0%': { opacity: 1, transform: 'translateZ(0)' },
    to: {
      opacity: 0,
      transform: 'translate3d(100%, 100%, 0)',
    },
  },
  fadeOutBottomLeft: {
    '0%': { opacity: 1, transform: 'translateZ(0)' },
    to: {
      opacity: 0,
      transform: 'translate3d(-100%, 100%, 0)',
    },
  },
  flip: {
    '0%': {
      transform: 'perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)',
      animationTimingFunction: 'ease-out',
    },
    '40%': {
      transform: 'perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)',
      animationTimingFunction: 'ease-out',
    },
    '50%': {
      transform: 'perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)',
      animationTimingFunction: 'ease-in',
    },
    '80%': {
      transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translateZ(0)      rotateY(0deg)',
      animationTimingFunction: 'ease-in',
    },
    to: {
      transform: 'perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)',
      animationTimingFunction: 'ease-in',
    },
  },
  flipInX: {
    '0%': {
      transform: 'perspective(400px) rotateX(90deg)',
      animationTimingFunction: 'ease-in',
      opacity: 0,
    },
    '40%': {
      transform: 'perspective(400px) rotateX(-20deg)',
      animationTimingFunction: 'ease-in',
    },
    '60%': {
      transform: 'perspective(400px) rotateX(10deg)',
      opacity: 1,
    },
    '80%': {
      transform: 'perspective(400px) rotateX(-5deg)',
    },
    to: { transform: 'perspective(400px)' },
  },
  flipInY: {
    '0%': {
      transform: 'perspective(400px) rotateY(90deg)',
      animationTimingFunction: 'ease-in',
      opacity: 0,
    },
    '40%': {
      transform: 'perspective(400px) rotateY(-20deg)',
      animationTimingFunction: 'ease-in',
    },
    '60%': {
      transform: 'perspective(400px) rotateY(10deg)',
      opacity: 1,
    },
    '80%': {
      transform: 'perspective(400px) rotateY(-5deg)',
    },
    to: { transform: 'perspective(400px)' },
  },
  flipOutX: {
    '0%': { transform: 'perspective(400px)' },
    '30%': {
      transform: 'perspective(400px) rotateX(-20deg)',
      opacity: 1,
    },
    to: {
      transform: 'perspective(400px) rotateX(90deg)',
      opacity: 0,
    },
  },
  flipOutY: {
    '0%': { transform: 'perspective(400px)' },
    '30%': {
      transform: 'perspective(400px) rotateY(-15deg)',
      opacity: 1,
    },
    to: {
      transform: 'perspective(400px) rotateY(90deg)',
      opacity: 0,
    },
  },
  lightSpeedInRight: {
    '0%': {
      transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
      opacity: 0,
    },
    '60%': { transform: 'skewX(20deg)', opacity: 1 },
    '80%': { transform: 'skewX(-5deg)' },
    to: { transform: 'translateZ(0)' },
  },
  lightSpeedInLeft: {
    '0%': {
      transform: 'translate3d(-100%, 0, 0) skewX(30deg)',
      opacity: 0,
    },
    '60%': { transform: 'skewX(-20deg)', opacity: 1 },
    '80%': { transform: 'skewX(5deg)' },
    to: { transform: 'translateZ(0)' },
  },
  lightSpeedOutRight: {
    '0%': { opacity: 1 },
    to: {
      transform: 'translate3d(100%, 0, 0) skewX(30deg)',
      opacity: 0,
    },
  },
  lightSpeedOutLeft: {
    '0%': { opacity: 1 },
    to: {
      transform: 'translate3d(-100%, 0, 0) skewX(-30deg)',
      opacity: 0,
    },
  },
  rotateIn: {
    '0%': { transform: 'rotate(-200deg)', opacity: 0 },
    to: { transform: 'translateZ(0)', opacity: 1 },
  },
  rotateInDownLeft: {
    '0%': { transform: 'rotate(-45deg)', opacity: 0 },
    to: { transform: 'translateZ(0)', opacity: 1 },
  },
  rotateInDownRight: {
    '0%': { transform: 'rotate(45deg)', opacity: 0 },
    to: { transform: 'translateZ(0)', opacity: 1 },
  },
  rotateInUpLeft: {
    '0%': { transform: 'rotate(45deg)', opacity: 0 },
    to: { transform: 'translateZ(0)', opacity: 1 },
  },
  rotateInUpRight: {
    '0%': { transform: 'rotate(-90deg)', opacity: 0 },
    to: { transform: 'translateZ(0)', opacity: 1 },
  },
  rotateOut: {
    '0%': { opacity: 1 },
    to: { transform: 'rotate(200deg)', opacity: 0 },
  },
  rotateOutDownLeft: {
    '0%': { opacity: 1 },
    to: { transform: 'rotate(45deg)', opacity: 0 },
  },
  rotateOutDownRight: {
    '0%': { opacity: 1 },
    to: { transform: 'rotate(-45deg)', opacity: 0 },
  },
  rotateOutUpLeft: {
    '0%': { opacity: 1 },
    to: { transform: 'rotate(-45deg)', opacity: 0 },
  },
  rotateOutUpRight: {
    '0%': { opacity: 1 },
    to: { transform: 'rotate(90deg)', opacity: 0 },
  },
  hinge: {
    '0%': { animationTimingFunction: 'ease-in-out' },
    '20%,  60%': {
      transform: 'rotate(80deg)',
      animationTimingFunction: 'ease-in-out',
    },
    '40%,  80%': {
      transform: 'rotate(60deg)',
      animationTimingFunction: 'ease-in-out',
      opacity: 1,
    },
    to: {
      transform: 'translate3d(0, 700px, 0)',
      opacity: 0,
    },
  },
  jackInTheBox: {
    '0%': {
      opacity: 0,
      transform: 'scale(0.1) rotate(30deg)',
      transformOrigin: 'center bottom',
    },
    '50%': { transform: 'rotate(-10deg)' },
    '70%': { transform: 'rotate(3deg)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
  rollIn: {
    '0%': {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0) rotate(-120deg)',
    },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  rollOut: {
    '0%': { opacity: 1 },
    to: {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0) rotate(120deg)',
    },
  },
  zoomIn: {
    '0%': {
      opacity: 0,
      transform: 'scale3d(0.3, 0.3, 0.3)',
    },
    '50%': { opacity: 1 },
  },
  zoomInDown: {
    '0%': {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomInLeft: {
    '0%': {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomInRight: {
    '0%': {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomInUp: {
    '0%': {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomOut: {
    '0%': { opacity: 1 },
    '50%': {
      opacity: 0,
      transform: 'scale3d(0.3, 0.3, 0.3)',
    },
    to: { opacity: 0 },
  },
  zoomOutDown: {
    '40%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    to: {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomOutLeft: {
    '40%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
    },
    to: {
      opacity: 0,
      transform: 'scale(0.1) translate3d(-2000px, 0, 0)',
    },
  },
  zoomOutRight: {
    '40%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
    },
    to: {
      opacity: 0,
      transform: 'scale(0.1) translate3d(2000px, 0, 0)',
    },
  },
  zoomOutUp: {
    '40%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    to: {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  slideInDown: {
    '0%': {
      transform: 'translate3d(0, -100%, 0)',
      visibility: 'visible',
    },
    to: { transform: 'translateZ(0)' },
  },
  slideInLeft: {
    '0%': {
      transform: 'translate3d(-100%, 0, 0)',
      visibility: 'visible',
    },
    to: { transform: 'translateZ(0)' },
  },
  slideInRight: {
    '0%': {
      transform: 'translate3d(100%, 0, 0)',
      visibility: 'visible',
    },
    to: { transform: 'translateZ(0)' },
  },
  slideInUp: {
    '0%': {
      transform: 'translate3d(0, 100%, 0)',
      visibility: 'visible',
    },
    to: { transform: 'translateZ(0)' },
  },
  slideOutDown: {
    '0%': { transform: 'translateZ(0)' },
    to: {
      visibility: 'hidden',
      transform: 'translate3d(0, 100%, 0)',
    },
  },
  slideOutLeft: {
    '0%': { transform: 'translateZ(0)' },
    to: {
      visibility: 'hidden',
      transform: 'translate3d(-100%, 0, 0)',
    },
  },
  slideOutRight: {
    '0%': { transform: 'translateZ(0)' },
    to: {
      visibility: 'hidden',
      transform: 'translate3d(100%, 0, 0)',
    },
  },
  slideOutUp: {
    '0%': { transform: 'translateZ(0)' },
    to: {
      visibility: 'hidden',
      transform: 'translate3d(0, -100%, 0)',
    },
  },
})
