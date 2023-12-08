const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.backg');

let load = 0;

let indicator = setInterval(blurring, 20); // Higher blurring levels are too much


function blurring() {
  load++;

  if (load > 99) { // Avoids infinite counting
    clearInterval(indicator);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0); // Keeps track of load
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// from stackover but missed the link 
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  };
