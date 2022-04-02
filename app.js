// gsap.fromTo(".text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });

const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });
tl.fromTo(
  ".cookie-continer",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1,0.4)", duration: 1.5 }
);
tl.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 10, rotation: "0deg" },
  "<50%"
);
tl.fromTo(".text", { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "<");

// jump cookie
tl.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -20, yoyo: true, repeat: -1, rotation: "-20deg" }
);

tl.fromTo("#crumbs", { y: 0 }, { y: -50, yoyo: true, repeat: -1 }, "<");

// fade out cookie
const button = document.querySelector("button");
button.addEventListener("click", () => {
  tl.fromTo(".cookie-continer", {
    opacity: 0,
    y: 100,
    duration: 0.75,
    ease: "power1.out",
  });
});

// --------------------

const tl7 = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });
tl7.fromTo(
  ".capcake-continer",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1,0.4)", duration: 1.5 }
);
tl7.fromTo(".capcake-emoji", { x: 0 }, { x: 150 }, "<");
tl7.fromTo(".capcake", { opacity: 0, x: -50 }, { opacity: 1, x: 10 }, "<50%");
tl7.fromTo(".capcake-text", { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "<");

// jump cookie
tl7.fromTo(".capcake", { y: 0 }, { y: -20, yoyo: true, repeat: -1 });

tl7.fromTo("#cherry", { y: 0 }, { y: -50, yoyo: true, repeat: -1 }, "<");
tl7.fromTo(".btn", { scale: 0 }, { scale: 1, yoyo: true, repeat: 2 }, "<");

// fade out capcake
const btn = document.querySelector(".btn");
button.addEventListener("click", () => {
  tl7.fromTo(".capcake-continer", {
    opacity: 0,
    y: 100,
    duration: 0.75,
    ease: "power1.out",
  });
});
