onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function () {
        var music = document.getElementById('music');
        var pauseButton = document.getElementById('pauseButton');
        var stopButton = document.getElementById('stopButton');
      
        pauseButton.addEventListener('click', function () {
          music.pause();
        });
      
        stopButton.addEventListener('click', function () {
          music.pause();
          music.currentTime = 0;
        });
      });
      