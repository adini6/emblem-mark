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

  const logoData = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <!-- You can also render the text here if needed -->
    </svg>
  `;


  fs.writeFileSync('logo.svg', logoData, 'utf-8');
  console.log('Generated logo.svg');
});
