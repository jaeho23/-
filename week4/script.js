const button = document.querySelector(".button")
button.addEventListener("click", toggleDiv);

/*function clickAction(){
    const div = document.getElementsByClassName("container");
    div.remove();
};*/
function toggleDiv() {
    const div = document.getElementsByClassName('container');

    if(div.style.display === 'none')  {
      div.style.display = 'block';
    }
  }