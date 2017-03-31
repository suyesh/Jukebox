
function JukeBox(){
}

JukeBox.play = function(){
  var playButtons = document.getElementsByClassName('play');
   for (var i = 0; i < playButtons.length;i++){
     playButtons[i].onclick = function playMusic(){
       $(this).siblings('audio')[0].play();
     }
   }

   var pauseButtons = document.getElementsByClassName('pause');
    for (var i = 0; i < pauseButtons.length;i++){
      pauseButtons[i].onclick = function pauseMusic(){
        $(this).siblings('audio')[0].pause();
      }
    }
};

JukeBox.play();
