     //"use strict";
     //let number = 5;
     //const leftBorderWith = 1;

     //number == 10;
     //console.log(number);

     //const obj = {
     //    name: "John ",
   //      age: 25,
 //        isMarrued: false

     
     //.console.log(obj.name);
     //alert("hello")
     //const result = confirm( "are you here?")
     //console.log(   result);

     //
     // const answer = prompt( "вам есть 18?"," ");
     //console.log( typeof(answer));
    
    // const answers = [  ];

     //answers[0 ]= prompt('как ваше имя', "");
     //answers[1 ]= prompt('как ваше фамилия', "");
    // answers[2 ]= prompt('сколько вам лет', "");

      // console.log( typeof(answers)) 

//const category = "toys";

//console.log( "https: //someurl.com/"+ category);


 
//const user = "ivan";
//alert(`пивет${user}
//console,console.log;




const numberOfFilms = prompt( "Сколько фильмов вы уже посмотрели ?","")

const personalMovieDB = {  
  count: numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
private : false
  };
  const a = prompt( "один из последних фильмов которие вы посмотрели ",""),
 b = prompt( "на сколько оцените его ?",""),
 c = prompt( "один из последних фильмов которие вы посмотрели ",""),
   d = prompt( "на сколько оцените его ?","");
   personalMovieDB.movies[a] = b;
   personalMovieDB.movies[c] = d;

   console .log( personalMovieDB);