
let lastScrollTop =scrollY//get last scroll

let scrollJJ=0;
class Jscroll{
  constructor(){
    this.startScroll=this.startScroll.bind(this);
  
   //this.getMatchedElements=this.getMatchedElements.bind(this);
   //this.scrollHandler=this.scrollHandler.bind(this);
   this.allJscrollEl=document.querySelectorAll("body *");
   this.finishedElement=[];
   this.finishedAnimation=false;
   this.timeout=()=>0;
    this.interval=window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;
   // this.interval=this.interval.bind(this);*/
  }

  startScroll() {
  let scrollTop = scrollY;
  

  if (lastScrollTop === scrollTop) {
    requestAnimationFrame(this.startScroll);
    return;
  } else {
      lastScrollTop = scrollTop;
      // fire scroll function if scrolls vertically
      this.scrollHandler(scrollTop);
     this.timeout=requestAnimationFrame(this.startScroll);
    }
    if(this.finishedAnimation){
      cancelAnimationFrame(this.timeout);
    }
 }
createJscrollId(){
  let index=0;
  const elememts=[];
  this.allJscrollEl.forEach((e)=>{
  const attr=(value)=>e.getAttribute(value);
  //checking jscroll element
    const isJscroll=()=>{
      if(
        (attr("scrollStyle")!==undefined && attr("scrollStyle")!==null)
      
      ||

      (attr("Jscroll")!==undefined && attr("Jscroll")!==null)

      ||

     (attr("JscrollStyle")!==null && attr("JscrollStyle")!==undefined)

      ||

     ( attr("JStyle") !==undefined &&  attr("JStyle")!==null )
  
    ||

    ( attr("scrollEvent") !==undefined && attr("scrollEvent") !==null )){//end if curely bracket
    return true;
    }
    else{
      return false;
    }
      }
        //end checking jscroll elements
  
    if(!isJscroll()){
      return
    }

elememts.push(e);
      index++;
      const milsc=new Date().getMilliseconds();
    const JscrollId="JscrollId"+(Math.floor(Math.random()*milsc)+index);
e.classList.add(JscrollId);
    
  });
  this.allJscrollEl=elememts;
}
start(){
  if (this.interval) {
    this.createJscrollId();
    this.startScroll();
  }
  else{
    alert("Jscroll not surported in this browser please try chrome 33+");
  }
}

getScrollElements(scroll){
  const elements={
    active:[],
    noneActive:[]
  };

this.allJscrollEl.forEach((e,i)=>{
  const info=e.getBoundingClientRect();//checking wich element is on the screen view?
if((info.y+info.height) < 0 ) {//pass
elements.noneActive.push(e);
elements.active.splice(i,1);
}
else if(scroll > (info.bottom+(screen.height/3))){
 elements.active.push(e);
 }
else{
 elements.noneActive.push(e);
// elements.active.splice(i,1);
}
});

if(elements.active.length<=0 && elements.noneActive.length<=0){
  this.finishedAnimation=true;
    }
  
return elements;
}

scrollHandler(scroll){//this func whach scroll
const scrollElements=this.getScrollElements(scroll);
//console.log(scrollElements);
scrollElements.active.forEach((e,i)=>{
  const finished=e.getAttribute("finished");
if(finished!==undefined&&finished!==null){
  return 
}
const stringCss=this.findElCssString(e);
this.stringToCss(e,stringCss);
});

}

findElCssString(e){//find the Jscroll css string
  const attr=(value)=>e.getAttribute(value);
  if((attr("scrollStyle")!==undefined && attr("scrollStyle")!==null)){
    return attr("scrollStyle");
  }
      
  if((attr("Jscroll")!==undefined && attr("Jscroll")!==null)){
    return attr("Jscroll");
  }

 if((attr("JscrollStyle")!==null && attr("JscrollStyle")!==undefined)){
  return attr("JscrollStyle");
 }

if( attr("JStyle") !==undefined &&  attr("JStyle")!==null ){
  return attr("JStyle");
}



if(( attr("scrollEvent") !==undefined && attr("scrollEvent") !==null )){
  return attr("scrollEvent"); 
}
}//end find css string function

stringToCss(el,stringCss){//this function append directly to css
const originalCss=el.getAttribute("style");
//console.log(originalCss);
if(originalCss!==undefined&&originalCss!=null){
  el.setAttribute("style",originalCss+""+stringCss);
}
else{
  el.setAttribute("style",stringCss);
  }
  el.setAttribute("finished",true);
}//end string to css func


}//end Jscroll class
