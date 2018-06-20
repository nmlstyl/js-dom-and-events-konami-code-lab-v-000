const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
const input = document.querySelector('html')

function onKeyDownHandler(e) {
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("999999 lives!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }

function init() {
  // Write your JavaScript code inside the init() function

  input.addEventListener('keydown', function(e) {
      debugger;
      const key = e.location;
      onKeyDownHandler(e)
    })
}
