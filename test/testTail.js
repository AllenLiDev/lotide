const assertEqual = require('../assertEqual');
const tail = require('../test');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements!
