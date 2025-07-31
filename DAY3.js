             
             
                                   //DAY-3 Interview questions
//Q.1 Create a button , on click of which new Heading tag h1 should be added with text 
// as "MERN stack" on the screen above button.



function ak(){
  let ele=document.getElementsByTagName("h1");
  ele[0].innerHTML="MERN stack";
}
//Q.2 Write code to implement timer clock using JS -- display 
// HH:MM:SS -- the time should keep updating every second.
//Answers...
function clock(){
    let date=new Date();
    let h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var M=date.getMonth();
    h=h%12;
    h=h ? h : 12;
    let ampm=h >= 12 ? " PM " :" AM  ";
    let time=h+":" +m+ ":"+s+"" +ampm;
    setTimeout(() => {
        clock();
    },1000);
    document.getElementById("Myclock").innerHTML=time;
}
clock();

// Q.3button named Replace Text When user will click on this
//  button page content should be changed to "Welcome to Elevation academy"
//Answer....

function rep(){
  // let repl=document.getElementsByTagName("p");
    //repl[0].innerHTML="Welcome to Elevation academy";
    document.body.innerHTML = "<h1>Welcome to Elevation academy</h1>";
  
}

//Q.4 Create an HTML page having content as Hello world and a button named 
// "Hide Text." When user will click on this button hide the "Hello World" text.
//Answers...
function hid(){
   let hi=document.getElementsByTagName("h2");
   hi[0].style.display="none";
}












