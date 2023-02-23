const spadeTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const spadeTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const spade1 = document.querySelector("#spade1");
const spade2 = document.querySelector("#spade2");
const spade3 = document.querySelector("#spade3");

/*
animSpade1 = () => {
  spade1.animate(spadeTumbling, spadeTiming)
},
animSpade2 = () => {
  spade2.animate(spadeTumbling, spadeTiming)
},
animSpade3 = () => {
  spade3.animate(spadeTumbling, spadeTiming)
}
*/





async function spade123() {
  await spade1.animate(spadeTumbling, spadeTiming).finished
  await spade2.animate(spadeTumbling, spadeTiming).finished
  await spade3.animate(spadeTumbling, spadeTiming).finished
}

spade123();