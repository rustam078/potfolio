var typed=new Typed(".type",{
    strings:["RUSTAM ALI "," A FULL STACK DEVELOPER"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})

function clock(){

    var mid;  
    var date = new Date();  
    var hour = date.getHours();  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    mid=(hour>=12)?"PM":"AM";
    if (minute < 10) {  
      minute = "0" + minute;  
    }  
    if (second < 10) {  
      second = "0" + second;  
    }  
    if (hour < 12) {  
      document.getElementById("greeting").innerHTML= "GOOD MORNING";  
    } else if (hour < 17) {  
      document.getElementById("greeting").innerHTML= "GOOD AFTERNOON";   
    } else if(hour<20){  
      document.getElementById("greeting").innerHTML= "GOOD EVENING"; 
      
    }
    else{  
        document.getElementById("greeting").innerHTML= "GOOD NIGHT"; 
        
    }
    document.getElementById("clock").innerHTML=hour+":"+minute+":"+second+" "+mid; 
    var time=setTimeout(function(){
      clock();
    },1000);
 
}
clock();