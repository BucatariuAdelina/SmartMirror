const startRecoveryBtn = document.querySelector('.start_recovery_btn');
const recoveryElements = document.querySelector('#container__right');
const recoveryDayText = document.querySelector('.text');
var hide = 0;

var date = new Date();
var tomorow;

var conn = mysql.createConnection({
    host: 'localhost', // Replace with your host name
    user: 'root',      // Replace with your database username
    password: null,      // Replace with your database password
    database: 'smartmirror'// // Replace with your database Name
  });
  
  conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  
  });


var startMonth;



function updateRecoveryDay(){

    tomorow = date.getDate()+1;


    if (tomorow == date.getDate()){
        recoveryDay++;
        recoveryDayText.innerHTML= 'RECOVERY DAY:' + recoveryDay;
    }
}

function hiden(){

    if( hide == 0 ){
        startRecoveryBtn.style.display = "none";
        recoveryElements.style.display = "inline";
        recoveryDay = 1;
        startDay= date.getDate();
        startMonth = date.getMonth();
        console.log(startDay);
        console.log(startMonth);

        
        return hide = 1;
    }
    if( hide = 1){
        recoveryElements.style.display="inline";
    }
    
}