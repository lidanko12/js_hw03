'use strict'
// ////////////////////////////////// 1 ///////////////////////////
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
// orderedItems.forEach((element) => (totalPrice += element));
//   // Пиши код выше этой строки
//   return totalPrice;
// }
// ////////////////////////////////// 2 ///////////////////////////
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//   numbers.forEach((element)=>{
//     if(element > value){
//         filteredNumbers.push(element);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }
// ////////////////////////////////// 3 ///////////////////////////
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
//   firstArray.forEach((element) =>{
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     return commonElements;
//     // Пиши код выше этой строки
//   }
// ////////////////////////////////// 4 ///////////////////////////
// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) =>{
//   return quantity * pricePerItem;
// }

// ////////////////////////////////// 5 ///////////////////////////
// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) =>{
//   return quantity * pricePerItem;
// }

// ////////////////////////////////// 6 ///////////////////////////
// Пиши код ниже этой строки
// const calculateTotalPrice =(orderedItems)=> {
//   let totalPrice = 0;

// 	orderedItems.forEach((element) => (totalPrice += element));
//    return totalPrice;
// }


// Пиши код выше этой строки
// ////////////////////////////////// 7 ///////////////////////////
// Пиши код ниже этой строки
//  const filterArray=(numbers, value)=> {
//     const filteredNumbers = [];

//     numbers.forEach((element)=>{
//      if(element > value){
//         filteredNumbers.push(element);
//        }
//      });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }
// ////////////////////////////////// 8 ///////////////////////////
// Пиши код ниже этой строки
// const getCommonElements=(firstArray, secondArray)=> {
//     const commonElements = [];

//     firstArray.forEach((element)=> {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Пиши код выше этой строки
//     return commonElements;
//   }

// ////////////////////////////////// 9 ///////////////////////////
// function changeEven(numbers, value)  {
//     // Пиши код ниже этой строки
//   const newArray =[];
//     numbers.forEach((element) => {
//         if (element % 2 === 0) {
//             newArray.push(element + value);
//         } else {
//             newArray.push(element)
//         }

//     });
//            return newArray;


//     // Пиши код выше этой строки
// }
// ////////////////////////////////// 10 //////////////////////////
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(function(e){ return e.length });

// ////////////////////////////////// 11 ///////////////////////////
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(function(e){ return e.length });

// ////////////////////////////////// 12 ///////////////////////////
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки

//   const genres = books.flatMap(book=>book.genres);
// ////////////////////////////////// 13 ///////////////////////////
// const getUserNames = users => {
//     const newUser = users.map(user => user.name)
//     return newUser;
// }

// ////////////////////////////////// 14 ///////////////////////////
// Пиши код ниже этой строки
// const getUserEmails = users => {
//   const mail = users.map(newEmail=> newEmail.email)
//   return mail;

//   };
// ////////////////////////////////// 15 ///////////////////////////
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number=>number%2===0);

// const oddNumbers = numbers.filter(number=>number%2!==0);

// ////////////////////////////////// 16 ///////////////////////////
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];

// const allGenres = books.flatMap(book => book.genres);
//   console.log(allGenres)
//   const uniqueGenres = allGenres.filter(
//     (newGenres, index, array) =>
// array.indexOf(newGenres) === index);

// ////////////////////////////////// 17 ///////////////////////////
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book)=>book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book)=>book.author===AUTHOR);
// ////////////////////////////////// 18 ///////////////////////////
// Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {

// const colorYey=users.filter((user)=>user.eyeColor===color)
// return colorYey;
// };

// ////////////////////////////////// 19 ///////////////////////////
// Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//  const newUser = users.filter((user)=>user.age>=minAge & user.age <=maxAge);
//   return newUser;

// };
// ////////////////////////////////// 20 //////////////////////////
// const getUsersWithFriend = (users, friendName) => {
//   const newUser = users.filter((user)=>user.friends.includes(friendName));
//   return newUser;
// };
// ////////////////////////////////// 21 ///////////////////////////
// const getFriends = (users) => {
//   const newFriends = users.flatMap(user=>user.friends) ;
//   const uniqueFriends = newFriends.filter(
//  (newGenres, index, array) =>
//  array.indexOf(newGenres) === index);
//   return uniqueFriends;
// };
// ////////////////////////////////// 22 ///////////////////////////
// const getActiveUsers = (users) => {
//  const isOnline= users.filter(user=>user.isActive===true);
//   return isOnline;
// };
// ////////////////////////////////// 23 ///////////////////////////
//  const getInactiveUsers = (users) => {
//   const isOnline= users.filter(user=>user.isActive===false);
//    return isOnline;

// };
// ////////////////////////////////// 24 ///////////////////////////
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(option=>option.title===BOOK_TITLE);
// const bookByAuthor =  books.find(option=>option.author===AUTHOR);
// ////////////////////////////////// 25 ///////////////////////////
// const getUserWithEmail = (users, email) => {
//   const searchEmail = users.find(newEmail=>newEmail.email===email);
//   return searchEmail;
// };
// ////////////////////////////////// 26 ///////////////////////////
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value)=>value%2===0);
// const eachElementInFirstIsOdd = firstArray.every((value)=>value%2!==0);

// const eachElementInSecondIsEven = secondArray.every((value)=>value%2===0);
// const eachElementInSecondIsOdd = secondArray.every((value)=>value%2!==0);

// const eachElementInThirdIsEven = thirdArray.every((value)=>value%2===0);
// const eachElementInThirdIsOdd = thirdArray.every((value)=>value%2!==0);
// ////////////////////////////////// 27 ///////////////////////////
// const isEveryUserActive = (users) => {
//   const isOnline = users.every((user)=>user.isActive===true);
//   return isOnline
// };
// ////////////////////////////////// 28 ///////////////////////////
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((number=>number%2===0));
// const anyElementInFirstIsOdd = firstArray.some((number=>number%2!==0));

// const anyElementInSecondIsEven = secondArray.some((number=>number%2===0));
// const anyElementInSecondIsOdd = secondArray.some((number=>number%2!==0));

// const anyElementInThirdIsEven = thirdArray.some((number=>number%2===0));
// const anyElementInThirdIsOdd = thirdArray.some((number=>number%2!==0));
// ////////////////////////////////// 29 ///////////////////////////
// const isAnyUserActive = users => {
//  const isOnline = users.some((user=>user.isActive===true));
//  return isOnline;                            
// };
// ////////////////////////////////// 30 //////////////////////////
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc,time)=>{
//   return acc+ time; },0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;
// ////////////////////////////////// 31 ///////////////////////////
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc,player)=>{
//   return acc+player.playtime/player.gamesPlayed;},0);
// ////////////////////////////////// 32 ///////////////////////////
// const calculateTotalBalance = users => {
//   const allBalance = users.reduce((acc,user)=>{
//   return acc+ user.balance;},0);
//   return allBalance;

// };
// ////////////////////////////////// 32 ///////////////////////////
// const getTotalFriendCount = users => {
//    const allFriends = users.reduce((acc,user)=>{

//      return [...acc,...user.friends];},[]);
//   return allFriends.length;
// };
// ////////////////////////////////// 33 ///////////////////////////
// const getTotalFriendCount = users => {
//    const allFriends = users.reduce((acc,user)=>{

//      return [...acc,...user.friends];},[]);
//   return allFriends.length;
// };
// ////////////////////////////////// 34 ///////////////////////////
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=>a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b)=>b-a);
// ////////////////////////////////// 35 ///////////////////////////

// ////////////////////////////////// 36 ///////////////////////////
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки

//   const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));

//   const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));
// ////////////////////////////////// 37 ///////////////////////////
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a,b)=>a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b)=>b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a,b)=>a.rating-b.rating);

// const sortedByDescentingRating = [...books].sort((a,b)=>b.rating-a.rating);
// ////////////////////////////////// 38 ///////////////////////////
// const sortByAscendingBalance = users => {
//   const allBalance = [...users].sort((a,b)=>a.balance-b.balance);
//   return allBalance;
// };
// ////////////////////////////////// 39 //////////////////////////
// const sortByDescendingFriendCount = users => {
//   const allFriends = [...users].sort((a,b)=>b.friends.length-a.friends.length);
//    return allFriends;                                  
// };
// ////////////////////////////////// 40 ///////////////////////////
// const sortByName = users => {
//   const allName= [...users].sort((a,b)=>a.name.localeCompare(b.name));
//   return allName;
// };
// ////////////////////////////////// 41 ///////////////////////////
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books].filter((book)=> book.rating>MIN_BOOK_RATING).map((book)=>book.author).sort();
// ////////////////////////////////// 42 ///////////////////////////
// const getNamesSortedByFriendCount = users => {
//   const newName = [...users].sort((a,b)=>a.friends.length-b.friends.length).map((user)=>user.name);
// return newName;

// };

// ////////////////////////////////// 43 ///////////////////////////
// Пиши код ниже этой строки
// const getSortedFriends = users => {
//   const allFriend = [...users].flatMap((user) => user.friends).filter((item,index,a) => a.indexOf(item) == index).sort();
//   return allFriend;
// };
// ////////////////////////////////// 44 ///////////////////////////
// Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => {
//   const newBalance = [...users].filter((user)=>user.gender===gender)
// .reduce((acc,value)=> acc + value.balance , 0) 
//   return newBalance;
// };

