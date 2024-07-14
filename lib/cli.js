const inquirer = require('inquirer');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

const { join } = require('path');
const { writeFile } = require('fs/promises');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text (3 letters)',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter color for text',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color for shape',
  },
];

class CLI {
  constructor() {
    this.shape = '';
   }
  run() { 
    return inquirer.prompt(questions)      
      .then(( answers ) => {
        console.log(`Creating a ${answers.shape}.svg file`);
        switch (answers.shape) {
          case 'circle':
            var shapeCode = new Circle(answers.shapeColor, answers.text, answers.textColor).render();
            break;
          case 'triangle':
            var shapeCode = new Triangle(answers.shapeColor, answers.text, answers.textColor).render();
            break;
          case 'square':
            var shapeCode = new Square(answers.shapeColor, answers.text, answers.textColor).render();
        }
        // const theCircletxt = new Circle(answers.shapeColor, answers.text, answers.textColor).render();
        // console.log(__dirname);
        return writeFile(
               join(__dirname, '..', 'examples', `logo.svg`),
               shapeCode
        );
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;
 
  

