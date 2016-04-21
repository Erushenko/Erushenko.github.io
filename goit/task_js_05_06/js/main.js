var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('timer');

var watch = new Stopwatch();

toggleBtn.addEventListener('click',function(){
    if (watch.isOn) {
      watch.stop();
    } else {
      watch.start();
    }
});

resetBtn.addEventListener('click',function(){
  watch.reset();
});
