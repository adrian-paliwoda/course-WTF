import JSConfetti from "js-confetti";

setInterval(() => {
  const currentDate = new Date();
  if (currentDate.getHours() === currentDate.getMinutes()) {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti();
  }
}, 1000);
