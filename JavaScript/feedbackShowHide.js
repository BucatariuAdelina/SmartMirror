
const { remote } = require('electron');
var mysql = require('mysql');
const docHTML = document.getElementById("docHTML");
const user = document.getElementById("UserNameLog");




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


const btn1 = document.getElementById("1");
const btn2 =document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 =document.getElementById("4");
const feedbackDiv = document.getElementById("feedbackDiv");
//cand apas pe unul dintre ele sa introduca valoarea in baza de date si sa dispara div-ul
//in fiecare zi la ora 20:00 apare si nu dispare pana nu selectezi
var currentH = new Date().getHours();
var currentM = new Date().getMinutes();
var currentS = new Date().getSeconds();
var usr;

// function setUser(val){
//   usr = val[0].id;
//   console.log(usr);


// }
// function userSelect(){

  
//   conn.query("SELECT * FROM users ORDER BY ID DESC LIMIT 1", function(err,rows,fields) {
//     if(err){
//       throw err;
//     }else{
//       setUser(rows);
//       console.log(rows); 
//     }
//   });
// }



 
var someVar ;

  

function setValue(val){
  someVar = val;
  console.log(someVar[0].recovery_day);


}



if(currentH =='20'&&currentM=='0'&&currentS=='0'){
    feedbackDiv.style.display='block';
}

docHTML.addEventListener('mousemove',function(){

 
conn.query("SELECT recovery_day FROM medical_recovery WHERE user_id='273'", function(err,rows,fields) {
  if(err){
    throw err;
  }else{
    setValue(rows);
    console.log(rows);
    
  }
  document.getElementById("recovery-day").innerHTML=rows[0].recovery_day;
});


})
var varID ;
  

function setValueF(val){
  varID = val;
  console.log(varID[0].id);


}


btn1.addEventListener('click',function(){
  

  $getLastInsertedId = `SELECT * FROM medical_recovery ORDER BY ID DESC LIMIT 1`; 

  conn.query($getLastInsertedId, (err, result) => {
    if (err) {
      return console.log("err", err);
    } else {
      setValueF(result);
      console.log('VREAU SA VAD CE AFISEAZA'+result[0].user_id);
      $insertIntoFeedback = `INSERT INTO user_feedback (user_id, feedback) VALUES ('${result[0].user_id}','${btn1.value}')`;
      conn.query($insertIntoFeedback, (err, result) => {
        if (err) {
          return console.log('err', err);
        } else {
          return console.log('result', result);
        }
      })
      
  let incrementRecoveryDay = someVar[0].recovery_day + 1;
  
  document.getElementById("recovery-day").innerHTML=incrementRecoveryDay;
  
    $updateRecoveryDayQuery = `UPDATE medical_recovery SET recovery_day = ${incrementRecoveryDay} WHERE user_id='274'  `;
    conn.query($updateRecoveryDayQuery, (err, rows, fields) => {
    if (err) {
        return console.log("err", err);
    }
    });
    }
  })
  feedbackDiv.style.display= 'none';
  
})

btn2.addEventListener('click',function(){
  

  $getLastInsertedId = `SELECT * FROM medical_recovery ORDER BY ID DESC LIMIT 1`; 

  conn.query($getLastInsertedId, (err, result) => {
    if (err) {
      return console.log("err", err);
    } else {
      setValueF(result);
      console.log('VREAU SA VAD CE AFISEAZA'+result[0].user_id);
      $insertIntoFeedback = `INSERT INTO user_feedback (user_id, feedback) VALUES ('${result[0].user_id}','${btn2.value}')`;
      conn.query($insertIntoFeedback, (err, result) => {
        if (err) {
          return console.log('err', err);
        } else {
          return console.log('result', result);
        }
      })
    }
  })
     
  let incrementRecoveryDay = someVar[0].recovery_day + 1;
  document.getElementById("recovery-day").innerHTML=incrementRecoveryDay;
  
    $updateRecoveryDayQuery = `UPDATE medical_recovery SET recovery_day = ${incrementRecoveryDay} WHERE user_id='274'   `;
    conn.query($updateRecoveryDayQuery, (err, rows, fields) => {
    if (err) {
        return console.log("err", err);
    }
    });

    feedbackDiv.style.display= 'none';
    
})


btn3.addEventListener('click',function(){

  
  $getLastInsertedId = `SELECT * FROM medical_recovery ORDER BY ID DESC LIMIT 1`; 

  conn.query($getLastInsertedId, (err, result) => {
    if (err) {
      return console.log("err", err);
    } else {
      setValueF(result);
      console.log('VREAU SA VAD CE AFISEAZA'+result[0].user_id);
      $insertIntoFeedback = `INSERT INTO user_feedback (user_id, feedback) VALUES ('${result[0].user_id}','${btn3.value}')`;
      conn.query($insertIntoFeedback, (err, result) => {
        if (err) {
          return console.log('err', err);
        } else {
          return console.log('result', result);
        }
      })
    }
  })
  let incrementRecoveryDay = someVar[0].recovery_day + 1;
  document.getElementById("recovery-day").innerHTML=incrementRecoveryDay;
  
    $updateRecoveryDayQuery = `UPDATE medical_recovery SET recovery_day = ${incrementRecoveryDay} WHERE user_id='274'  `;
    conn.query($updateRecoveryDayQuery, (err, rows, fields) => {
    if (err) {
        return console.log("err", err);
    }
    });
    feedbackDiv.style.display='none';

})

btn4.addEventListener('click',function(){
    
  $getLastInsertedId = `SELECT * FROM medical_recovery ORDER BY ID DESC LIMIT 1`; 

  conn.query($getLastInsertedId, (err, result) => {
    if (err) {
      return console.log("err", err);
    } else {
      setValueF(result);
      console.log('VREAU SA VAD CE AFISEAZA'+result[0].user_id);
      $insertIntoFeedback = `INSERT INTO user_feedback (user_id, feedback) VALUES ('${result[0].user_id}','${btn4.value}')`;
      conn.query($insertIntoFeedback, (err, result) => {
        if (err) {
          return console.log('err', err);
        } else {
          return console.log('result', result);
        }
      })
    }
  })
  let incrementRecoveryDay = someVar[0].recovery_day + 1;
  document.getElementById("recovery-day").innerHTML=incrementRecoveryDay;
  
    $updateRecoveryDayQuery = `UPDATE medical_recovery SET recovery_day = ${incrementRecoveryDay} WHERE user_id='274'   `;
    conn.query($updateRecoveryDayQuery, (err, rows, fields) => {
    if (err) {
        return console.log("err", err);
    }
    });
    feedbackDiv.style.display='none';
})


