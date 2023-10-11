const questions = [
    {
      name: "text",
      message: "Enter logo text up to 3 characters:",
      type: "input"
    },
    {
      name: "textColor",
      message: "Choose the color of your text using a color keyword or a hexadecimal number:",
      type: "input"
    },
    {
      name: "shape",
      message: "Choose the shape of your logo:",
      type: "list",
      choices: ["triangle", "circle", "square"]
    },
    {
      name: "logoColor",
      message: "Choose the logo color using a color keyword or a hexadecimal number:",
      type: "input"
    }
  ];
  
  module.exports = questions;
