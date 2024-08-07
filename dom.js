// !mouse changing color (mouse လှုပ်တဲ့အချိန်color များပြောင်းလဲအောင်သတ်မှတ်ခြင်း)
//mpouse-event listener
document.addEventListener('DOMContentLoaded',function(){
    let box = document.querySelector('#box');
}
);
//change color on mouseover;
box.addEventListener('mouseover',function(){
    box.style.backgroundColor = 'skyblue';
    box.textContent = 'Mouse Over!';
});
// revert color on mouse out
box.addEventListener('mouseout',function(){
    box.style.backgroundColor = 'aquamarine';
    box.textContent = 'Hover Me!';
});
// mouse down 
box.addEventListener('mousedown',function(){
    box.style.backgrounColor = 'yellow';
    box.textContent = 'Mouse Down!';
});
box.addEventListener('mouseup',function(){
    box.style.backgroundColor = 'green';
    box.textContent = 'Mouse Up!';
});
box.addEventListener('mousemove',function(){
    let x = event.offsetX;
    let y = event.offsetY;
    box.textContent = 'X:' +x +'Y:' +y;
});



// !keyborad changing color (keyboard အားပြောင်းလဲသတ်မှတ်ခြင်း)
document.addEventListener('DOMContentLoaded',function(){
    var inputBox = document.querySelector('#inputBox');
    var input = document.querySelector('#input');
});
// handle keydown event
inputBox.addEventListener('keydown',function(event){
    console.log(event);
    output.innerHTML = "Key Down: " + event.key + " (Code: " + event.code + ")";
    if(event.key === "Enter"){
        document.bgColor = "pink";
        inputBox.style.backgrounColor = 'lightgreen';
    }
});
//handle keyup event
inputBox.addEventListener('keyup',function(event){
    output.innerHTML = "Key up: " + event.Key + "(Code: " +event.code + ")";
    if(event.key === 'Enter'){
        document.bgColor = "";
        inputBox.style.backgroundColor = "";
    }
});
//Handle keypress event (deprecated , included for demonstration)
inputBox.addEventListener('keypress',function(event){
    output.innerHTML="Key Press: " + event.key +" (Code: " +event.code + ")";
});


//! window event သုံးပြီး scroll  ဆွဲခြင်း

