## writeIt - a simple utility to create blocky letters in Minecraft
A ScriptCraft plugin that  takes a string of text and builds it in large blocky letters.

### How to use
This plugin takes a string of text and builds it in large blocky letters.

Usage:
  /js writeit('Your string of text here')

### Description
The letters are build in a 7x5 grid.

As an example, consider the letter 'A'. It can be represented by 0's and 1's in a 5x7 grid as:

0 1 1 1 0<br>
1 0 0 0 1<br>
1 0 0 0 1<br>
1 1 1 1 1<br>
1 0 0 0 1<br>
1 0 0 0 1<br>

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

