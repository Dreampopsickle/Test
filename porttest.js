// // Example: Change background color on click
// document.addEventListener('DOMContentLoaded', function() {
//     var body = document.querySelector('body');
//     body.addEventListener('click', function() {
//       body.style.backgroundColor = '#9FE2BF';
//     });
//   });
document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  body.addEventListener('click', function() {
    let randomColor = generateRandomColor();
    body.style.backgroundColor = randomColor;
  });

  function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});

  