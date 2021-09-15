var slider = document.querySelector(".slider");
var count=1;

setInterval(() => {
    if(count<=6){
        slider.style.transform=`translate(-${count}00%)`;
        count++;
    }
    else{
        slider.style.transform="translate(0%)";
        count=1
    }

},4000);