var clock = document.getElementById("clock")
var hexColor = document.getElementById("hex-color")

function hexClock() {
  var time = new Date()
  var hours = (time.getHours() % 12).toString()
  var minutes = time.getMinutes().toString()
  var seconds = time.getSeconds().toString()

  if (hours.length < 2) {
    hours = "0" + hours
  }

  if (minutes.length < 2) {
    minutes = "0" + minutes
  }

  if (seconds.length < 2) {
    seconds = "0" + seconds
  }

  var clockStr = hours + " : " + minutes + " : " + seconds
  var hexColorStr = "#" + hours + minutes + seconds

  clock.textContent = clockStr
  hexColor.textContent = hexColorStr
  document.body.style.backgroundColor = hexColorStr
}

hexClock()
setInterval(hexClock, 1000)

// code that didnt work

// var hexcolor = document.getElementById("hex-color")
// function hexcolock() {
//   var time = new Date()
//   var hours = time.getHours().toString
//   var minutes = time.getMinutes().toString
//   var seconds = time.getSeconds().toString

//   if (hours.length < 2) {
//     hours = "0" + hours
//   }
//   if (minutes.length < 2) {
//     minutes = "0" + minutes
//   }
//   if (seconds.length < 2) {
//     seconds = "0" + seconds
//   }
//   var hexcolorstr = "#" + hours + minutes + seconds

//   hexcolor.textContent = hexcolorstr
// }
// hexcolock();
///////////////////
// function startTime() {
//   var today = new Date()
//   var h = today.getHours()
//   var m = today.getMinutes()
//   var s = today.getSeconds()

//   m = checkTime(m)
//   s = checkTime(s)
//   document.getElementById("txt").innerHTML = h + ":" + m + ":" + s
//   $("body.").css( "background-color" )
//   var t = setTimeout(startTime, 500)
// }
// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i
//   }
//   return i

/////////////////////////
// function refreshData() {
//   x = 1 // x = seconds
//   var d = new Date()
//   var h = d.getHours()
//   var m = d.getMinutes()
//   var s = d.getSeconds()

//   if (h <= 9) {
//     h = "0" + h
//   }
//   if (m <= 9) {
//     m = "0" + m
//   }
//   if (s <= 9) {
//     s = "0" + s
//   }

//   var color = "#" + h + m + s
//   $("div.background").css("background-color", color)
//   $("p#hex").text(color)

//   setTimeout(refreshData, x * 1000)
// }

// refreshData()
