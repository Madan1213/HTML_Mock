let mydiv1 = document.getElementById("div1")
let mydiv2 = document.getElementById("div2")
let mydiv3 = document.getElementById("div3")

mydiv1.addEventListener("click", ()=>
{
    console.log("Div1");
},true)
mydiv2.addEventListener("click", (e)=>
{
    console.log("Div2");
    e.stopPropagation();
},true)
mydiv3.addEventListener("click", ()=>
{
    console.log("Div3");
},true)
