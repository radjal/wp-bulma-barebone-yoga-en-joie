
let watch = ".scroll-back"; //CSS selector
//let bg = document.getElementById(watch);
let scrollVal ; 
let offset = 0; // starting from top
let imgHeight = 0 // height of element
//let winHeight = window.visualViewport.height ;
let winHeight = document.body.scrollHeight ; 
let ratio = document.body.scrollHeight / window.visualViewport.height ; 

//console.log('offest, ratio',[offset,ratio]);

window.addEventListener('scroll', function(){
    scrollBackground(watch); 
}); 

function scrollBackground(selector) {
    //console.log('inViewScrollCheck') 
    let elements = document.querySelectorAll(selector);  
    if(elements.length==0) return;
    elements.forEach((elem, index, array)  => {     
        scrollVal = window.scrollY ;
     //   scrollVal = window.scrollY > winHeight ? winHeight : window.scrollY  ;
        //console.log(scrollVal); 
        ratio = document.body.scrollHeight / window.visualViewport.height; 
        //console.log('offest, ratio, scrollY, window',[offset,ratio,scrollVal, document.body.scrollHeight]); 
        elem.style.backgroundPositionY = (scrollVal+offset)/ratio +'px';
     }); 
}
 
scrollBackground(watch); 