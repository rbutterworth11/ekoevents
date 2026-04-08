var tdots=document.querySelectorAll('.testimonial-dot');
var titems=document.querySelectorAll('.testimonial-item');
var tcur=0;
function tslide(i){
for(var j=0;j<titems.length;j++)titems[j].classList.remove('active');
for(var j=0;j<tdots.length;j++)tdots[j].classList.remove('active');
titems[i].classList.add('active');
tdots[i].classList.add('active');
tcur=i;
}
for(var j=0;j<tdots.length;j++){
(function(idx){tdots[idx].addEventListener('click',function(){tslide(idx);});})(j);
}
setInterval(function(){tslide((tcur+1)%titems.length);},6000);
