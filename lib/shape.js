class Shape {
    constructor(shapeColor, text, textColor) {
      this.shapeColor = shapeColor;
      this.text = text;
      this.textColor = textColor;
    }
    render() {
      throw new Error('Extended class must implement a render() method.');
    }
  }
  
  module.exports = Shape;