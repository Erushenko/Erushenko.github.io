function Stopwatch(elem){
  var time = 0;
  var inteval;
  var offset;
  var HoursTimezoneOffset = new Date(0).getHours();
  var cSplit = 0;

  
  function update(){
    if (this.isOn) {
      time += delta();
    }
    var formatteTime = timeFormatter(time);
    elem.textContent = formatteTime;
    //console.log(formatteTime);
  }

  function delta(){
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(timeInMilliseconds){
    var time = new Date(timeInMilliseconds);
    var hours = (time.getHours() - HoursTimezoneOffset).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if (hours.length < 2) {
      hours = '0' + hours;
    }    
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    
    if (milliseconds.length < 2) {
      milliseconds = '00' + milliseconds;
    }else if (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }

    return hours + ' : ' + minutes + ' : ' + seconds + ' . ' + milliseconds;
  }

  this.isOn = false;
  
  this.start = function(){
    if (!this.isOn) {
      interval = setInterval(update.bind(this),10);
      offset = Date.now();
      this.isOn = true;
    }
  }
  
  this.stop = function(){
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  }
  
 this.split = function(){
    if (this.isOn) {
      cSplit  += 1;
      var newElem = document.createElement('p');
      newElem.className += " split";
      newElem.textContent = cSplit + '. ' + timeFormatter(time);
      document.body.appendChild(newElem);
    }
  }
  
  this.reset = function(){
    if (!this.isOn) {
      time = 0;
      update();
      delSplitElemenst();
    }
  }
  
  delSplitElemenst = function(){
      var elem;
      cSplit = 0;
      arrayElemSplit = document.getElementsByClassName('split');
      for(;0<arrayElemSplit.length;){
          elem = arrayElemSplit[0];
          document.body.removeChild(elem);
      }
  }
}

var watch = new Stopwatch();
