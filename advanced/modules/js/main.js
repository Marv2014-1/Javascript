// Modules

// #region importing and calling functions
import playGuitar, {shredding as shred, plucking} from "./guitar.js";

console.log(playGuitar());
console.log(shred()); // alias
console.log(plucking());

import * as guitar from "./guitar.js";

/*
 this is confusing because the function is called playGuitar, however the 
 function is refered to as defult instead.
 */

console.log(guitar.default());
console.log(guitar.shredding());
console.log(guitar.plucking());

// #endregion

// #region importing and calling classes

import User from "./user.js";
const user = new User("John", "email@email.com");

console.log(user);
console.log(user.getInfo());

// #endregion
