var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var splitBtn = document.getElementById('split');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

toggleBtn.addEventListener('click',function(){
    if (watch.isOn) {
      watch.stop();
      toggleBtn.textContent = 'Start';
    } else {
      watch.start();
      toggleBtn.textContent = 'Pause';
    }
});

splitBtn.addEventListener('click',function(){
    if (watch.isOn) {
      watch.split();
    }
});

resetBtn.addEventListener('click',function(){
  watch.reset();
});
