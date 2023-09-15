/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

//Use the inquirer npm package to get user input.
import inquirer from 'inquirer';
//Use the qr-image npm package to turn the user entered URL into a QR code image.
import qr from "qr-image";
//import fs 
import fs from 'fs'; 


inquirer
     .prompt([
    /* Pass your questions in here */
      {
        message: "Type in your URL: ",
        name: "URL",
      },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    
    const url = answers.URL; //(inquirer package) SAVE the url in the variable url which is a constant 
    var qr_svg = qr.image(url);// qr-image package 
    qr_svg.pipe(fs.createWriteStream('QR-img.png'));// qr-image package 

    //Create a txt file to save the user input using the native fs node module.
    //use file system method from node.js of fs.WriteFile to create our new txt file
    fs.writeFile("URL.txt", url , (err) => {
        if (err) throw err;
        console.log("The file has been saved!");

  });
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });