function colorBackground(hour) {
  let topColor = null;
  let bottomColor = null;

  switch (hour) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      topColor = "#2200aa";
      bottomColor = topColor;
      break;
    case 5:
      topColor = "#2200aa";
      bottomColor = "#aa3366";
      break;
    case 6:
      topColor = "#aa3366";
      bottomColor = "#f2c779";
      break;
    case 7:
      topColor = "#f2c779";
      bottomColor = "#0a5fcc";
      break;
    case 17:
      topColor = "#0a5fcc";
      bottomColor = "#f2c779";
      break;
    case 18:
      topColor = "#f2c779";
      bottomColor = "#aa3366";
      break;
    case 19:
      topColor = "#aa3366";
      bottomColor = "#2200aa";
      break;
    case 20:
    case 21:
    case 22:
    case 23:
      topColor = "#2200aa";
      bottomColor = topColor;
      break;
    default:
      topColor = "#0a5fcc";
      bottomColor = topColor;
      break;
  }

  return `linear-gradient(${topColor}, ${bottomColor})`;
}

function findDegrees(units) {
  const offset = 90; /* to account for transform */

  return (units / 60) * 360 + offset;
}

function moveHands() {
  const now = new Date();

  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const seconds = now.getSeconds();
  const secondsDegrees = findDegrees(seconds);

  const minutes = now.getMinutes();
  const minutesDegrees = findDegrees(minutes);

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90 + (minutes / 60) * 30;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (minutes < 1 && seconds < 1) {
    document.body.style.background = colorBackground(hours);
  }
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    const initialDate = new Date();
    const initialHour = initialDate.getHours();
    document.body.style.background = colorBackground(initialHour);
    setInterval(moveHands, 1000);
  },
  false
);
