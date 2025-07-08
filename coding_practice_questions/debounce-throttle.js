function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const handleResize = debounce(() => {
  console.log("Resized!");
}, 300);

window.addEventListener("resize", handleResize);    
