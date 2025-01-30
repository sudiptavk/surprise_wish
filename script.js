function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.animationDuration = `${Math.random() * 3 + 5}s`;
  balloon.style.transform = `rotate(${Math.random() * 360}deg)`;
  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 8000);
}
