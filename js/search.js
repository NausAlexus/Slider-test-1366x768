const openBtn = document.querySelector('.input');

openBtn.onclick = function(){
    if (document.querySelector('.search-btn').style.display == 'none'){
        document.querySelector('.search-btn').style.display = 'block';
        document.querySelector('.nav-right-menu').style.display = 'none';
        document.querySelector('.nav-right-line1').style.marginLeft = '0px';
    } 
    else{
        document.querySelector('.search-btn').style.display = 'none';
        document.querySelector('.nav-right-menu').style.display = 'flex';
        document.querySelector('.nav-right-line1').style.marginLeft = '40px';
    }
}