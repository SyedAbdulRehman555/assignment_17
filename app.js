// ************** CHAPTER 4 **********************//

// Q1 SOL:-
// var var_1,var_2,var_3;

// Q2 SOL:-

// Legal variables
// var $name1;
// var _name2;
// var name1;
// var new_1_name;
// var helloWorld;

// Illegal variables
// var %new_var;
// var 1user1;
// var user 1;
// var user%1;
// var new var;

// Q3 SOL:-

// document.write('<h1>“Rules for naming JS variables”</h1>');
// document.write('variable name can only contain $,_ , character and number')
// document.write('variables must begin with a $, _ or character')
// document.write('variables names are case sensitive')
// document.write('variables names should not be javascript reserved keywords')

// ************** CHAPTER 5 **********************//

//Q1 SOL:-
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var num3 = num1 + num2;
// document.write("sum of " + num1 + " and " + num2 + " is " + num3);

//Q2 SOL:-

//  SUBTRACTION
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var num3 = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + num3);

//  MULTIPLICATION
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var num3 = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + num3);

//  DIVISION
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var num3 = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + num3);

//  MODULUS
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var num3 = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is " + num3);

// Q3 SOL:-
// var num_value;
// document.write(
//   "the value of variable after declaration is " + num_value + "<br>"
// );
// num_value = 5;
// document.write(
//   "value of variable after initialization is " + num_value + "<br>"
// );
// ++num_value;
// document.write("value after increment is " + num_value + "<br>");
// num_value += 7;
// document.write("value after addition is " + num_value + "<br>");
// --num_value;
// document.write("value after decrement is " + num_value + "<br>");
// num_value = num_value % 3;
// document.write("The remainder is " + num_value + "<br>");

//Q4 SOL :-
// var movie_ticket = 600;
// var total_tickets = 5;
// var total = movie_ticket * total_tickets;
// document.write(
//   "Total Cost to buy " + total_tickets + " to a movie is " + total + "Pkr"
// );

// Q5 SOL:-

// var table = 4;

// var table_display = document.write(
//   table +
//     " x  1  = " +
//     table * 1 +
//     " <br>" +
//     table +
//     " x  2  = " +
//     table * 2 +
//     " <br>" +
//     table +
//     " x  3  = " +
//     table * 3 +
//     " <br>" +
//     table +
//     " x  4  = " +
//     table * 4 +
//     " <br>" +
//     table +
//     " x  5  = " +
//     table * 5 +
//     " <br>" +
//     table +
//     " x  6  = " +
//     table * 6 +
//     " <br>" +
//     table +
//     " x  7  = " +
//     table * 7 +
//     " <br>" +
//     table +
//     " x  8  = " +
//     table * 8 +
//     " <br>" +
//     table +
//     " x  9  = " +
//     table * 9 +
//     " <br>" +
//     table +
//     " x  10  = " +
//     table * 10 +
//     " <br>"
// );

// document.write(table_display);

//Q6 SOL :-

// var temp_in_C = 25;
// var temp_in_F = 70;

// var C_cal = (temp_in_F - 32) * (5 / 9);

// var F_cal = temp_in_C * (9 / 5) + 32;

// document.write(temp_in_C + " <sup>o</sup>C is " + F_cal + "<sup>o</sup>F");
// document.write("<br><br>");
// document.write(temp_in_F + " <sup>o</sup>F is " + C_cal + "<sup>o</sup>C");

// Q7 SOL:-

// var item1_price = 650;
// var item1_qty = 3;
// var item2_price = 100;
// var item2_qty = 7;
// var ship_chg = 100;

// var item1_tot = item1_price * item1_qty;
// var item2_tot = item2_price * item2_qty;
// var tot_cost = item1_tot + item2_tot + ship_chg;

// document.write(
//   "Price of item 1 is " +
//     item1_price +
//     "<br>" +
//     "Qty of item 1 is " +
//     item1_qty +
//     "<br>" +
//     "Price of item 2 is " +
//     item2_price +
//     "<br>" +
//     "Qty of item 2 is " +
//     item2_qty +
//     "<br>" +
//     "Shipping Charges is " +
//     ship_chg +
//     " <br> <br>"
// );

// document.write("Total cost of your order is " + tot_cost);

// Q8 SOL:-

// var total_marks = 980;
// var obtain_marks = 804;
// var per = (obtain_marks / total_marks) * 100;

// document.write(
//   "<h1>MARKS SHEET </h1><br><br><br>" +
//     "Total Marks = " +
//     total_marks +
//     "<br>" +
//     "Obtain Marks = " +
//     obtain_marks +
//     "<br>" +
//     " Percentage is " +
//     per +
//     "%"
// );

//Q9 SOL:-
// var SAR = 28;
// var USD = 104.8;
// var total_PKR = SAR * 25 + USD * 10;
// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR is " + total_PKR);

// Q10 SOL:-

// var num_val = 10;
// var calc = ((num_val + 10) * 10) / 2;
// document.write("the value of number is " + calc);

//Q11 Sol :-
// var curr_year = 2024;
// var birth_year = 1995;
// var age = curr_year - birth_year;

// document.write("<h1>AGE CALCULATOR </h1> <br><br><br>");
// document.write(
//   "Current Year is " +
//     curr_year +
//     "<br>" +
//     " Birth Year is " +
//     birth_year +
//     "<br> Your Age is " +
//     age
// );

// Q12 SOL :-
// var rad = 20;
// var pi = 3.142;
// var Cir_circum = 2 * pi * rad;
// document.write("<h1>THE GEOMETRIZER </h1> <br><br><br>");
// document.write("Circle Radius is " + rad + "<br>");
// document.write("Circle cicumference is " + Cir_circum + "<br>");
// document.write("The area is " + pi * (rad * rad));

// // Q13 SOL :-
// document.write("<h1>THE LIFETIME SUPPLY CALCULATOR </h1> <br><br><br>");

// var fav_snack = "chocolate chip";
// var curr_age = 15;
// var max_age = 65;
// var per_day = 3;
// var calc_chip = (65 - 15) * 3;

// document.write(
//   "Favourite Snack " +
//     fav_snack +
//     "<br>" +
//     " Current age " +
//     curr_age +
//     "<br>" +
//     " Maximum Age " +
//     max_age +
//     "<br>" +
//     "Per Day cosume " +
//     per_day +
//     "<br>"
// );
// document.write(
//   "You will need " +
//     calc_chip +
//     " " +
//     fav_snack +
//     " to last you until the ripe age of " +
//     max_age
// );

// ************** CHAPTER 6 **********************//
//  Q1 SOL:-
// var a = 10;
// document.write("Result <br>");
// document.write("The value of a is " + a + "<br>");
// document.write("-----------------------------<br>");
// ++a;
// document.write("The value of ++a is " + a + "<br>");
// document.write("Now the value of a  is " + a + "<br><br><br>");
// document.write("The value of a++ is " + a + "<br>");
// a++;
// document.write("Now the value of a  is " + a + "<br><br><br>");
// --a;
// document.write("the value of --a is " + a + "<br>");
// document.write("Now the value of a is " + a + "<br><br><br>");

// document.write("the value of a-- is " + a + "<br>");
// a--;
// document.write("Now the value of a is " + a + "<br>");

//Q3 SOL :-

// var user_name = prompt("enter your user name");
// document.write("<h1>Welcome " + user_name + "</h1>");

// Q5 SOL:-

// var table = +prompt("Enter you table number", 5);

// var table_display = document.write(
//   table +
//     " x  1  = " +
//     table * 1 +
//     " <br>" +
//     table +
//     " x  2  = " +
//     table * 2 +
//     " <br>" +
//     table +
//     " x  3  = " +
//     table * 3 +
//     " <br>" +
//     table +
//     " x  4  = " +
//     table * 4 +
//     " <br>" +
//     table +
//     " x  5  = " +
//     table * 5 +
//     " <br>" +
//     table +
//     " x  6  = " +
//     table * 6 +
//     " <br>" +
//     table +
//     " x  7  = " +
//     table * 7 +
//     " <br>" +
//     table +
//     " x  8  = " +
//     table * 8 +
//     " <br>" +
//     table +
//     " x  9  = " +
//     table * 9 +
//     " <br>" +
//     table +
//     " x  10  = " +
//     table * 10 +
//     " <br>"
// );

// document.write(table_display);

//Q6 SOL:-

// var sub1 = prompt("Enter subject 1 Name");
// var sub2 = prompt("Enter subject 2 Name");
// var sub3 = prompt("Enter subject 3 Name");
// var sub1_marks = +prompt("Enter subject 1 marks");
// var sub2_marks = +prompt("Enter subject 2 marks");
// var sub3_marks = +prompt("Enter subject 3 marks");
// var total_marks = 300;
// var marks_obt = sub1_marks + sub2_marks + sub3_marks;
// var sub1_per = (sub1_marks / 100) * 100;
// var sub2_per = (sub2_marks / 100) * 100;
// var sub3_per = (sub3_marks / 100) * 100;
// var tot_per = (sub1_per + sub2_per + sub3_per) / 3;

// document.write(
//   "<table> <tr> <th>SUBJECT</th><th >TOTAL MARKS</th> <th >MARKS OBTAINED</th><th>PERCENTAGE</th></tr>" +
//     " <tr> <th>" +
//     sub1 +
//     "</th><td >" +
//     "100" +
//     "</td> <td >" +
//     sub1_marks +
//     "</td><td>" +
//     sub1_per +
//     "</td></tr>" +
//     " <tr> <th>" +
//     sub2 +
//     "</th><td >" +
//     "100" +
//     "</td> <td >" +
//     sub2_marks +
//     "</td><td>" +
//     sub2_per +
//     "</td></tr>" +
//     " <tr> <th>" +
//     sub3 +
//     "</th><td >" +
//     "100" +
//     "</td> <td >" +
//     sub3_marks +
//     "</td><td>" +
//     sub3_per +
//     "</td></tr>" +
//     " <tr> <th>" +
//     " " +
//     "</th><th >" +
//     "300" +
//     "</th> <th >" +
//     marks_obt +
//     "</th><th>" +
//     tot_per +
//     "</th></tr>" +
//     "</table>"
// );
