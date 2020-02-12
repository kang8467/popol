// CLOCK 
Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };
  
  function updateClock() {
    var now = new Date();
    var ap="am";
    var milli = now.getMilliseconds(),
      sec = now.getSeconds(),
      min = now.getMinutes(),
      hou = now.getHours(),
      mo = now.getMonth(),
      dy = now.getDate(),
      yr = now.getFullYear(),
       hou12=now.getHours();
    
    if(hou<=12){
      hou = now.getHours();
    }
    else{
      hou=hou = now.getHours()-12;
    }

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var tags = ["mon", "d", "y", "h", "m", "s"],
      corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
    for (var i = 0; i < tags.length; i++){
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
    }
    if(hou12 >= 12){
      ap="pm";
    }
    else{
      ap="am";
    }
    
    document.getElementById("ap").innerText= ap;
  }
  
  function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
  }
  
  // END CLOCK
