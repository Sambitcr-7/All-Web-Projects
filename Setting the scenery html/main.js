// Variabelen
var wolkenachter = $("#wolkenachter");
var wolkenvoor = $("#wolkenvoor");
var gebouwen = $(".gebouwen");
var huizen = $(".huizen");
var bomen = $(".bomen");
var dakobjecten = $(".dakobjecten");
var autorechtszacht = $("#autorechtszacht");
var autorechtshard = $("#autorechtshard");
var autolinkszacht = $("#autolinkszacht");
var autolinkshard = $("#autolinkshard");
var lichten = $(".lichten");
var raket = $("#raket");

// Timelines
var tl_wolken = new TimelineMax({
  repeat: 0
});
var tl_stad = new TimelineMax({
  repeat: 0
});
var tl_autos = new TimelineMax({
  repeat: 0
});

// Wolken
tl_wolken
  .to(wolkenachter, 130, {
    x: 1200
  }, "begin")
  .to(wolkenvoor, 100, {
    x: 1200
  }, "begin")

// Opbouw stad en raket
tl_stad
  .set([gebouwen, huizen, bomen, dakobjecten], {
    y: -1000
  })

tl_stad
  .staggerTo(".gebouwen", 1, {
    y: 0,
    ease: Bounce.easeInOut
  }, 0.2, "opbouw")

.staggerTo(".huizen", 2, {
  y: 0,
  ease: Bounce.easeInOut
}, 0.2, "opbouw")

.staggerTo(".bomen", 2, {
  y: 0,
  ease: Bounce.easeInOut
}, 0.2, "opbouw")

.staggerTo(".dakobjecten", 3, {
  y: 0,
  delay: 3,
  ease: Bounce.easeInOut
}, 0.1, "opbouw")

.staggerTo(".lichten", 0.5, {
  opacity: 1
}, 2)

.to(raket, 15, {
  y: -1050,
  delay: 10
}, "opbouw")

// Auto's gaan rijden
tl_autos
  .to(autorechtszacht, 130, {
    x: 1300
  }, "begin")
  .to(autorechtshard, 100, {
    x: 1300
  }, "begin")
  .to(autolinkszacht, 130, {
    x: -1300
  }, "begin")
  .to(autolinkshard, 100, {
    x: -1300
  }, "begin")