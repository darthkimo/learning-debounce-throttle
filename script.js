const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
}, 250)

input.addEventListener('input', e => {
  defaultText.innerHTML = e.target.value;
  updateDebounceText(e.target.value);
});

function debounce(cb, delay = 1000){
  let timeout;
  
  return (...args)=>{
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      cb(...args);
    }, delay);
  }
}