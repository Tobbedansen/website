// TODO: look into: https://www.cssscript.com/flipping-countdown-clock-javascript-css-countdown-js/

document.addEventListener('DOMContentLoaded', function () {
  let cd = new Countdown({
    cont: document.querySelector('.container'),
    countdown: true,
    date: {
      day: 2,
      month: 9,
      year: 2022,
      hour: 18,
      minute: 0,
      second: 0,
    },
    outputTranslation: {
      year: 'Years',
      week: 'Weken',
      day: 'Dagen',
      hour: 'Uren',
      minute: 'Minuten',
      second: 'Seconden',
    },
    endCallback: null,
    outputFormat: 'day|hour|minute|second',
  });

  cd.start();
});

// var cd = new Countdown({
//     cont: null,
//     countdown: true,
//     endDate: {
//       year: 0,
//       month: 0,
//       day: 0,
//       hour: 0,
//       minute: 0,
//       second: 0
//     },
//     endCallback: null,
//     outputFormat: 'year|week|day|hour|minute|second',
//     outputTranslation: {
//       year: 'Years',
//       week: 'Weeks',
//       day: 'Days',
//       hour: 'Hours',
//       minute: 'Minutes',
//       second: 'Seconds',
//     }
// });

// var countDownDate = new Date('Sep 3, 2021 18:00:00').getTime();
// var x = setInterval(function () {
//   var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   document.getElementById('countdown').innerHTML = `<div id="days" class="countdown-item">${days}d</div>
//   <div id="hours" class="countdown-item">${hours}h</div>
//   <div id="minutes" class="countdown-item">${minutes}m</div>
//   <div id="seconds" class="countdown-item">${seconds}s</div>`;
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById('countdown').innerHTML = '';
//   }
// });
