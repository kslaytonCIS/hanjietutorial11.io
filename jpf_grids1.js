"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Tutorial Case
   
   File: jpf_grids1.js

   Variables
   =========

   puzzel1Hint, puzzle2Hint, puzzle3Hint
      Text string containin the Hanjie puzzle hint

   puzzle1Rating, puzzle2Rating, puzzle3Rating
      Text string containing the Hanjie puzzle rating

   puzzle1, puzzle2, puzzle3
      Multidimensional array containing a Hanjie puzzle
      where marked cells are indicated by the # character
      and empty cells are indicated by an empty text string
  	
*/

var puzzle1Hint = "Triangle";
var puzzle1Rating = "Easy";
var puzzle1 = [
               ['#', '#', '#', '#', '#'],
               ['#', '#', '#', '#', ' '],
               ['#', '#', '#', ' ', ' '],
               ['#', '#', ' ', ' ', ' '],
               ['#', ' ', ' ', ' ', ' ']
              ];


var puzzle2Hint = "Elementary!";
var puzzle2Rating = "Moderate";
var puzzle2 = [
               [' ',' ',' ','#','#','#','#','#','#',' ',' ','#','#',' ',' ',' ',' ',' ','#','#'],
               [' ',' ','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ','#'],
               [' ',' ','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' '],
               [' ',' ','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' '],
               [' ',' ','#','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' '],
               [' ',' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' '],
               [' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',' ',' '],
               ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ','#','#',' '],
               ['#',' ',' ','#','#','#','#','#','#','#','#','#',' ','#',' ',' ',' ',' ',' ',' '],
               [' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' '],
               [' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' '],
               [' ',' ','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ','#'],
               [' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#',' ',' ',' ','#','#'],
               ['#','#','#','#','#','#','#','#',' ','#','#','#','#',' ','#','#',' ',' ',' ',' '],
               ['#','#','#','#','#','#','#','#','#',' ','#','#','#',' ',' ','#',' ','#','#',' '],
               ['#','#','#','#','#','#','#','#','#','#',' ','#','#',' ',' ','#',' ','#','#',' '],
               ['#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ','#','#','#','#',' '],
               ['#','#','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ','#','#','#','#',' '],
               [' ',' ','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ','#','#',' ',' '],
               [' ',' ',' ',' ',' ','#','#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' '],
              ];

var puzzle3Hint = "Four Score and Seven";
var puzzle3Rating = "Moderate";
var puzzle3 = [
               [' ',' ',' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',' '],
               [' ',' ','#','#','#',' ',' ','#','#','#','#','#',' ',' ','#','#','#','#','#','#'],
               [' ',' ','#','#',' ',' ','#',' ',' ','#','#','#',' ',' ',' ','#','#','#','#','#'],
               [' ',' ','#','#',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#'],
               [' ','#','#',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#'],
               [' ','#','#',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#'],
               [' ','#','#',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#','#','#'],
               [' ','#','#',' ',' ',' ','#','#','#',' ',' ',' ','#','#','#','#','#','#','#','#'],
               [' ','#','#','#',' ','#','#','#','#','#',' ','#','#','#','#','#','#','#','#','#'],
               [' ','#',' ','#',' ','#',' ','#',' ',' ',' ','#','#',' ','#','#','#','#','#','#'],
               [' ','#',' ','#',' ',' ',' ',' ',' ',' ',' ','#','#',' ',' ','#','#','#','#','#'],
               [' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#',' ',' ',' ','#','#','#','#'],
               [' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ','#','#','#',' '],
               [' ',' ',' ','#','#','#',' ',' ',' ','#','#','#','#',' ',' ','#','#','#','#',' '],
               [' ',' ',' ',' ','#','#',' ','#',' ',' ','#','#','#',' ','#','#','#','#',' ',' '],
               [' ',' ',' ',' ','#',' ','#',' ',' ',' ',' ',' ','#','#','#','#','#','#',' ',' '],
               [' ',' ',' ',' ','#','#','#','#',' ',' ',' ','#','#','#','#','#','#','#',' ',' '],
               [' ',' ','#',' ',' ','#','#','#',' ','#','#','#','#','#','#','#','#',' ',' ',' '],
               [' ','#','#','#',' ','#','#','#','#',' ','#','#','#','#','#','#','#',' ','#',' '],
               ['#','#','#','#',' ','#','#','#','#','#','#','#','#','#','#','#',' ','#','#','#']
              ];


