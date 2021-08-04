function displayTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 

    var momentulZilei = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        momentulZilei = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    
    var time = h + ":" + m + momentulZilei;
    document.getElementById("MyClockDisplay").innerText = time;
    
    setTimeout(displayTime, 1000);
    
}

displayTime();