const Circle = require('../lib/circle.js');

describe('Circle', () => {
    test('Circle test', () => {
        const shape = new Circle("blue", "SVG", "white");
        expect(shape.render()).toEqual(`<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
                <circle cx="75" cy="50" r="40" fill="blue" />
                <text x="75" y="60" font-size="30" text-anchor="middle" fill="white">SVG</text>
                </svg>`);
    })
});