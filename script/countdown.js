var countDownDate = new Date('Sep 3, 2021 18:00:00').getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('countdown').innerHTML = `<div id="days" class="countdown-item">${days}d</div>
  <div id="hours" class="countdown-item">${hours}h</div>
  <div id="minutes" class="countdown-item">${minutes}m</div>
  <div id="seconds" class="countdown-item">${seconds}s</div>`;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = '';
  }
});
