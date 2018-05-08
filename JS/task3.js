"use strict"

function cycle() {
  let i = 0, j = 0, max = 8; space = "", hash = "";
  while (i < max) {
    space = "";
    hash = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) hash += "#";
    console.log(space + hash);
    i++;
  }
}
console.log( cycle() );
/*
       #
      ###
     #####
    #######
   #########
  ###########
 #############
###############
*/

function cycle() {
  let i = 0, j = 0, max = 8; space = "", hash = "";
  while (i < max) {
    space = "";
    hash = "";
    for (j = 0; j < -i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) hash += "#";
    console.log(space + hash);
    i++;
  }
}
console.log( cycle() );
/*
#
###
#####
#######
#########
###########
#############
###############
*/

function cycle() {
  let i = 0, j = 0, max = 8; space = "", hash = "";
  while (i < max) {
    space = "";
    hash = "";
    for (j = 0; j < -i; j++) space += " ";
    for (j = 0; j < i + 1; j++) hash += "#";
    console.log(space + hash);
    i++;
  }
}
console.log( cycle() );
/*
#
##
###
####
#####
######
#######
########
*/

for (let line = "#"; line.length < 9; line += "#")
  console.log(line);
  /*
#
##
###
####
#####
######
#######
########
*/