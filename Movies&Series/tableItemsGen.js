var table = document.querySelector('table');

const data = {
  arr:
    [
      {
      imagesFilms: 'img/table/img (1).jpg',
      nameFilms: 'Game of throne',
      dateFlims: '2011',
      rateFilms: '9.3',
      genreFilms: 'Action, Adventure, Drama',
      type: 'Series',
      linksFilms: '../Series/game_of_throne.html'
    },
    {
      imagesFilms: 'img/table/img (2).jpg',
      nameFilms: 'Mr Robot ',
      dateFlims: '2014',
      rateFilms: '8.5',
      genreFilms: 'Crime, Drama, Thriller',
      type: 'Series',
      linksFilms: '../Series/mr_robot.html'
    },
    {
      imagesFilms: 'img/table/img (3).jpg',
      nameFilms: 'The Witcher',
      dateFlims: '2019',
      rateFilms: '8.3',
      genreFilms: 'Action, Adventure, Drama',
      type: 'Series',
      linksFilms: '../Series/the_witcher.html'
    },
    {
      imagesFilms: 'img/table/img (4).jpg',
      nameFilms: '13 reason why',
      dateFlims: '2017',
      rateFilms: '7.8',
      genreFilms: 'Drama, Mystery',
      type: 'Series',
      linksFilms: '../Series/13_reason_why.html'
    },
    {
      imagesFilms: 'img/table/img (5).jpg',
      nameFilms: 'Stranger things',
      dateFlims: '2016',
      rateFilms: '8.8',
      genreFilms: ' Drama, Fantasy, Horror ',
      type: 'Series',
      linksFilms: '../Series/stranger_things.html'
    },
    {
      imagesFilms: 'img/table/img (6).jpg',
      nameFilms: 'La Case de Paple',
      dateFlims: '2017',
      rateFilms: '8.5',
      genreFilms: ' Action, Crime, Mystery',
      type: 'Series',
      linksFilms: '../Series/la_casa.html'
    },
    {
      imagesFilms: 'img/table/img (11).jpg',
      nameFilms: 'The 100',
      dateFlims: '2014',
      rateFilms: '7.7',
      genreFilms: ' Crime, Drama, Mystery',
      type: 'Series',
      linksFilms: '../Series/the_100.html'
    },
    {
      imagesFilms: 'img/table/img (14).jpg',
      nameFilms: 'Joker',
      dateFlims: '2019',
      rateFilms: '8.5',
      genreFilms: ' Crime,Drama,Thriller',
      type: 'Movie',
      linksFilms: '../Movies/Joker/Joker.html'
    },
    {
      imagesFilms: 'img/table/img (17).jpg',
      nameFilms: 'Titanic',
      dateFlims: '1997',
      rateFilms: '7.8',
      genreFilms: ' Drama,Romance',
      type: 'Movie',
      linksFilms: '../Movies/Titanic/titanic.html'
    },
    {
      imagesFilms: 'img/table/img (19).jpg',
      nameFilms: 'BloodShot',
      dateFlims: '2020',
      rateFilms: '5.7',
      genreFilms: 'Action',
      type: 'Movie',
      linksFilms: '../Movies/booldshot/bloodshot.html'
    },
    {
      imagesFilms: 'img/table/img (20).jpg',
      nameFilms: 'Drag Me To Hell',
      dateFlims: '2009',
      rateFilms: '6.6',
      genreFilms: 'Horror',
      type: 'Movie',
      linksFilms: '../Movies/Drag Me to Hell/Drag me to hell.html'
    },
    {
      imagesFilms: 'img/table/img (22).jpg',
      nameFilms: 'End Game',
      dateFlims: '2019',
      rateFilms: '8.7',
      genreFilms: 'Action',
      type: 'Movie',
      linksFilms: '../Movies/Avengers/avengers.html'
    },
    {
      imagesFilms: 'img/table/img (23).jpg',
      nameFilms: 'Doctor Strange',
      dateFlims: '2016',
      rateFilms: '7.5',
      genreFilms: 'Action',
      type: 'Movie',
      linksFilms: '../Movies/Dstrange/string.html'
    },
     {
      imagesFilms: 'img/table/jo.jpg',
      nameFilms: 'John Wick',
      dateFlims: '2014',
      rateFilms: '7.4',
      genreFilms: 'Action',
      type: 'Movie',
      linksFilms: '../Movies/john wick/john.html'
    },
     {
      imagesFilms: 'img/table/fast.jpg',
      nameFilms: 'Fast & Furuios',
      dateFlims: '2016',
      rateFilms: '9.5',
      genreFilms: 'Action',
      type: 'Movie',
      linksFilms: '../Movies/fast/fast.html'
    },
    {
      imagesFilms: 'img/table/img (24).jpg',
      nameFilms: 'The Titan Games',
      dateFlims: '2019',
      rateFilms: 'Soon',
      genreFilms: 'Sports Show',
      type: 'TV Show',
      linksFilms: '../TVShow/tg.html'
    },
    {
      imagesFilms: 'img/table/img (25).jpg',
      nameFilms: 'American ninga warrior',
      dateFlims: '2019',
      rateFilms: '7',
      genreFilms: 'Sports Show',
      type: 'TV Show',
      linksFilms: '../TVShow/ninga.html'
    },
    {
      imagesFilms: 'img/table/img (26).jpg',
      nameFilms: 'American got talent',
      dateFlims: '2006',
      rateFilms: '6.5',
      genreFilms: 'Talent Show',
      type: 'TV Show',
      linksFilms: '../TVShow/agt.html'
    },
    {
      imagesFilms: 'img/table/img (27).jpg',
      nameFilms: 'Saturday Day Night',
      dateFlims: '1975',
      rateFilms: '8.2',
      genreFilms: 'Talent Show',
      type: 'TV Show',
      linksFilms: '../TVShow/snl.html'
    },
    {
      imagesFilms: 'img/table/img (28).jpg',
      nameFilms: 'Kitchen nightmares',
      dateFlims: '2007',
      rateFilms: '7.5',
      genreFilms: 'Reality TV',
      type: 'TV Show',
      linksFilms: '../TVShow/kn.html'
    },
    {
      imagesFilms: 'img/table/img (29).jpg',
      nameFilms: 'Millionaire',
      dateFlims: '1999',
      rateFilms: '7.5',
      genreFilms: 'Game Show',
      type: 'TV Show',
      linksFilms: '../TVShow/wwn.html'
    }
  ]
}

// method 1
data.arr.forEach((film)=>{
  table.innerHTML += "<tr><td class='img'><a href='" + film.linksFilms + "'><img src='" +
  film.imagesFilms + "'></a></td><td class='namee'><a href='" + film.linksFilms + "'>" +
  film.nameFilms + "</a></td><td><a href='" + film.linksFilms + "'>" +
  film.dateFlims + "</a></td><td><a href='" + film.linksFilms + "'>" +
  film.rateFilms+"</a></td><td><a href='" + film.linksFilms + "'>" +
  film.type+"</a></td><td><a href'" + film.linksFilms + "'>" +
  film.genreFilms + "</a></td><td><a href='" + film.linksFilms + "''></td></tr>";
});
/* Search Function*/
function searchFunction()
{
  var searchInp = document.getElementById('searchPc');
  var filter = searchInp.value.toUpperCase();
  var mytable =document.getElementById('mee');
  var tr = mytable.getElementsByTagName('tr');
  /*var searchItems = document.querySelectorAll('#myTable tr');
  var searchItemsTexts = document.querySelectorAll('#myTable .naame')*/

  for (i = 0; i < tr.length; i++) {

    var td = tr[i].getElementsByTagName('td')[1];
   
      if(td)
      {
        var textvalue = td.textContent || td.innerHTML;
        if(textvalue.toUpperCase().indexOf(filter) > -1)
        {
          tr[i].style.display = "";
        }
        else
        {
          tr[i].style.display = "none";
        }
      }
  }
}



//method 2 
/*var table = document.querySelector('table');
var imagesFilms = ["img/table/img (1).jpg", "img/table/img (2).jpg", "img/table/img (3).jpg", "img/table/img (4).jpg",
    "img/table/img (5).jpg", "img/table/img (6).jpg", "img/table/img (7).jpg", "img/table/img (8).jpg",
    "img/table/img (9).jpg", "img/table/img (10).jpg", "img/table/img (11).jpg", "img/table/img (12).jpg",
    "img/table/img (13).jpg","img/table/img (14).jpg","img/table/img (15).jpg","img/table/img (16).jpg",
    "img/table/img (17).jpg","img/table/img (18).jpg","img/table/img (19).jpg","img/table/img (20).jpg",
    "img/table/img (21).jpg","img/table/img (22).jpg","img/table/img (23).jpg","img/table/img (24).jpg",
    "img/table/img (25).jpg","img/table/img (26).jpg","img/table/img (27).jpg","img/table/img (28).jpg",
     "img/table/img (29).jpg"],


  nameFilms = ["Game of throne", "Mr Robot ", "The Witcher", "13 reason why", "Stranger things",
    "La Case de Paple", "Dark", "Breaking Bad", "Dracula", "Chernobyl", "The 100", "You","Avatar","Joker",
      "The Shawshank Redemption","Black Panther","Titanic","Interstellar","BloodShot","Drag Me To Hell",
       "The Artist","End Game","Doctor Strange","The Titan Games","American ninga warrior","American got talent",
       "Saturday Day Night","Kitchen nightmares","Millionaire"],


  dateFlims = ["2011", "2014", "2019", "2017", "2016", "2017", "2017", "2008", "2020", "2019", "2014", "2018",
              "2009","2019","1994","2018","1997","2014","2020","2009","2011", "2019", "2016","2019","2019","2006"
              ,"1975","2007","1999"],


  rateFilms = ["9.3", "8.5", "8.3", "7.8", "8.8", "8.5", "8.7", "9.5", "6.8", "9.4", "7.7", "7.8",
              "7.8","8.5","9.3","7.3","7.8","8.6","5.7", "6.6", "7.9", "8.7", "7.5","Soon","7","6.5","8.2","7.5","7.5"],


  genreFilms = ["Action, Adventure, Drama", "Crime, Drama, Thriller", "Action, Adventure, Drama", "Drama, Mystery",
   " Drama, Fantasy, Horror ", " Action, Crime, Mystery", " Crime, Drama, Mystery", "Crime, Drama, Thriller",
    "Drama, Horror", " Drama, Mystery, Sci-Fi", " Crime, Drama, Mystery", " Crime, Drama, Romance",
    "Action,Adventure,Fantasy,Sci-Fi"," Crime,Drama,Thriller","Drama"," Action,Adventure,Sci-Fi",
        " Drama,Romance"," Adventure,Drama,Sci-Fi,Thriller","Action","Horror","Romantic", "Action","Action","Sports Show"
        ,"Sports Show","Talent Show","Talent Show","Reality TV","Game Show"],


  type = ["Series","Series","Series","Series","Series","Series","Series","Series","Movie","Series","Series",
  "Series","Movie","Movie","Movie","Movie","Movie","Movie","Movie","Movie","Movie","Movie","Movie","TV Show","TV Show",
  "TV Show","TV Show","TV Show","TV Show"],

  linksFilms = ["../pages/game of throne.html", "../pages/mr_robot.html", "../pages/the_witcher.html", "../pages/13 reasons why.html", "../pages/stranger_things.html",
                 "../pages/la_case_de_papple.html", "../pages/dark.html", "../pages/breakingbad.html", "../pages/dracula.html", "../pages/chernobyl.html", "../pages/the_100.html", "../pages/you.html",
                 "../pages/avatar.html", "../pages/joker.html", "../pages/the shawshank redemption.html", "../pages/black panther.html",
                 "../pages/titanic.html", "../pages/Interstellar.html", "../pages/bloodshot.html", "../pages/drag me to hell.html", "../pages/the artist.html",
                 "../pages/endgame.html", "../pages/doctor strange.html"];

for (var i = 0; i < imagesFilms.length; i++) {
  table.innerHTML += "<tr><td class='img'><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\"><img src='" +
    imagesFilms[i] + "'></a></td><td class='naame'><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\">" +
    nameFilms[i] + "</a></td><td><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\">" +
    dateFlims[i] + "</a></td><td><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\">" +
    rateFilms[i]+"</a></td><td><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\">" +
    type[i]+"</a></td><td><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\">" +
    genreFilms[i] + "</a></td><td><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\"></td></tr>";
}*/