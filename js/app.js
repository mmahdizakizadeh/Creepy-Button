const button = document.querySelector(".creepy-button");
const eyes = document.querySelector(".eyes");
const pupils = document.querySelectorAll(".pupil");

function updateEyes(clientX, clientY) {
  if (!eyes) return;
  const eyesRect = eyes.getBoundingClientRect();
  const eyesCenter = {
    x: eyesRect.left + eyesRect.width / 2,
    y: eyesRect.top + eyesRect.height / 2,
  };

  const dx = clientX - eyesCenter.x;
  const dy = clientY - eyesCenter.y;
  const angle = Math.atan2(-dy, dx) + Math.PI / 2;
  const visionRangeX = 180;
  const visionRangeY = 75;
  const distance = Math.hypot(dx, dy);
  const limitedDistance = Math.min(distance, visionRangeX);
  const x = (Math.sin(angle) * limitedDistance) / visionRangeX;
  const limitedDistanceY = Math.min(distance, visionRangeY);
  const y = (Math.cos(angle) * limitedDistanceY) / visionRangeY;

  pupils.forEach((pupil) => {
    pupil.style.transform = `translate(calc(-50% + ${x * 50}%),calc(-50% + ${
      y * 50
    }%)) `;
  });
}

button.addEventListener("mousemove", (event) => {
  updateEyes(event.clientX, event.clientY);
});

button.addEventListener("mouseleave", () => {
  pupils.forEach((pupil) => {
    pupil.style.transform = `translate(-50%,-50%)`;
  });
});

button.addEventListener(
  "touchmove",
  (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    updateEyes(touch.clientX, touch.clientY);
  },
  { passive: true }
);

eyes.querySelectorAll(".eye").forEach((eye) => {
  eye.animate(
    [
      { height: "0.75em" },
      { height: "0.75em" },
      { height: "0em" },
      { height: "0.75em" },
    ],

    {
      duration: 3000,
      easing: "linear",
      iterations: Infinity,
      delay: 0,
    }
  );
});


var age = +prompt("سن خود را وارد کیند");

var nowAge = age,
  monthAge = nowAge * 12;

if (nowAge >= 18) {
  alert("شما با موفقیت وارد شدید");
  alert("سن شما " + nowAge + " سال و تبدیل به ماه: " + monthAge + " است.");
} else {
  alert("سن شما زیر 18 سال است");
  alert("سن شما " + nowAge + " سال و تبدیل به ماه: " + monthAge + " است.");
}
