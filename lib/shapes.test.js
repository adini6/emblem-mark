const { Triangle, Circle, Square } = require('./shape.js');

describe('Triangle Class', () => {
    test('should set color and render SVG for triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Square Class', () => {
    test('should set color and render SVG for square', () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="red" />');
    });
});

describe('Circle Class', () => {
    test('should set color and render SVG for circle', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="red" />');
    });
});
