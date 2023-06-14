let typed = new Typed(".auto-input", {
  strings: ["Tega Fregene", "Web Developer", "Economist"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  //reset: true//
});
sr.reveal(`.home_data`);
//sr.reveal(`.home_image`, { origin: "bottom" });//
sr.reveal(`.home_proj_image`, { origin: "left" });
sr.reveal(`.project_description`, { origin: "right" });
sr.reveal(`.about_image`, { origin: "right" });

const pr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  //reset: true//
});

pr.reveal(`.about_image`, { origin: "right" });
