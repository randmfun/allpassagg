describe("Calculator", function () {

    var calc;
    beforeEach(function () {
        calc = new Calculator();


    });

    it("testing addition", function () {
        var val = calc.add(1, 2);
        expect(calc.add(1, 1)).toBe(2);
    });

    it("testing divide by 2", function () {
        expect(calc.divide(4, 2)).toBe(2);
    });

    xit("testing divide 1 by 2", function () {
        expect(calc.divide(1, 3)).toBeBetween(0.3, 0.4);
    });


});