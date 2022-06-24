const shouldShowCountdown = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  const upperLimitMonth = 2;

  if (currentMonth >= upperLimitMonth || currentDate >= getStartingDate()) {
    return true;
  }
  return false;
};

const getStartingDate = () => {
  const year = new Date().getFullYear();
  const month = 8; // september

  const daysInMonth = new Date(year, month, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    let newDate = new Date(year, month, i);

    if (newDate.getDay() === 0) {
      //Sunday
      return new Date(year, month, i - 2, (hours = 19));
      break;
    }
    if (newDate.getDay() === 6) {
      // Saturday
      return new Date(year, month, i - 1, (hours = 19));
    }
  }
};

const createCountdownDate = (startingDate) => {
  const dateObj = {
    day: startingDate.getDate(),
    month: startingDate.getMonth() + 1,
    year: startingDate.getFullYear(),
    hour: startingDate.getHours(),
    minute: 0,
    second: 0,
  };
  console.log(dateObj);
  return dateObj;
};

document.addEventListener('DOMContentLoaded', function () {
  const tobbedansenDate = getStartingDate();
  console.log(tobbedansenDate);

  let cd = new Countdown({
    cont: document.querySelector('.container'),
    countdown: true,
    date: createCountdownDate(tobbedansenDate),
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

  if (shouldShowCountdown()) {
    cd.start();
  }
});
