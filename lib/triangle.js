const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super( shapeColor, text, textColor);
    }
    render() {
        return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" />
                <text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`
            
    }
}
  
module.exports = Triangle;