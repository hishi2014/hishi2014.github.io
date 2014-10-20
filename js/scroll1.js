
var a = document.getElementById("main");
var b=document.getElementById("side");
var c=document.getElementById("side_bnr_area");
var d=document.getElementById("header");
var e=a.clientHeight;
var f=b.clientHeight;
var g=c.clientHeight+20;
var h=d.clientHeight;
var i=window.innerHeight;
var j=h+g+30-i;
var k=e+h+20-i;
var l=document.getElementById("back");
window.onscroll=function(){
   if(e>f){
  b.style.height=e+"px";
}
  if(j<document.body.scrollTop&&document.body.scrollTop<=k)
{
  c.style.position="fixed";
  c.style.bottom="10px";
   c.style.top="";
   c.style.left=b.getBoundingClientRect().left;
   l.style.display="block";
}else if(document.body.scrollTop>=k){
  c.style.position="relative";
   c.style.top=(e-g)+"px";
   c.style.left=0;
  }else{
    c.style.position="static";
   c.style.top="";
   l.style.display="none";
}
};