let bg = document.getElementById("bgcolor");
let display = document.getElementById("display");
let fontsize = document.getElementById("fontsize");
let fontweight = document.getElementById("fontweight");
let texttransform = document.getElementById("transform");
let textcolor = document.getElementById("textcolor");
let matter = document.getElementById("matter"); 
let btn = document.getElementById("btn");

btn.addEventListener("click" , function(){
    let bgv = bg.value;
    let fsv = fontsize.value;
    let fwv = fontweight.value;
    let ttv = texttransform.value;
    let tcv = textcolor.value;
    let mv = matter.value;
    
    if (bgv || fsv || fwv || ttv || tcv || mv ){

            if (fsv && fsv<= 0) {
                alert('Please enter a valid font size.');
                return;
            }
        display.style.backgroundColor=bgv;
        display.style.fontSize=fsv  + 'px';
        display.style.fontWeight=fwv;
        display.style.textTransform=ttv;
        display.style.color=tcv;
        display.textContent=mv;
    }
    else{
        alert("Enter atleast one value");
    }
})











































// if (fsv){
    //     if (fontsize <= 0) {
    //         alert('Please enter a valid font size.');
    //         return;
    //     }
    // }
