const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super( shapeColor, text, textColor);
    }
    render() {
        return `<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
                <circle cx="75" cy="50" r="40" fill="${this.shapeColor}" />
                <text x="75" y="60" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`
            
    }
}
  
module.exports = Circle;