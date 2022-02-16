// https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
window.inView = [];
function isElementInViewport (id) {

    const el = document.getElementById(id);
    
    if(el === null) {
            return false;
        }
    
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}
     
function inViewGetClassList(elem) {
    var classes = []; 
    let classList = elem.classList; 
    for (var index in classList) {
      if (classList.hasOwnProperty(index)) {
        classes.push(classList[index]);
      }
    }
    return classes;
}

function inViewScrollCheck() {
    if( typeof inViewScrollCheck.run == 'undefined' ) {
        inViewScrollCheck.run = true ; 
        inViewScrollCheck.count = 0 ;
    }
    if(inViewScrollCheck.run===false) {
        return false;
    } else if(inViewScrollCheck.run) {
        inViewScrollCheck.run=false; 
        setTimeout(function(){ inViewScrollCheck.run=true;/*console.log('!')*/ }, 50); //throttle 
        //return inViewScrollCheck.run=false; 
    }
    inViewScrollCheck.count++;
    //console.log(inViewScrollCheck.count);
    //console.log('inViewScrollCheck') 
    let items = document.querySelectorAll('.in-view'); 
    //private function
    // function inViewGetClassList(elem) {
    //     var classes = []; 
    //     let classList = elem.classList; 
    //     for (var index in classList) {
    //       if (classList.hasOwnProperty(index)) {
    //         classes.push(classList[index]);
    //       }
    //     }
    //     return classes;
    // }
    //console.log(items) 
    let watch = {};// example
    items.forEach((elem, index, array)  => {  
               // assign ID if none
                if(!elem.id) {
                    let id = Math.floor(Math.random() * 100000); 
                    elem.id = 'inv'+id;
                }
                //check if element is in viewport
                watch[elem.id] =  isElementInViewport(elem.id);  
            }); 
            
    //loop elements to act on if in view
    items.forEach((elem, index, array)  => {  
            //console.log(name , watch[name]); 
                    let targetSelector = elem.getAttribute('data-in-view-target'); //target selector
                    let targetClass = elem.getAttribute('data-in-view-class') ? elem.getAttribute('data-in-view-class') : 'in-view-active' ; //target class

                    if(watch[elem.id]) {
                            window.inView[elem.id] = true; //global var to expose state
                            //elem.style = elem.style+'border:red 1px solid;color:red;background:red;' ;
                            elem.classList.add('in-view-active');
                            let classes = inViewGetClassList(elem); 
                            let sticky = classes.indexOf('in-view-sticky'); //appears and stays
                        // let animate = classes.indexOf('in-view-animate'); //animated svg container
                        //  let targetSticky = elem.getAttribute('data-in-view-sticky'); //target sticky or not THIS CANNOT be independent of element sticky 

                            if(sticky>0) {
                                elem.classList.remove('in-view');  
                            }

                            if(targetSelector && targetClass) { 
                               // console.log('target & class', [targetSelector,targetClass]);
                                document.querySelector(targetSelector).classList.add(targetClass); 
                            } else if(targetClass) { 
                                 //   console.log('only target class', targetClass);
                                    elem.classList.add(targetClass);  
                            }

                    //    if(animate>0) { //@finish
                    //     //   animSvg('#'+elem.id); //requires svg to have 'animated' class
                    //    } 
                   // if(watch[elem.id] && typeof( window.inView[elem.id]) === 'undefined') {
                        //console.log(name+'title');
                    //} else if(!watch[elem.id] &&  window.inView[elem.id] ) {
                } else {
                        delete(window.inView[elem.id]);
                        //elem.style = '' ; 
                        elem.classList.remove('in-view-active'); 


                        if(targetSelector!=null && targetClass && document.querySelector(targetSelector)) { 
                        //    console.log('removing target & class', [targetSelector,targetClass]);
                            document.querySelector(targetSelector).classList.remove(targetClass); 
                        } else if(targetClass) { 
                       //     console.log('removing target class', targetClass);
                              elem.classList.remove(targetClass);
                              
                        //    document.querySelector(targetSelector).classList.remove(targetClass); 
                        }/* */
                     
                       // let animated = document.querySelector('#'+elem.id+' svg.animated');
                       // let statik = document.querySelector('#'+elem.id+' svg.anim-was-hidden'); 
                       //     if( statik !== null) { statik.setAttribute( 'class', statik.getAttribute('class').replace('anim-was-hidden', 'is-hidden') )};
                       //     if( animated !== null) {  animated.setAttribute( 'class', animated.getAttribute('class').replace('is-hidden', '') )};  
                }
    });  
    
}
  
 
function inViewLoad (events) {
    //console.log('onViewLoad');  
    events = typeof(events) == 'undefined' || events.length==0 ? ['load','scroll','resize'] : events ;  

    if (window.addEventListener) {
        addEventListener('DOMContentLoaded', inViewScrollCheck, false);  
        events.forEach((event, index, array)  => {
                    //console.log("a[" + index + "] = " + event); 
                    addEventListener(event, inViewScrollCheck, false);   
                });
    } else if (window.attachEvent)  {
        attachEvent('onDOMContentLoaded', inViewScrollCheck); // IE9+ :(
        events.forEach((event, index, array)  => {
                    //console.log("a[" + index + "] = " + event);  
                    attachEvent('on'+ event, inViewScrollCheck); 
                });
                    
    }
}
inViewLoad();