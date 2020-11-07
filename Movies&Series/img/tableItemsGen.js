var table = document.querySelector('table');

const dataa = {
  arr:
    [
      {
      imagesFilms: 'img/table/img (1).jpg',
      nameFilms: 'Game of throne',
      dateFlims: '2011',
      rateFilms: '9.3',
      genreFilms: 'Action, Adventure, Drama',
      type: 'Series',
      linksFilms: '../pages/game of throne.html'
    },
    {
      imagesFilms: 'img/table/img (2).jpg',
      nameFilms: 'Mr Robot ',
      dateFlims: '2014',
      rateFilms: '8.5',
      genreFilms: 'Crime, Drama, Thriller',
      type: 'Series',
      linksFilms: '../pages/mr_robot.html'
    },
    {
      imagesFilms: 'img/table/img (3).jpg',
      nameFilms: 'The Witcher',
      dateFlims: '2019',
      rateFilms: '8.3',
      genreFilms: 'Action, Adventure, Drama',
      type: 'Series',
      linksFilms: '../pages/the_witcher.html'
    },
    {
      imagesFilms: 'img/table/img (4).jpg',
      nameFilms: '13 reason why',
      dateFlims: '2017',
      rateFilms: '7.8',
      genreFilms: 'Drama, Mystery',
      type: 'Series',
      linksFilms: '../pages/13 reasons why.html'
    },
    {
      imagesFilms: 'img/table/img (5).jpg',
      nameFilms: 'Stranger things',
      dateFlims: '2016',
      rateFilms: '8.8',
      genreFilms: ' Drama, Fantasy, Horror ',
      type: 'Series',
      linksFilms: '../pages/stranger_things.html'
    },
    {
      imagesFilms: 'img/table/img (6).jpg',
      nameFilms: 'La Case de Paple',
      dateFlims: '2017',
      rateFilms: '8.5',
      genreFilms: ' Action, Crime, Mystery',
      type: 'Series',
      linksFilms: '../pages/la_case_de_papple.html'
    },
    {
      imagesFilms: 'img/table/img (7).jpg',
      nameFilms: 'Dark',
      dateFlims: '2017',
      rateFilms: '8.7',
      genreFilms: ' Crime, Drama, Mystery',
      type: 'Series',
      linksFilms: '../pages/dark.html'
    },
    {
      imagesFilms: 'img/table/img (8).jpg',
      nameFilms: 'Breaking Bad',
      dateFlims: '2008',
      rateFilms: '9.5',
      genreFilms: 'Crime, Drama, Thriller',
      type: 'Series',
      linksFilms: '../pages/breakingbad.html'
    },
    {
      imagesFilms: 'img/table/img (9).jpg',
      nameFilms: 'Dracula',
      dateFlims: '2020',
      rateFilms: '6.8',
      genreFilms: 'Drama, Horror',
      type: 'Movie',
      linksFilms: '../pages/dracula.html'
    },
    {
      imagesFilms: 'img/table/img (10).jpg',
      nameFilms: 'Chernobyl',
      dateFlims: '2019',
      rateFilms: '9.4',
      genreFilms: ' Drama, Mystery, Sci-Fi',
      type: 'Series',
      linksFilms: '../pages/chernobyl.html'
    },
    {
      imagesFilms: 'img/table/img (11).jpg',
      nameFilms: 'The 100',
      dateFlims: '2014',
      rateFilms: '7.7',
      genreFilms: ' Crime, Drama, Mystery',
      type: 'Series',
      linksFilms: '../pages/the_100.html'
    },
    {
      imagesFilms: 'img/table/img (12).jpg',
      nameFilms: 'You',
      dateFlims: '2018',
      rateFilms: '7.8',
      genreFilms: ' Crime, Drama, Romance',
      type: 'Series',
      linksFilms: '../pages/you.html'
    },
    {
      imagesFilms: 'img/table/img (13).jpg',
      nameFilms: 'Avatar',
      dateFlims: '2009',
      rateFilms: '7.8',
      genreFilms: 'Action,Adventure,Fantasy,Sci-Fi',
      type: 'Movie',
      linksFilms: '../pages/avatar.html'
    },
    {
      imagesFilms: 'img/table/img (14).jpg',
      nameFilms: 'Joker',
      dateFlims: '2019',
      rateFilms: '8.5',
      genreFilms: ' Crime,Drama,Thriller',
      type: 'Movie',
      linksFilms: '../pages/joker.html'
    },
    {
      imagesFilms: 'img/table/img (15).jpg',
      nameFilms: 'The Shawshank Redemption',
      dateFlims: '1994',
      rateFilms: '9.3',
      genreFilms: 'Drama',
      type: 'Movie',
      linksFilms: '../pages/the shawshank redemption.html'
    },
    {
      imagesFilms: 'img/table/img (16).jpg',
      nameFilms: 'Black Panther',
      dateFlims: '2018',
      rateFilms: '7.3',
      genreFilms: ' Action,Adventure,Sci-Fi',
      type: 'Movie',
      linksFilms: '../pages/black panther.html'
    },
    {
      imagesFilms: 'img/table/img (17).jpg',
      nameFilms: 'Titanic',
      dateFlims: '1997',
      rateFilms: '7.8',
      genreFilms: ' Drama,Romance',
      type: 'Movie',
      linksFilms: '../pages/titanic.html'
    },
    {
      imagesFilms: 'img/table/img (18).jpg',
      nameFilms: 'Interstellar',
      dateFlims: '2014',
      rateFilms: '8.6',
      genreFilms: ' Adventure,Drama,Sci-Fi,Thriller',
      type: 'Movie',
      linksFilms: '../pages/Interstellar.html'
    },
    {
      imagesFilms: 'img/table/img (19).jpg',
      nameFilms: 'BloodShot',
      dateFlims: '2020',
      rateFilms: '5.7',
      genreFilms: 'Action',
      type: 'Movie',
      linksFilms: '../pages/bloodshot.html'
    },
    {
      imagesFilms: 'img/table/img (20).jpg',
      nameFilms: 'Drag Me To Hell',
      dateFlims: '2009',
      rateFilms: '6.6',
      genreFilms: 'Horror',
      type: 'Movie',
      linksFilms: '../pages/drag me to hell.html'
    },
    {
      imagesFilms: 'img/table/img (21).jpg',
      nameFilms: 'The Artist',
      dateFlims: '2011',
      rateFilms: '7.9',
      genreFilms: 'Romantic',
      type: 'Movie',
      linksFilms: '../pages/the artist.html'
    },
    {
      imagesFilms: 'img/table/img (22).jpg',
      nameFilms: 'End Game',
      dateFlims: '2019',
      rateFilms: '8.7',
      genreFilms: 'Action',
      type: 'Movie',
      linksFilms: '../pages/endgame.html'
    },
    {
      imagesFilms: 'img/table/img (23).jpg',
      nameFilms: 'Doctor Strange',
      dateFlims: '2016',
      rateFilms: '7.5',
      genreFilms: 'Action',
      type: 'Movie',
      linksFilms: '../pages/doctor strange.html'
    },
    {
      imagesFilms: 'img/table/img (24).jpg',
      nameFilms: 'The Titan Games',
      dateFlims: '2019',
      rateFilms: 'Soon',
      genreFilms: 'Sports Show',
      type: 'TV Show',
      linksFilms: undefined
    },
    {
      imagesFilms: 'img/table/img (25).jpg',
      nameFilms: 'American ninga warrior',
      dateFlims: '2019',
      rateFilms: '7',
      genreFilms: 'Sports Show',
      type: 'TV Show',
      linksFilms: undefined
    },
    {
      imagesFilms: 'img/table/img (26).jpg',
      nameFilms: 'American got talent',
      dateFlims: '2006',
      rateFilms: '6.5',
      genreFilms: 'Talent Show',
      type: 'TV Show',
      linksFilms: undefined
    },
    {
      imagesFilms: 'img/table/img (27).jpg',
      nameFilms: 'Saturday Day Night',
      dateFlims: '1975',
      rateFilms: '8.2',
      genreFilms: 'Talent Show',
      type: 'TV Show',
      linksFilms: undefined
    },
    {
      imagesFilms: 'img/table/img (28).jpg',
      nameFilms: 'Kitchen nightmares',
      dateFlims: '2007',
      rateFilms: '7.5',
      genreFilms: 'Reality TV',
      type: 'TV Show',
      linksFilms: undefined
    },
    {
      imagesFilms: 'img/table/img (29).jpg',
      nameFilms: 'Millionaire',
      dateFlims: '1999',
      rateFilms: '7.5',
      genreFilms: 'Game Show',
      type: 'TV Show',
      linksFilms: undefined
    }
  ]
}

// method 1
dataa.arr.forEach((film)=>{
  table.innerHTML += "<tr><td class='img'><a onclick=\"checkerSignIn('" + film.linksFilms + "', 1)\"><img src='" +
  film.imagesFilms + "'></a></td><td class='namee'><a onclick=\"checkerSignIn('" + film.linksFilms + "', 1)\">" +
  film.nameFilms + "</a></td><td><a onclick=\"checkerSignIn('" + film.linksFilms + "', 1)\">" +
  film.dateFlims + "</a></td><td><a onclick=\"checkerSignIn('" + film.linksFilms + "', 1)\">" +
  film.rateFilms+"</a></td><td><a onclick=\"checkerSignIn('" + film.linksFilms + "', 1)\">" +
  film.type+"</a></td><td><a onclick=\"checkerSignIn('" + film.linksFilms + "', 1)\">" +
  film.genreFilms + "</a></td><td><a onclick=\"checkerSignIn('" + film.linksFilms + "', 1)\"></td></tr>";
});


function searchFunction()
{
  var searchInp = document.querySelector('#searchPc');
  var filter = searchInp.value.toUpperCase();
  var searchGen = document.querySelector('.myTable');
  var searchItems = document.querySelectorAll('.Searchitem tr');
  var searchItemsTexts = document.querySelectorAll('.Searchitem .namee')

  for (i = 0; i < searchItems.length; i++) {
      // li = a[i].querySelector('li');
      // p = li.querySelector('p');
   
      if (searchItemsTexts[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        searchItems[i].style.display = "";
      } else {
        searchItems[i].style.display = "none";
      }
  }
}
















/*
$('#searchPc').on('keyup',function()
{
  var value = $(this).val();
  console.log('value:',value);
  var data =(value,dataa);
  buildTable(data);
})

buildTable(dataa);

function searchTable(value, data)
{
  var filteredData = [];

  for(var i =0; i< data.length;i++)
  {
    value = value.toLowerCase();

    var name = data[i].nameFilms.toLowerCase();
    if(name.includes(value))
    {
      filteredData.push(data[i])
    }
    
  }

  return filteredData;

}

function buildTable(data)
{
  var table = document.getElementById('myTable');
  table.innerHTML = '';
  for (var i =0;i< data.length;i++)
  {
    var row = '<tr><td>${data[i].imagesFilms}</td><td>${data[i].nameFilms}</td><td>${data[i].dateFlims}</td><td>${data[i].rateFilms}</td><td>${data[i].genreFilms}</td><td>${data[i].type}</td></tr>';
    table.innerHTML += row;
  }
}*/