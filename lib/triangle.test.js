const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
    test('Triangle test', () => {
        const shape = new Triangle("blue", "SVG", "white");
        expect(shape.render()).toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,18 244,182 56,182" fill="blue" />
                <text x="150" y="140" font-size="50" text-anchor="middle" fill="white">SVG</text>
                </svg>`);
    })
});
