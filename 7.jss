document.addEventListener('DOMContentLoaded', function() {
    // Select the body and audio elements
    const body = document.querySelector('body');
    const audio = document.getElementById('audio');
    var buttons = document.querySelectorAll('.read-more');

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add a click event listener to the body
    body.addEventListener('click', () => {
        // Change the body background color
        body.style.backgroundColor = getRandomColor();

        // Play the audio
        audio.currentTime = 0; // Reset the audio to the start
        audio.play();
    });

    
    // Функция для генерации случайного цвета
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
    // Функция для изменения цвета кнопки при наведении
    function changeColor(event) {
      var button = event.target;
      var randomColor = getRandomColor();
      button.style.backgroundColor = randomColor;
    }
    
    // Функция для восстановления исходного цвета кнопки при уходе указателя мыши
    function resetColor(event) {
      var button = event.target;
      button.style.backgroundColor = 'blue';
    }
    
    // Добавляем обработчики событий к каждой кнопке
    buttons.forEach(function(button) {
      button.addEventListener('mouseenter', changeColor);
      button.addEventListener('mouseleave', resetColor);
    });
});
