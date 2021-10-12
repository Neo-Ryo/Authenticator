// This file can be deleted as soon as other tests have been written
describe("Test example", () => {
    test("it should pass", () => {
        expect(("b" + "a" + +"a" + "a").toLowerCase()).toEqual("banana");
    });
    test("it should not pass", () => {
        expect(true).not.toEqual(![]);
    });
});
