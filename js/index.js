'use strict'
////////////////////////////////// 1 ////////////////////////////////////
// const apartment = {
//     imgUrl : "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating :  4,
//     price : 2153,
//     tags : ["premium", "promoted", "top"],
// };


////////////////////////////////// 2 ////////////////////////////////////

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],

//     owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//     },
// };


////////////////////////////////// 3 ////////////////////////////////////
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };

//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line

////////////////////////////////// 4 ////////////////////////////////////

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

////////////////////////////////// 5 ////////////////////////////////////

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line


////////////////////////////////// 6 ////////////////////////////////////

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push("trusted");


////////////////////////////////// 7 ////////////////////////////////////


// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location= {
//   country : "Jamaica",
// city : "Kingston",}

// Change code below this line


////////////////////////////////// 8 ////////////////////////////////////

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
// name,
//   price,
//   image,
//   tags


  // Change code above this line
// };

// ///////////////////////////////// 9 ////////////////////////////////////

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]:"henry.carter@aptmail.com",

//   [passwordInputName]:"jqueryismyjam",
//   // Change code above this line
// };

// ///////////////////////////////// 10 ////////////////////////////////////

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for(const key in apartment){
//   keys.push(key)

// values.push(apartment[key]);

// }

// ///////////////////////////////// 11 ////////////////////////////////////
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city centre';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// 	if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
//     }
//   // Change code above this line
// }


// ///////////////////////////////// 12 ////////////////////////////////////

// function countProps(object) {
//   let propCount = 0;
//    // Change code below this line
//   for ( const key in object){
// if(object.hasOwnProperty(key)){
//   propCount += 1;} }
//   // Change code above this line
//   return propCount;
// }


// countProps({}) 
// countProps({ name: "Mango", age: 2 })
// countProps({
//   mail: "poly@mail.com",
//     isOnline: true,
//     score: 500
// })


// ///////////////////////////////// 13 ////////////////////////////////////

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
//  for (const key of keys)
//  {
//   values.push(apartment[key]);

//  }

// ///////////////////////////////// 14 ////////////////////////////////////

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// 	const keys = Object.keys(object);
//   for (const key of keys) {

//       propCount += 1;

//     }
//       return propCount;
//   }

  // ///////////////////////////////// 15 ////////////////////////////////////

//   const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

  // ///////////////////////////////// 16 ////////////////////////////////////

//   function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// 	const values = Object.values(salaries)
//     for (value of values){
//       totalSalary+= value;}
//   // Change code above this line
//   return totalSalary;
// }

  // ///////////////////////////////// 17 ////////////////////////////////////

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for ( const color of colors) {
// 	hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

  // ///////////////////////////////// 18 ////////////////////////////////////

//   const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (let product of products) {
//     if (product.name === productName) {
//        return(product.price);
//     } 
//   }
//   return null;
// } 

//  getProductPrice("Radar") 
//  getProductPrice("Grip")  
//  getProductPrice("Scanner")
//  getProductPrice("Droid") 
// getProductPrice("Engine") 

//   // Change code above this line


  // ///////////////////////////////// 19 ////////////////////////////////////

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(products) {
//   // Change code below this line
//   const names =[];
//   for (const product of products) {
//     if (product[propName]) {
//       names.push(product[propName]);
//     }

//    }
//    return names;


//   Change code above this line
// }

  // ///////////////////////////////// 20 ////////////////////////////////////


// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

// 	for (const product of products){
//       if (product.name===productName){
//         totalPrice= product.price*product.quantity;
//         return totalPrice;}
//     }
// 	return 0;

// }


  // ///////////////////////////////// 21 ////////////////////////////////////


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday,today,tomorrow}= highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//   // ///////////////////////////////// 22 ////////////////////////////////////
//   const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday,today,tomorrow,
//        icon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}=highTemperatures

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;



 ///////////////////////////////// 23 ////////////////////////////////////

//  const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line


// const {yesterday:highYesterday,today:highToday,tomorrow:highTomorrow,
//        icon:highIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}=highTemperatures

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


 ///////////////////////////////// 24 ////////////////////////////////////


// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const{hex,rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


///////////////////////////////// 25 /////////////////////////////////

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {today:{low:lowToday,high:highToday,icon:todayIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, tomorrow: {low:lowTomorrow,high:highTomorrow,icon:tomorrowIcon ="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},}=forecast;


///////////////////////////////// 26 /////////////////////////////////
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {today:{low:todayLow,high:todayHigh},tomorrow:{low:tomorrowLow,high:tomorrowHigh},}=forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;

// }

///////////////////////////////// 27 /////////////////////////////////

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore =Math.max(...scores) ;
// const worstScore = Math.min(...scores);


///////////////////////////////// 28 /////////////////////////////////
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

///////////////////////////////// 29 /////////////////////////////////
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings,...overrideSettings};

// ///////////////////////////////// 30 /////////////////////////////////

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
// const { title } = data;
//   return {completed, text: data.text,category: data.category || category, priority: data.priority || priority  }
//   // Change code above this line
// }


// ///////////////////////////////// 31 /////////////////////////////////


// // Change code below this line
// function add(...args) {

//   let total = 0;
//   for (const argument of args) {
//     total += argument;
//   }

//   return total;
// }

// ///////////////////////////////// 32 /////////////////////////////////


// // Change code below this line
// function addOverNum(number,...args) {

//   let total = 0;

//   for (const arg of args) {
//     if (arg > number) {
//       total += arg;
//     }
//   }


//   return total;

//   // Change code above this line
// }


// ///////////////////////////////// 33 /////////////////////////////////

// // Change code below this line
// function findMatches(array, ...rest) {
//   const matches = []; // Don't change this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array.includes(rest[i])) {
//       matches.push(rest[i]);
//     }
//   }
//   // Change code above this line
//   return matches;
// }





// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) 

// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) 

// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)

// ///////////////////////////////// 34 /////////////////////////////////

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {

//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };


// ///////////////////////////////// 35 /////////////////////////////////
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const arr =this.books.indexOf(oldName); 

//     this.books.splice( arr , 1 ,newName);



//     // Change code above this line
//   },
// };


// bookShelf.updateBook("Haze", "Dungeon chronicles"),["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// bookShelf.updateBook("The last kingdom", "Dune"), ["Dune", "Haze", "The guardian of dreams"];

// ///////////////////////////////// 36 /////////////////////////////////
// const atTheOldToad = {
//   // Change code below this line
//   potions:[],// Change code above this line
// };
// ///////////////////////////////// 37 /////////////////////////////////
// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions(){
//     return this.potions},
//   // Change code above this line
// };





// ///////////////////////////////// 38 /////////////////////////////////
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     // Change code above this line
//   },
// };

// ///////////////////////////////// 39 /////////////////////////////////

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const arr = this.potions.indexOf(potionName)
//       this.potions.splice(arr,1)

//     // Change code above this line
//   },
// };

// ///////////////////////////////// 40 /////////////////////////////////
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//   const arr = this.potions.indexOf(oldName);
//     this.potions.splice(arr,1,newName);
//     // Change code above this line
//   },
// };

///////////////////////////////// 41 /////////////////////////////////

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//   const { potions } = this;
//   const { name } = potionName;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === name) {
//         return `Potion ${name} is already equipped!`;
//       }
//       potions.push(potionName);
//     }
//   },
//   removePotion(potionName) {
//      const { potions } = this;
//     for (let i = 0; i<potions.length;i+=1){
//       if (potions[i].name===potionName){
//         potions.splice(i, 1);
//         return potions;
//       }
//     }
//       return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//      const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === oldName) {
//         potions[i].name = newName;
//         return potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };



// Task 4
// У нас есть объект, нужно создать функцию, которая будет его перебирать
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj1 поля в формате 'I like элемент массива', после вызова функции мы должны
// получить объект вот в таком виде
// {
//     'I like c++': "c++",
//     'I like java': "java",
//     'I like js': "js",
//     'i like my work': true,
//     'my name': "John",
//     'programming languages': ['js', 'java', 'c++']
// }

const obj1 = {
  "my name": "John",
  "i like my work": true,
  "programming languages": ["js", "java", "c++"],
};



// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.
