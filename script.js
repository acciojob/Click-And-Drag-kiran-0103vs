// Your code here.
// script.js

// script.js

let isDragging = false;
let startX;
let scrollLeft;

const container = document.querySelector('.items');

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  container.classList.add('active');
});

container.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    container.classList.remove('active');
  }
});

container.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    container.classList.remove('active');
  }
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed
  container.scrollLeft = scrollLeft - walk;
});
