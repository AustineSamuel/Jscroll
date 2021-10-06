const $html=`
<div id="bg" class="w3-padding">
  <nav class="flexBetween w3-white w3-padding">
    <span width="100" height="100"><img  width="50" height="100%" src="images/logo1.jpg" style="background:rgba(0, 0, 0, 0.145)"></span>
    <button id="download" class="w3-button w3-green">Downloed</button>
  </nav><br><br>
<div class="flexBetween">
<h1 style="color:red;font-size:70px;" class="w3-center w3-block">JSCROLL</h1>

</div>
<h4 style="color:rgb(238, 238, 238);font-weight:bolder;" class="w3-block w3-center">Make smooth scroll animtion with JScroll without JavaScript</h4><br>
<div class="flexRound" style="flex-flow:row wrap">

  <div id="group" >
    <i class="fa fa-download" style="color:rgb(61, 61, 61);"></i><br><br>
  <button onclick="download('Jscroll.js')" class="w3-button w3-green">Download Jscroll.v0.1.js
  <cite class="fa fa-long-arrow-left"></cite></button>
  </div>

<div id="group" >
  <i class="fa fa-github"></i><br><br>
<button onclick="href('https://github.com/austinesamuel/Jscroll')" class="w3-button w3-blue">See  Jscroll src CODE
<cite class="fa fa-long-arrow-right"></cite></button>
</div>

<div id="group" >
  <i class="fa fa-users"></i><br><br>
<button onclick="href('https://austinesamuel.netlify.app')" class="w3-button w3-indigo">Surport the project
<cite class="fa fa-long-arrow-left"></cite></button>
</div>
  
</div>
</div>
<br><br>


<div class="flexBetween w3-padding" style="flex-flow:row wrap;">

<div id="row" class="w3-block w3-padding w3-white">

  <h3>What is <span class="name">Jscroll </span>?</h3>
<section>
<span>Jscroll</span> is fast small JavaScript library for scrolling animations only. it makes smooth scroll animtions without using any JavaScript EventListener , it lets you to add scroll events directly to html elements without writing any JavaScript CODE
</section>

<br><br>

<h3>A breef Look</h3>
<section>
  Add Jscroll Event to <b>div</b> element when user scroll to it<br><br>

  <div id="code">
<textarea style="height:120px;" disabled>
<div JscrollStyle="height:50px;width:50px;font-size:large;" 
style="width:30px;height:30px;">scrolled Me</div>
</textarea>
  </div>
</section>


<h3 class="w3-small">OUTPUT:</h3>
<img height="150" width="100%"style="display:block;margin:0 auto;">

</div>

<div id="row" class="w3-block w3-padding w3-white">
  
<br><br>

<h3>How to Use ? </h3>
<section>
  Jscroll is use by adding  <b>Jscroll , scrollEvent ,scrollStyle , Jstyle</b> attribute with css properties and values to html element.
    
  <br><br>

  <div id="code">
<textarea style="height:120px;" disabled>
<div Jstyle="height:50px;width:50px;font-size:large;" 
>scrolled Me</div>
</textarea>
  </div>
</section>

<br><br>

<h3>Installation </h3>
<section>
 install by adding Jscroll to <b>script</b> dag   
  <br><br>

  <div id="code">
<textarea style="height:120px;" disabled>
  <script src="pathToJscroll"></script></textarea>
    </div>
    start Jscroll by writing these codes
    <div id="code">
    <textarea style="height:120px;" disabled>const myJscroll=new Jscroll();
myJscroll.start();
     </textarea></div>
    
</section>
</div>


</div>
</div>

<br>`
const $css=`:root{
  --color:rgb(3, 7, 10);
}
body{
  background:rgb(245, 245, 247);
  padding:0;
  margin:0;
  box-sizing:border-box;
}
nav{
  padding:10px 20px;
}
#logo, #technology {
  width:300px;
  height:300px;
  width:100%;
}
#group{
  margin:0 auto;
  background:white;
  padding:20px;
  border-radius:10px;
  width:30%;
  min-width:270px;
  margin-top:5px;
  text-align:center;
}
#group i{
font-size:60px;
color:var(--color);  
}
#group button{
padding:10px;
background:var(--color);
border-radius:10px;
box-shadow:1px 1px 5px 0px rgb(233, 233, 233);
width:90%;
color:white;
font-weight:bolder;
cursor:pointer;
}
h3{
  font-weight:bolder;
  border-radius:5px;
  color:rgb(10,10,255);
}
#technology {
width:50%;
display:none;
}
@media screen and (min-width:600px){
  #technology{
    display:block;
  }
  #logo, #technology {
    width:300px;
    height:200px;
    width:48%;
  }
  
 
}
section{
  color:rgb(56, 56, 56);
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:500;
  font-size: medium;
}
#row{
border-left:3px solid rgb(238, 226, 226);
width:100%;
}
#code textarea{
background:rgb(0, 0, 0);
border-radius:10px;
color:white;
font-family:'Courier New', Courier, monospace;
min-height:max-content;
min-width:100%;
padding:10px;
resize: none;
cursor:text;
}
#bg{
background-image:url('images/bg.gif');
background-size:100% 100%;
background-color:var(--color);
}`
document.body.innerHTML=$html;
const cssEl=document.createElement("style");
cssEl.innerText=$css;
document.getElementsByTagName("head")[0].appendChild(cssEl);

setTimeout(()=>{
  document.getElementById("download").addEventListener("click",()=>{
  download("Jscroll.js");
});
const myJscroll=new Jscroll();
myJscroll.start();
});