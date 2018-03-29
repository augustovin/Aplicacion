function Apareces() {
    var x = document.getElementById("AppearText");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0";
    }
}

function Revela(){
    //var x = document.getElementById("TxtC");
    var y = document.getElementById("TxtC");
    
   /* if ( x.style.display==="none"  ){
        x.style.display ="block";
    } else {
        x.style = "none";
    }*/
    
     if (y.style.opacity === "0" ){
        y.style.opacity = "1";
    } else {
        y.style.opacity = "0";
    }
}




function CeOver(){
    
    document.getElementById("Ce").style.fill="white";
    
}

function CeOut(){
    document.getElementById("Ce").style.fill="none";
    
}

/*function Revela(){
    document.getElementById("TxtC").style.display="block";
    document.getElementById("Aplicacion").style.color="black";
    document.getElementById("Aplicacion").style.opacity="0.9";
}*/

