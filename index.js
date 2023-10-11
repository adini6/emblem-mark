const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const { Triangle, Circle, Square } = require('./lib/shape.js');

inquirer.prompt(questions).then((answers) => {
  let shape;
  switch (answers.shape) {
    case 'triangle':
      shape = new Triangle(answers.logoColor);
      break;
    case 'square':
      shape = new Square(answers.logoColor);
      break;
    case 'circle':
      shape = new Circle(answers.logoColor);
      break;
  }

  const shapeSVG = shape.render();
  
  const textSVG = `<text x="150" y="120" font-family="Arial" font-size="25" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>`;
  
  const logoData = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      ${textSVG}
    </svg>
`
;



  fs.writeFileSync('logo.svg', logoData, 'utf-8');
  console.log('Generated logo.svg');
});
