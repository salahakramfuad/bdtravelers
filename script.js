;(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = '02/01/',
    birthday = dayMonth + yyyy

  today = mm + '/' + dd + '/' + yyyy
  if (today > birthday) {
    birthday = dayMonth + nextYear
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now,
        seconds = Math.floor((distance % minute) / second)

      if (seconds % 2 !== 0) {
        document.getElementById('countdown').style.backgroundColor =
          'rgb(128,86,34)'
      } else {
        document.getElementById('countdown').style.backgroundColor =
          'rgb(187,129,55)'
      }

      document.getElementById('days').innerText = Math.floor(distance / day)
      document.getElementById('hours').innerText = Math.floor(
        (distance % day) / hour
      )
      document.getElementById('minutes').innerText = Math.floor(
        (distance % hour) / minute
      )
      document.getElementById('seconds').innerText = seconds

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById('headline').innerText = "It's my birthday!"
        document.getElementById('countdown').style.display = 'none'
        document.getElementById('content').style.display = 'block'
        clearInterval(x)
      }
    }, 1000) // Update every second
})()
