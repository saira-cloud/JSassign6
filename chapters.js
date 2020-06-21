


// _______________________chap 21 - 25 _______________________


// _________________________Task 1 ___________________________

// var firstName = prompt('enter your first name');
// var lastName = prompt('enter your last name');
// var fullName = firstName + lastName;

// alert(fullName);


// _____________________task 2 ___________________________________________

// var model = prompt('enter your fav mobile model');
// var n = model.length;
// document.writeln(" My favorite Phone is:" + model + "<br>" + "length of string is " + " "+ n )

// ______________________task 3 ______________

// var str = "Pakistan";
// var m = str.indexOf("n");

// document.writeln("string" + " " + str + "<br>" + "Index of 'n' :" + " " + m);

// __________________________task 4 _______________________


// ____________________task 5________________________

// var str = "pakistan";
// var char = str.charAt(3);

// document.writeln("String" + " " + str + "<br>" + "Character At index 3 :" + " " + char);

// ____________________task 7 ____________________________

// var str = "Hyderabad ";
// var res = str.replace("Hyder", "Islam");
// document.writeln("City: " + str + "<br>" + "After replacement: " + " " + res);

// __________________task 8 _________________________________

// var message = "ali and sami are best friends they play cricket and football together";

// var str = message.split("and") . join("&");
// alert(str);


// __________________________task 9 ______________________________

// var str = "472";
// var str1 = parseInt(str);

// document.writeln("Value : " + " " + str + "<br>" + "Type:" + " " + "String" +"<br>"+ "Value:" + str1 + "<br>"+ "Type:" + " " + "Number"); 

// ___________________task 10 _____________________________________

// var name = prompt(' enter your name');
// name = name.toUpperCase();
// alert(name);

// __________________task 11________________________________________

// var sentence = prompt('enter your word');
// var capital = sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
// document.writeln("user input: " + " " + sentence + "<br>" + "Title Case:" + " " + capital );


// ____________________Task 12 ____________________

// var num = 35.36;
// document.write("Number:" + num + "<br>");
// var res = num.replace("." , "");
// document.write("Number:" + res + "<br>");

// ______________________task 13___________________


// var username = prompt('enter your name');



// for(var i = 0; i < username.length; i++){


//     if(username[i] === 33){
//         alert("reenter");

//     } 
    
    // ___________problem in above program_______________


// _____________________task 14 _____________

// var item =prompt('enter your name');
// item = item.toLowerCase();
// var arr = ['cake', 'applepie', 'cookie', 'chips', 'patties'];
// for(var i= 0 ; i < arr.length; i++){
//     if(arr[i] === item){
//         var res = item.indexOf(arr[i])
//         alert('item has found at index' + " " +  res);
//     }
//     else{alert('item not found')}
// }




// ___________________chap 31 - 34_____________

// _______________lec 14 practice ____________________
// var a = new Date();

// var a = new Date();
// var ab= a.getDay();
// alert(ab)

// var c = a.getMonth();
// alert(c); 

// var d  = a.getSeconds();
// alert(d);
// var e = a.getHours();
// alert(e);
// var f = a.getFullYear();
// alert(f);

// var dob = new Date("May 14, 1993");
// var dobmilli = dob.getTime();
// var today = new Date();
// var todayMilli = today.getTime(); 

// alert(dobmilli);
// alert(todayMilli);

// var diff = todayMilli - dobmilli;
// alert("from birth to 21 june 2020 - i have spent " + " " + diff + " milli seconds on the earth ") 
// // alert(diff);
// var diffyear = diff/(1000 * 60 * 60 * 24 *30 *12);
// alert(diffyear);
// var accuage = Math.floor(diffyear);
// alert(accuage);


// a.toString()

// alert(a);
// a.getTime();
// alert(a);

// var b = a.toString();
// var c = b.slice(0,3);
// alert(c); 

// ______________________end of practice ______________________________________







// ______________________task 1 ________________________________


// var a = new Date();

// alert(a);

// ______________________________task 2 __________________________

// var b = a.getMonth();

// switch(b)
// {
//     case 0:
//         alert("current month: " + "January");
//         break;
//     case 1:
//         alert("current month: " +" Feburar");
//         break;
//     case 2:
//         alert("current month: " + "March");
//         break;
//     case 3:
//         alert("current month: " + "April");
//         break;
//      case 4:
//         alert("current month: " + "May");
//         break;
        
//     case 5:
//         alert("current month: " + "June");
//          break;
//     case 6:
//         alert("current month: " + "July");
//          break;
//      case 7:
//         alert("current month: " + "August");
//          break;
//     case 8:
//          alert("current month: " + "September");
//          break;
//     case 9:
//         alert("current month: " + "October");
//          break;
//     case 10:
//         alert("current month: " + "november");
//         break;
//     case 11:
//        alert ("current month " + "December");
//         break;
//     default:
//         alert("invalid ");
// }



// _________________________task 3 ___________________________


// var a = new Date();


// var b = a.toString();

// var c = b.slice(0,3);
// alert("today is " + c);

// _______________________task 4 _____________________________


// var a = new Date();

// var b = a.getDay();

// switch(b){

//     case 0:
//         alert("its fun day ");
//         break;
//     case 1:
//         alert("Its funday ");
//         break;
//     default:
//         alert(invalid);
// }

// __________________________chap 35 - 38 _____________________________



// ________________________task 1 _______________________________

// function greet(){

//     var name1 = prompt('enter your first name');
//     var name2 = prompt('enter your last name ');
//     var full = name1 + name2;
//     alert("hello " + " " + full);


// }

//  greet();
































































































































