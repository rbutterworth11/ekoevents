function toggleCat(btn){
var cat=btn.parentElement;
if(!cat.classList.contains('faq-category')){
var p=btn;
while(p&&!p.classList.contains('faq-category'))p=p.parentElement;
cat=p;
}
if(cat)cat.classList.toggle('open');
}
function toggleFaq(btn){
var item=btn.parentElement;
var wasOpen=item.classList.contains('open');
var siblings=item.parentElement.querySelectorAll('.faq-item');
for(var i=0;i<siblings.length;i++)siblings[i].classList.remove('open');
if(!wasOpen)item.classList.add('open');
}
