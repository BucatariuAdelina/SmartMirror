///////Verifica daca usernamul introdus este deja existent in baza de date, daca nu exista se deschide fereastra de atentionare si daca exista intra in cont

const dialog = electron.remote.dialog;

var mysql = require('mysql');

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


const status = document.getElementById('status');
var validateUser = 0;

UserName.addEventListener('mouseout', function(){

    console.log(UserName.value);
   

    var db_username ;
    var db_username_length;

    conn.query("SELECT userName FROM users", function(err,rows,fields) {
    if(err){
      throw err;
    }else{
      setValue(rows);
      console.log(rows);
    }
  });

  function setValue(val){
    db_username = val;
    db_username_length = db_username.length
   // console.log(db_username.length);
   // console.log(db_username[4].userName);
   // console.log(userNameField.value);
   
    for(var i=0; i < db_username_length ;i++){
        if(db_username[i].userName == UserName.value){
            validateUser=1;
            
        
            const options = {
                type: 'question',
                buttons: ['Cancel', 'OK'],
                defaultId: 2,
                title: 'Question',
                message: 'The username you chosen already exists!',
                detail: 'Please try another one',
                checkboxLabel: 'Remember my answer',
                checkboxChecked: true,
              };
            
              dialog.showMessageBox(window.mainWindow, options, (response, checkboxChecked) => {
                console.log(response);
                console.log(checkboxChecked);
              });
        
        
            }else{
                validateUser=0;
            }
            
        }
    

    }           
    
});
