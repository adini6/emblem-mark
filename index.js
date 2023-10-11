const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const { Triangle, Circle, Square } = require('./lib/shape.js');

inquirer.prompt(questions).then((answers) => {
  let shape;
  switch (answers.shape) {
    case 'triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'square':
      shape = new Square(answers.shapeColor);
      break;
    case 'circle':
      shape = new Circle(answers.shapeColor);
      break;
  }


  fs.writeFileSync('logo.svg', svgContent, 'utf-8');
  console.log('Generated logo.svg');
});
