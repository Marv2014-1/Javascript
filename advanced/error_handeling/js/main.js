// JavaScript Error Handeling

"use strict"; // This causes the code to throw an error if it is not written correctly. Has to be at the top of the file.

//variable = 10; // Uncaught ReferenceError: variable is not defined

// #region Error Handeling

const makeError = () => {
    try {
        name = "John";
    } catch (error) {
        console.error(error);
    }
};

makeError();

//#endregion

//#region custom error

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

const makeCustomError = () => {
    try {
        throw new CustomError("This is a custom error");
    } catch (error) {
        console.error(error);
    }
};

makeCustomError();

//#endregion

//#region Error Object

const makeErrorObject = () => {
    try {
        throw new Error("This is an error object");
    } catch (error) {
        console.error(error);
    }
};

makeErrorObject();

//#endregion
