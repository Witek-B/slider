const images=[{img:"images/one.jpg", text:"Góra lodowa"}, 
{img:"images/two.jpg", text:"Przystań"}, {img:"images/three.jpg", text:"Jezioro"}];
const img=document.querySelector("img.slider");
const txt=document.querySelector("h1.slider");
const dots=[...document.querySelectorAll('.dots.span')];
let index=0;

const changeDot=()=>{
    const active=dots.findIndex(dot=>dot.classList.contains('active'));
    dots[active].classList.remove('active');
    dots[index].classList.add('active');
}

const changeSlide=()=>{
    index++;
if (index===images.length) {
    index=0; 
}
img.src=images[index].img;
txt.textContent=images[index].text;
changeDot();
}

let idInterval=setInterval(changeSlide, 3000);
const keyChange=(e)=>{
    console.log(e.keyCode);
    if(e.keyCode==37||e.keyCode==39){
        clearInterval(idInterval);
    e.keyCode==39?index++:index--;
    if(index===images.length){
index=0;
    } else if (index<0){
index=images.length-1;
    }
    img.src=images[index].img;
txt.textContent=images[index].text;
    }
}
window.addEventListener('keydown', keyChange)









