function dijitalSaat(){
    var simdi = new Date(); 
    var hour= simdi.getHours();
    var minute=simdi.getMinutes();
    var second= simdi.getSeconds();
    document.getElementById("hour").innerHTML=hour;
 document.getElementById("minute").innerHTML=minute;
 document.getElementById("second").innerHTML=second;
}
setInterval(function(){dijitalSaat();},1000);
