var filterBtns=document.querySelectorAll('.filter-btn');
var masonryItems=document.querySelectorAll('.masonry-item');
for(var i=0;i<filterBtns.length;i++){
(function(btn){
btn.addEventListener('click',function(){
for(var j=0;j<filterBtns.length;j++)filterBtns[j].classList.remove('active');
btn.classList.add('active');
var cat=btn.getAttribute('data-filter');
for(var k=0;k<masonryItems.length;k++){
if(cat==='all'||masonryItems[k].getAttribute('data-cat')===cat){
masonryItems[k].classList.remove('hidden');
}else{
masonryItems[k].classList.add('hidden');
}
}
});
})(filterBtns[i]);
}
var lbIdx=0;
function getVisible(){
var all=document.querySelectorAll('.masonry-item');
var vis=[];
for(var i=0;i<all.length;i++){
if(!all[i].classList.contains('hidden'))vis.push(all[i]);
}
return vis;
}
function openLightbox(gi){
var all=document.querySelectorAll('.masonry-item');
var item=all[gi];
if(!item||item.classList.contains('hidden'))return;
var vis=getVisible();
lbIdx=vis.indexOf(item);
showLb(vis[lbIdx]);
document.getElementById('lightbox').classList.add('open');
document.body.style.overflow='hidden';
}
function closeLightbox(){
document.getElementById('lightbox').classList.remove('open');
document.body.style.overflow='';
}
function navLightbox(dir){
var vis=getVisible();
lbIdx=(lbIdx+dir+vis.length)%vis.length;
showLb(vis[lbIdx]);
}
function showLb(item){
var t=item.querySelector('.masonry-overlay h4');
var s=item.querySelector('.masonry-overlay span');
document.getElementById('lbTitle').textContent=t?t.textContent:'';
document.getElementById('lbSub').textContent=s?s.textContent:'';
}
document.addEventListener('keydown',function(e){
var lb=document.getElementById('lightbox');
if(!lb||!lb.classList.contains('open'))return;
if(e.key==='Escape')closeLightbox();
if(e.key==='ArrowLeft')navLightbox(-1);
if(e.key==='ArrowRight')navLightbox(1);
});
var lbEl=document.getElementById('lightbox');
if(lbEl)lbEl.addEventListener('click',function(e){
if(e.target===lbEl)closeLightbox();
});
