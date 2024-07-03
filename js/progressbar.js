const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const progressBar = document.querySelector('.info-progress');
let indexSlider = 0;

prevBtn.onclick = function (){
    indexSlider = indexSlider - 1;
    if (indexSlider < 0 ){
        indexSlider = 1;
    }
    if(indexSlider == 1){
        progressBar.style.backgroundColor = "#425A20";
    }
    else{
        progressBar.style.backgroundColor = "#cfcaca";
    }
}

nextBtn.onclick = function (){
    indexSlider = indexSlider + 1;
    if (indexSlider > 1 ){
        indexSlider = 0;
    }
    if(indexSlider == 1){
        progressBar.style.backgroundColor = "#425A20";
    }
    else{
        progressBar.style.backgroundColor = "#cfcaca";
    }
}