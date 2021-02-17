function setDate() {
  const formatDate = () => {
    switch (new Date().getDay()) {
      case 0:
        day = 'SUNDAY, ';
        break;
      case 1:
        day = 'MONDAY, ';
        break;
      case 2:
        day = 'TUESDAY, ';
        break;
      case 3:
        day = 'WEDNESDAY, ';
        break;
      case 4:
        day = 'THURSDAY, ';
        break;
      case 5:
        day = 'FRIDAY, ';
        break;
      case 6:
        day = 'SATURDAY, ';
    }

    switch (new Date().getMonth()) {
      case 0:
        month = 'JANUARY ';
        break;
      case 1:
        month = 'FEBRUARY ';
        break;
      case 2:
        month = 'MARCH ';
        break;
      case 3:
        month = 'APRIL ';
        break;
      case 4:
        month = 'MAY ';
        break;
      case 5:
        month = 'JUNE ';
        break;
      case 6:
        month = 'JULY ';
        break;
      case 7:
        month = 'AUGUST ';
        break;
      case 8:
        month = 'SEPTEMBER ';
        break;
      case 9:
        month = 'OCTOBER ';
        break;
      case 10:
        month = 'NOVEMBER ';
        break;
      case 11:
        month = 'DECEMBER ';
        break;
    }

    const dayOfMonth = new Date().getDate() + ', ';

    const year = new Date().getFullYear();

    return day + month + dayOfMonth + year;
  };

  document.getElementById('headerDate').innerHTML = formatDate();
}

function setActiveBtn(element) {
  if (element.id === 'locationBtn') {
    document.getElementById('locationBtnActive').id = 'locationBtn';
    element.id = 'locationBtnActive';
  }
  if (element.innerHTML.trim() === 'Belconnen') {
    document.getElementById(
      'holidayHoursBodyActive'
    ).innerHTML = `<div class="row">
                <span class="date" title="Monday 27th of December 2021">
                  Mon 21 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> 8:00am-6:00pm </span>
              </div>
              <div class="row">
                <span class="date" title="Tuesday 28th of December 2021">
                  Tue 22 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> 8:00am-6:00pm </span>
              </div>
              <div class="row">
                <span class="date" title="Wednesday 29th of December 2021">
                  Wed 23 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> 8:00am-6:00pm </span>
              </div>
              <div class="row">
                <span class="date" title="Thursday 30th of December 2021">
                  Thu 24 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> 5:00am-6:00pm </span>
              </div>
              <div class="row">
                <span class="date" title="Friday 31st of December 2021">
                  Christmas Day
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Saturday 1st of January 2022">
                  Boxing Day
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Sunday 2nd of January 2022">
                  Sun 27 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Monday 3rd of January 2022">
                  Mon 28 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Tuesday 4th of January 2022">
                  Tue 29 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Wednesday 5th of January 2022">
                  Wed 30 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Thursday 6th of January 2022">
                  Thu 31 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> 8:00am-5:00pm </span>
              </div>
              <div class="row">
                <span class="date" title="Friday 1st of January 2021">
                  Fri 01 Jan
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>`;
  } else {
    document.getElementById(
      'holidayHoursBodyActive'
    ).innerHTML = `<div class="row">
                <span class="date" title="Monday 27th of December 2021">
                  Mon 21 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> 8:00am-5:30pm </span>
              </div>
              <div class="row">
                <span class="date" title="Tuesday 28th of December 2021">
                  Tue 22 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> 8:00am-5:30pm </span>
              </div>
              <div class="row">
                <span class="date" title="Wednesday 29th of December 2021">
                  Wed 23 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> 6:00am-5:30pm </span>
              </div>
              <div class="row">
                <span class="date" title="Thursday 30th of December 2021">
                  Thu 24 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> 5:00am-5:30pm </span>
              </div>
              <div class="row">
                <span class="date" title="Friday 31st of December 2021">
                  Christmas Day
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Saturday 1st of January 2022">
                  Boxing Day
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Sunday 2nd of January 2022">
                  Sun 27 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Monday 3rd of January 2022">
                  Mon 28 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Tuesday 4th of January 2022">
                  Tue 29 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Wednesday 5th of January 2022">
                  Wed 30 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>
              <div class="row">
                <span class="date" title="Thursday 6th of January 2022">
                  Thu 31 Dec
                </span>
                <span class="dots"></span>
                <span class="hours"> 8:00am-5:00pm </span>
              </div>
              <div class="row">
                <span class="date" title="Friday 1st of January 2021">
                  Fri 01 Jan
                </span>
                <span class="dots"></span>
                <span class="hours"> Closed </span>
              </div>`;
  }
}
