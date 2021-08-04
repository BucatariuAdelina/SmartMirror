const electron = require('electron');
let UserNameLog = document.getElementById('UserNameLog');
let PasswordLog = document.getElementById('PasswordLog');
const CryptoJS  = window.require('crypto-js');

var UserNameValue = UserNameLog.value;
var currentDate = new Date();


var dd = String(currentDate.getDate()).padStart(2, '0');
var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); 
var yyyy = currentDate.getFullYear(); 

currentDate = dd + ' ' + mm + ' ' + yyyy;


var mysql = require('mysql');
var row ;
var dec;
var id;

global.UserNameLog = UserNameLog.value;
var crypt = {
  secret : "CIPHERKEY",
  encrypt : function (clear){
  // encrypt() : encrypt the given clear text

    var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
    cipher = cipher.toString();
    return cipher;
  },

  decrypt : function (cipher) {
  // decrypt() : decrypt the given cipher text

    var decipher = CryptoJS.AES.decrypt(cipher, "CIPHERKEY");
    decipher = decipher.toString(CryptoJS.enc.Utf8);
    return decipher;
  }
};

var conn = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: null,      
  database: 'smartmirror'
});

conn.connect(function (err) {
  if (err) throw err;
  console.log('Database is connected successfully !');

});

var validateUserLogin=0;

var passwordValid = 0;

UserNameLog.addEventListener('mousemove', function(){

    var db_username ;
    var db_username_length;

    conn.query("SELECT * FROM users", function(err,rows,fields) {
            if(err){
            throw err;
        }else{
            setValue(rows);
            console.log(rows);
        }
    });

    function setValue(val){

    db_username = val;

    db_username_length = db_username.length;

    for(var i=0; i < db_username_length ;i++){
        
        if(db_username[i].userName == UserNameLog.value){
            id=db_username[i].id;
            validateUserLogin=1;
            
            break;


            }else{
                validateUserLogin=0;
        
            }
            

    }
    }
    
});

// global.LastUserName = {
//   name: UserNameLog.value
// }

PasswordLog.addEventListener('mousemove', function(){

  var db_username ;
  var db_username_length;
  
  

  conn.query("SELECT password FROM users", function(err,rows,fields) {
          if(err){
          throw err;
      }else{
          setValue(rows);
          console.log(rows);
      }
  });

  function setValue(val){

  db_password = val;

  db_password_length = db_password.length;

  for(var i=0; i < db_password_length ;i++){
    var decipher = crypt.decrypt(db_password[i].password);

      if(decipher == PasswordLog.value){
         
          passwordValid=1;
          break;

          }else{
              passwordValid=0;
      
          }
          

  }
  console.log("dupa for validateUserLog ="+validateUserLogin);
  }
  
});









  // conn.query(`SELECT password FROM users WHERE userName= '${UserNameLog.value}'`, function(err,rows,fields) {
  //         if(err){
  //           throw err;
  //          }else{
                  
  //                 var decipher = crypt.decrypt('U2FsdGVkX19rvi6d+yZwypABk6V6Ej1JiPJ39y9219c=');
            
  //                 if(PasswordLog.value === decipher ){
  //                   passwordValid = 1;
  //                 }
  //                   console.log(rows);
  //               }
  // });


  document.getElementById("loginBtn").addEventListener('click', function () {
  ///trebuie sa verific daca usernameul exista 
      //daca da sa ii afiseze mesaj 
      //daca nu sa insereze datele
    
        


      if( validateUserLogin == 1 ){
      

        if(passwordValid == 1){

         //////verificare !!!!!!!!!!!!!!!!!!!!!
     
          $insertMedicalRecovery = `INSERT INTO medical_recovery (user_id, start_date) VALUES ('${id}','${currentDate}')`;        
          conn.query($insertMedicalRecovery, (err, result) => {
            if (err) {
            return console.log("err", err);
            }
            });

          window.open("appWindow.html");

          
        }else{
          const options = {
            type: 'error',
            buttons: ['Cancel', 'OK'],
            defaultId: 2,
            title: 'Error!',
            message: 'Password does`t exists!',
            detail: 'Please try another one or register',
            checkboxLabel: 'Remember my answer',
            checkboxChecked: true,
          };
        
          dialog.showMessageBox(window.mainWindow, options, (response, checkboxChecked) => {
            console.log(response);
            console.log(checkboxChecked);
          });
        }    
        

      }else{
        const options = {
            type: 'error',
            buttons: ['Cancel', 'OK'],
            defaultId: 2,
            title: 'Error!',
            message: 'The username doesn`t exists!',
            detail: 'Please try another one or register',
            checkboxLabel: 'Remember my answer',
            checkboxChecked: true,
          };
        
          dialog.showMessageBox(window.mainWindow, options, (response, checkboxChecked) => {
            console.log(response);
            console.log(checkboxChecked);
          });

      }
    

  }); 






