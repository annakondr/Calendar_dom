function createCalendar(id, year, month) {
  const table = document.createElement('table');
  const header = document.createElement('tr');
  const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const daysInMonth = new Date(year, month, 0).getDate();

  for (const day of daysOfWeek) {
    header.insertAdjacentHTML('beforeend', `<th>${day}</th>`)
  }
  table.append(header);
  header.className = 'header';

  let firstDay = new Date (year, month-1).getDay();
  if (firstDay === 0 ) {
    firstDay = 6;
  } else {
    firstDay = firstDay - 1;
  }

  let nextDayToAdd = 1 - firstDay;
  while (nextDayToAdd <= daysInMonth) {
    const week = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      const day = document.createElement('td');
      if (nextDayToAdd > 0 && nextDayToAdd <= daysInMonth) {
        day.innerHTML = nextDayToAdd;
      }
      nextDayToAdd++;
      week.append(day);
    }
    table.append(week);
  }
  return document.querySelector(`#${id}`).append(table);
}

createCalendar("calendar", 2019, 6);

