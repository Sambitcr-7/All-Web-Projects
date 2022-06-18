//Batman V Superman SVG
var bvs = document.getElementById("batman");
var tl = new TimelineMax({
  repeat: -1,
  repeatDelay: 2,
  dealy: 3
});

tl.to("#batman", 2, {
  morphSVG: "#superman"
})
  .to(
    "#batman",
    0.5,
    {
      fill: "#B20000"
    },
    "-=0.5"
  )
  .to("#batman", 2, { morphSVG: bvs, fill: "#000" }, "+=1");
