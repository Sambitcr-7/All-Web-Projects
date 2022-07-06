function clock() {
    var h = document.getElementById("hour");
    var m = document.getElementById("minutes");
    var s = document.getElementById("seconds");
    var ampm = document.getElementById("midnight");
  
    var hh = new Date().getHours();
    var mm = new Date().getMinutes();
    var ss = new Date().getSeconds();
    var am = "AM";
  
    if (hh > 12) {
      hh = hh - 12;
      am = "PM";
    }
  
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
  
    h.innerHTML = hh;
    m.innerHTML = mm;
    s.innerHTML = ss;
    ampm.innerHTML = am;
  }
  var interval = setInterval(clock, 1000);
  