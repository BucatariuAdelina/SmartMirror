//verifica daca user-name-ul exista in baza de date, daca exista te atentioneaza si trebuie sa introduci din nou, daca nu exista te inregistreaza in baza de date
const { BrowserWindow } = require('electron');



const userNameField = document.getElementById('UserName');
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const CityName = document.getElementById('CityName');
const UserName = document.getElementById('UserName');
let Password = document.getElementById('Password');
const Age = document.getElementById('Age');
const RecoveryType = document.getElementById('RecoveryType');
var idVAR;

var crypt = {
  secret: "CIPHERKEY",
  encrypt: function (clear) {
    // encrypt() : encrypt the given clear text

    var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
    cipher = cipher.toString();
    return cipher;
  },

  decrypt: function (cipher) {
    // decrypt() : decrypt the given cipher text

    var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
    decipher = decipher.toString(CryptoJS.enc.Utf8);
    return decipher;
  }
};


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
/*
$query1 = 'SELECT * FROM `users` WHERE fullName = "adelina"';

conn.query($query1, (err, rows, fields) => {
  if (err) {
    return console.log("err", err);
  }
  console.log(rows);
});

*/
var db_username;
var db_username_length;

conn.query("SELECT userName FROM users", function (err, rows, fields) {
  if (err) {
    throw err;
  } else {
    setValue(rows);
    console.log(rows);
  }
});

function setValue(val) {
  db_username = val;
  db_username_length = db_username.length

  for (var i = 0; i < db_username_length; i++) {

    if (db_username[i].userName == userNameField.value) {
      validateUser = 1;


      const options = {
        type: 'error',
        buttons: ['Cancel', 'OK'],
        defaultId: 2,
        title: 'Error!',
        message: 'The username you chosen already exists!',
        detail: 'Please try another one',
        checkboxLabel: 'Remember my answer',
        checkboxChecked: true,
      };

      dialog.showMessageBox(window.mainWindow, options, (response, checkboxChecked) => {
        console.log(response);
        console.log(checkboxChecked);
      });


    } else {
      validateUser = 0;
    }


  }
}



document.getElementById("registerBtn").addEventListener('click', function () {
  ///trebuie sa verific daca usernameul exista 
  //daca da sa ii afiseze mesaj 
  //daca nu sa insereze datele



  if (validateUser == 0 && FirstName.value != "" && LastName.value != "" && CityName.value != "" && Age.value != "") {

    var cipher = crypt.encrypt(Password.value);
    $insertUserFormQuery = `INSERT INTO users (firstName, lastName, userName, password, cityName, age, recovery_type) VALUES ('${FirstName.value}','${LastName.value}','${UserName.value}', '${cipher}','${CityName.value}','${Age.value}','${RecoveryType.value}') `;
    conn.query($insertUserFormQuery, (err, result) => {
      if (err) {
        return console.log("err", err);
      }
    });
    
    const options = {
      type: 'info',
      buttons: ['Cancel', 'OK'],
      defaultId: 2,
      title: 'Succes',
      message: 'Inregistrare cu succes!',
      detail: ':)',
      checkboxLabel: 'Remember my answer',
      checkboxChecked: true,
    };

    dialog.showMessageBox(window.mainWindow, options, (response, checkboxChecked) => {
      console.log(response);
      console.log(checkboxChecked);
    });
    //window.open("appWindow.html");

  }else{
    options = {
      type: 'error',
      buttons: ['Cancel', 'OK'],
      defaultId: 2,
      title: 'Error!',
      message: 'Can`t go forword!',
      detail: 'Please try another one',
      checkboxLabel: 'Remember my answer',
      checkboxChecked: true,
    };

    dialog.showMessageBox(window.mainWindow, options, (response, checkboxChecked) => {
      console.log(response);
      console.log(checkboxChecked);
    });


  }



});

userNameField.addEventListener('mouseout', function () {
  console.log("r" + FirstName.value);
  console.log("r" + LastName.value);
  console.log("r" + CityName.value);
  console.log("r" + Age.value);
  console.log("r" + Password.value);
  console.log("r" + RecoveryType.value);
  console.log('id-ul' + idVAR);

});
