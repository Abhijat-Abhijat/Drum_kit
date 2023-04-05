var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playSound(this.innerHTML);
    btnAnimation(this.innerHTML);
  });
}
window.addEventListener("keypress", function (event) {
  playSound(event.key);
  btnAnimation(event.key);
});
function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sound/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sound/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sound/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sound/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sound/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sound/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sound/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
}
function btnAnimation(key) {
  var activeBtn = document.querySelector("." + key);
  activeBtn.classList.add("pressed");
  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 100);
}
