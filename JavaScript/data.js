const data = document.getElementById("dataDeAzi");
const containerDataDeAzi = document.getElementById("container__left");

containerDataDeAzi.addEventListener('mouseout', function(){

    var dataDeAzi = new Date();

    var dd = String(dataDeAzi.getDate()).padStart(2, '0');
    var mm = String(dataDeAzi.getMonth() + 1).padStart(2, '0'); 
    var yyyy = dataDeAzi.getFullYear(); 

    dataDeAzi = dd + '/' + mm + '/' + yyyy;
    
    data.innerHTML = dataDeAzi;

})