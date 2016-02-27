/*****************************************************************************
## WriteIt - a simple utility to create blocky letters in Minecraft

### How to use
This plugin takes a string of text and builds it in large blocky letters.

Usage:
  /js writeit('Your string of text here')

### Description
The letters are build in a 7x5 grid.

As an example, consider the letter 'A'. It can be represented by 0's and 1's in a 5x7 grid as:

0 1 1 1 0
1 0 0 0 1
1 0 0 0 1
1 1 1 1 1
1 0 0 0 1
1 0 0 0 1

where

0: block of air (empty space)
1: block of oak

For easier input and maintence, this is represented as a single string in the function 'letters()', as:

0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1

If a letter is not recoqnized the function will draw a box with a cross in it.

### Installation

This utility is a ScriptCraft mod/plugin. You will need to have a Minecraft
server that runs the ScriptCraft mod.

### ScriptCraft

More info here:
https://github.com/walterhiggins/ScriptCraft/blob/master/docs/YoungPersonsGuideToProgrammingMinecraft.md

Or, better yet, buy the book here:
http://www.amazon.co.uk/Beginners-Writing-Minecraft-Plugins-JavaScript/

### Contact

Feel free to reach out on Twitter:
https://twitter.com/ChristianRiis

*/

function writeit(stringToDraw) {
  if (typeof stringToDraw == 'undefined') {
    stringToDraw = 'Hello world!';
  }
  console.log('writeit, stringToDraw: ' + stringToDraw);
  var letterArray = stringToDraw.split('');
  // console.log('letterArray.length: ' + letterArray.length);
  var d = new Drone(self);
  var currentChar = '';
  d.up(7); //characters are 7 blocks high.
  for (k = 0; k < letterArray.length; k++) {
    currentChar = String(letterArray[k]);
    // console.log('drawLetter: ' + currentChar);
    if (currentChar == ' ') {
      d.right(3);
      // console.log('space detected');
    }
    else {
      drawLetter(d, currentChar);
      charSpace(d);
    }
  }
}
Drone.extend ( writeit );

// space between the characters
function charSpace(objDrone) {
  objDrone.right(6);
  objDrone.up(7);
}

function drawLetter(objDrone, letterToDraw) {
  if (typeof letterToDraw == 'undefined') {
    letterToDraw = 'UNK';
  }

  currentLetter = letters(letterToDraw);
  var pen = currentLetter.split(',');
  var pos = 0;

  // each horisontal line in the letter
  for (i = 0; i < 7; i++) {
    // each block in the horizontal line
    for (j = 0; j < 5; j++) {
      if (pen[pos] == '0') {
        objDrone.box(blocks.air,1,1,1);
      }
      else {
        objDrone.box(blocks.oak,1,1,1);
      }
      var pos = pos + 1;
      objDrone.right(1);
    }
    // move drone to next new line
    objDrone.down(1);
    objDrone.left(5);
  }
return;
}

function letters(letter) {
  // console.log('letter: ' + letter);
  switch(letter) {
    case 'A':
    case 'a':
      letterString = '0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1';
      break;
    case 'B':
    case 'b':
      letterString = '1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0';
      break;
    case 'C':
    case 'c':
      letterString = '0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0';
      break;
    case 'D':
    case 'd':
      letterString = '1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0';
      break;
    case 'E':
    case 'e':
      letterString = '1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1';
      break;
    case 'F':
    case 'f':
      letterString = '1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0';
      break;
    case 'G':
    case 'g':
      letterString = '0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1';
      break;
    case 'H':
    case 'h':
      letterString = '1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1';
      break;
    case 'I':
    case 'i':
      letterString = '0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0';
      break;
    case 'J':
    case 'j':
      letterString = '0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0';
      break;
    case 'K':
    case 'k':
      letterString = '1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1';
      break;
    case 'L':
    case 'l':
      letterString = '1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1';
      break;
    case 'M':
    case 'm':
      letterString = '1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1';
      break;
    case 'N':
    case 'n':
      letterString = '1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1';
      break;
    case 'O':
    case 'o':
      letterString = '0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0';
      break;
    case 'P':
    case 'p':
      letterString = '1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0';
      break;
    case 'Q':
    case 'q':
      letterString = '0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1';
      break;
    case 'R':
    case 'r':
      letterString = '1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1';
      break;
    case 'S':
    case 's':
      letterString = '0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0';
      break;
    case 'T':
    case 't':
      letterString = '1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0';
      break;
    case 'U':
    case 'u':
      letterString = '1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0';
      break;
    case 'V':
    case 'v':
      letterString = '1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0';
      break;
    case 'W':
    case 'w':
      letterString = '1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0';
      break;
    case 'X':
    case 'x':
      letterString = '1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1';
      break;
    case 'Y':
    case 'y':
      letterString = '1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0';
      break;
    case 'Z':
    case 'z':
      letterString = '1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1';
      break;
    // special characters
    case '@':
      letterString = '0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0';
    break;
    case '!':
      letterString = '0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0';
    break;
    default:
      // Strange box
      letterString = '1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,';
  }

  return letterString;
}
