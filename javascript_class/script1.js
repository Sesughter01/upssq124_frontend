// VARIABLES IN JAVASCRIPT

/* 1. Data Creation
   2. Data Modification
   3. Data Display
   4. Data Storage
   5. Data Transfer
*/
 //Automatic variable declaration : Also called a global variable
// x=6; // Never declare javascript variables this way.

// y = 25; // the variable container y holds or stores the number 25
var y ; // variable y is declared

let u = "10 mdhdjsdjkalalakaa a anam";
u = u-5;


// console.log(u);

const t = 2000;

const tz = 6;
const myArray =  ['list1','list2']

const myObj = {
    image: {
        thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
        mobile: "./assets/images/image-waffle-mobile.jpg",
        tablet: "./assets/images/image-waffle-tablet.jpg",
        desktop: "./assets/images/image-waffle-desktop.jpg"
   },
  name: "Waffle with Berries",
   category: "Waffle",
   price: 6.50



}

// console.log(x);
// console.log(t);

{
    let r = "right";
    

   
    // console.log(r); // What will r be in the console?
}

// OPERATORS IN JAVASCRIPT

let userName = "10";
let surName = "30"
let fullName = userName + surName; //String Concatenation : The process of joining strings together usin the Addition operator

// console.log(fullName);

// JSON STRING

const jsonString = '{"name": "Waffle with Berries", "category": "Waffle","price": 6.50}';

// Convert JSON String to Javascript Object

const jsObj = JSON.parse(jsonString);

// console.log(jsObj)
// console.log(jsObj)
// console.log(jsonString[8])

// String Methods in JavaScript : Slice Method

/*
  The Slice method is a string method that extracts a portion of a string and returns 
  the extracted string . It does not change the original string but makes a copy of the portion to be 
  extracted and returns it .
  The Slice method takes 2 parameters ; the first parameter is the start number and the second is the stop number
  please note that the character on the stop number index is not included.

  Slice Method allows negative index numbers . However , the indices are counted from right to left

    
    


*/

let fruits = "Apples, Mangoes, Grapes";
     let strSliced = fruits.slice(-15,-8);
     let char1 = fruits.at(7);
  
    //  alert(char1);

    // SUBSTRING METHOD : Similar the slice method with a little difference

    let strSlice2 = fruits.substring(-15,-8)

    // alert(strSlice2);

/**
 *  String Method padStart(): This method allows you to repeatedly add a character to the front
 * of a string. It takes 2 arguments ; the 1st is the length of the new string and the 2nd
 * is the padding characters
 * 
 */

let strToday = 7;
let newStrToday = strToday.toString().padEnd(4,"0");
// console.log("PADDED: ",newStrToday);

/**
 *  String Method padEnd(): This method allows you to repeatedly add a character to the back
 * of a string. It takes 2 arguments ; the 1st is the length of the new string and the 2nd
 * is the padding characters
 * 
 */

let nStrToday = 7;
let newNStrToday = nStrToday.toString().padEnd(3,"0");
// console.log(newNStrToday);

// Difference Slice Method and substring method

let str_one = "apples mangoes bananas";

const str_x = "john";
const str_y = "@";
const str_z = "gmail.com";

const str_t = str_x + str_y + str_z;

const str_r = str_x.concat("",str_y);
const str_p = str_r.concat("", str_z);

// console.log("STR_R: ", str_r );
// console.log("STR_P: ", str_p );
// console.log("STR_T: ", str_t );

let return_str = str_one.slice(-15);
let return_str_2 = str_one.substring(7,14);
let return_str_3 = str_one.substr(-8);

// console.log("STR_ONE: ", return_str );
// console.log("STR_TWO: ", return_str_2 );
// console.log("STR_THREE: ", return_str_3 );

// JavaScript String  indexOf() method

let nuStr = "Apples Bananas Oranges Grapes Oranges";
let searchStr = nuStr.indexOf("Oranges");

// console.log("STR_CAPS: ", searchStr );




let fake_name_str = "please let me learn javascript quickly learn";
let my_email = "userutu@gmail.com"
let index_of_fake_str = my_email.search(/U/i);
let nu_fake_name_str = fake_name_str.search("learn");
// console.log("LEN_FAKE_STR: ", fake_name_str.length );
// console.log("FAKE_STR: ", index_of_fake_str );

let nuuStr = `Apples 
Bananas 
Oranges 
Grapes 
Bananas`;
let searchStrNu = nuuStr.indexOf('Bananas',15);
// console.log("STR_CAPS: ", searchStrNu );

const start_with_what = nuuStr.endsWith("nas ", 15)
// console.log("STARTS_WITH: ", start_with_what );

let some_str = "Vince";
let another_str = "Vaughn";
let numm1 = 5;
let numm2 = 6;

// let join_str = "I have joined " + some_str + " " + another_str;
let join_str = `I have joined ${numm1 + numm2} ${another_str}`;

console.log("JOIN_STR: ",join_str );

