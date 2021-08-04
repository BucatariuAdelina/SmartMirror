var someVar ;

  

  conn.query("SELECT recovery_day FROM medical_recovery", function(err,rows,fields) {
    if(err){
      throw err;
    }else{
      setValue(rows);
      console.log(rows);
    }
  });

  function setValue(val){
    someVar = val;
    console.log(someVar[0].recovery_day);


  }

  let incrementRecoveryDay = someVar[0].recovery_day + 1;
console.log(incrementRecoveryDay);
  
$updateRecoveryDayQuery = `UPDATE medical_recovery SET recovery_day = ${incrementRecoveryDay} `;
conn.query($updateRecoveryDayQuery, (err, rows, fields) => {
  if (err) {
    return console.log("err", err);
  }
});