
const getNews = async() => (

    await fetch(`https://www.biziday.ro/services/xml/rss/biziday/HomePage.xml`)
    //await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa5935cc9c95777d0c786b271319638a`)
    .then(res => res.json())
    .then(data => {

        console.log(data)

    }).catch( err => console.log(err))

)

document.addEventListener("DOMContentLoaded", (e) => {
    let newsDiv = document.querySelector('.news');
    if (newsDiv) {
        document.querySelector('.news').removeChild(newsDiv);
    }
    getNews();
    
})



