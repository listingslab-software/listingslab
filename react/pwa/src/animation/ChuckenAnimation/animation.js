import { TimelineLite, TimelineMax, Power2 } from "gsap";

const baseDuration = 1;
const letters = ["BlueC", "BlueO", "BlueD"];

let currentLetter = 0;

const nextLetter = () => {
  console.log("nextLetter", letters[currentLetter]);
  // currentLetter++;
};

const blinkCurlyBrace = (div, callback) => {
  const timeline = new TimelineMax({ repeat: -1 });
  timeline.to(div, baseDuration * 0.75, {
    opacity: "0.5",
    ease: Power2.easeOut
  });
};

const start = (div, callback) => {
  const timeline = new TimelineLite();
  timeline.set(div, {
    left: -25,
    top: "40%"
  });
  timeline.to(div, baseDuration * 1, {
    left: "48vw",
    // scale: 2,
    // rotationY: "+=90",
    // rotationY: "+=90",
    ease: Power2.easeOut,
    onComplete: () => {
      nextLetter();
    }
  });
};

export function animate(divId, animation, callback) {
  switch (animation) {
    case `start`:
      const div = document.getElementById(divId);
      blinkCurlyBrace(div, callback);
      start(div, callback);
      break;
    default:
  }
}
