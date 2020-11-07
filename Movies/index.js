var images = ["tablephoto/joker.png", "tablephoto/blood2.jpg", "tablephoto/tit2.jpg", "tablephoto/d.jpg", "tablephoto/jo.jpg", "tablephoto/ave2.jpg", "tablephoto/f.jpg", "tablephoto/drag.jpg"],
    moviename = ["Joker", "Bloodshot", "Titanic", "Doctor Strange", "John wick 2", "Avengers Endgame", "Fast & Furiuos", "Drag Me To Hell"],
    date = ["2019", "2020", "1997", "2016", "2017", "2019", "2009", "2009"],
    rate = ["8.7", "5.7", "7.8", "7.5", "7.9", "8.7", "6.6", "6.6"],
    genere = ["Crime", "Action", "Romantic", "Drama", "Action", "Action", "Crime", "Horror"],
    time = ["02:01:50", "01:49:21", "03:14:50", "01:54:59", "02:02:23", "03:01:12", "01:46:46", "01:38:52"],
    moredetails = ["Joker/Joker.html", "booldshot/bloodshot.html", "Titanic/titanic.html", "Dstrange/string.html", "john%20wick/john.html", "Avengers/avengers.html", "fast/fast.html", "Drag%20Me%20to%20Hell/Drag%20me%20to%20hell.html"],
    download = ["https://gray.egybest.me/movie/joker-2019/?ref=search-p1#download", "https://gray.egybest.me/movie/bloodshot-2020/#download", "https://gray.egybest.me/movie/titanic-1997/#download", "https://gray.egybest.me/movie/doctor-strange-2016/#download", "https://gray.egybest.me/movie/john-wick-chapter-two-2017/#download", "https://gray.egybest.me/movie/avengers-endgame-2019/#download", "https://gray.egybest.me/movie/fast-furious-2009/#download", "https://hola.egybest.asia/movie/drag-me-to-hell-2009/#download"];
var movie = document.querySelector('.movie');
for (var i = 0; i < 8; i++) {
    movie.innerHTML +=
        "<div class='box'><div class='imgBox'><img src=" + images[i] + "></div>" +
        "<div class='details'><div class='content'>" +
        "<div><h2>" + moviename[i] + "</h2></div>" +
        "<div><h4>" + date[i] + "</h4></div>" +
        "<div><p>" + rate[i] + "</p></div>" +
        "<div><p>" + genere[i] + "</p></div>" +
        "<div><h5>" + time[i] + "</h5></div>" +
        "<div><a href=" + moredetails[i] + ">Click here for more details</a></div>" +
        "<div><a href=" + download[i] + ">click here to download</a></div>" +
        "</div></div></div>"

}