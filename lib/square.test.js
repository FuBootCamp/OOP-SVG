const Square = require('../lib/square.js');

describe('Square', () => {
    test('Square test', () => {
        const shape = new Square("blue", "SVG", "white");
        expect(shape.render()).toEqual(`<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
                <rect width="75" height="75" x="37.5" y="15" fill="blue" />
                <text x="75" y="60" font-size="30" text-anchor="middle" fill="white">SVG</text>
                </svg>`);
    })
});