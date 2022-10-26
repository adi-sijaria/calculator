// console.log("hello");
let screen=document.getElementById("answer");
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener("click",function(e){
        buttontext=e.target.innerText;
        let originalanswer=buttontext;
        console.log(buttontext);
        // console.log("hello");
        
        if(buttontext=="clear"){
            screenValue="";
            screen.value=screenValue;


        }
        else if(buttontext=="="){
            // console.log(buttontext+"hello");
          
            
            // eval(screen.value,screenValue);
            screenValue= eval(screenValue);
            screen.value=screenValue;
            
        }
        else if(buttontext=="undo"){
            // console.log(buttontext+"hello");
          
            
            // eval(screen.value,screenValue);
            screenValue= screenValue.slice(0,-1);
            screen.value=screenValue;
            
        }
        else{
            screenValue+=buttontext;
            screen.value=screenValue;
        }

    });

}
let mainid=document.getElementById("main");
let body=document.querySelector("body");
body.addEventListener("mousemove",function(e){
    mainid.style.backgroundColor=`rgb(0,${e.offsetX},${e.offsetY})`;
});