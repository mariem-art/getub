



var m= document.getElementsById("aime");
var a=document.getElementsById("plus");
var b=document.getElementsById("qte");
var c=document.getElementsById("moins");
var somm=document.getElementsById("achat-arti");
var supt= documentgetElementsByClassName("list-group-item1");
var supp=document.getElementsById("supp");



m.addEventListener("click",coeur());
function coeur(m) {
   if (m.style.color === "red")
   {
       return m.style.color ="black";
    }
   else
    {
        return m.style.color ="red";
    }
  
}

function plus(a)
{
    a.innerHTML=a.innerHTML+1;
}

fuction moins(c) 
{
    c.innerHTML=+a.innerHtml-1;
}



function somm(a )
{
    return a * 250 ;
}


function remove1()
{
 supp1.removeEventListener(supp1)
 removeEventListener()
}
   












