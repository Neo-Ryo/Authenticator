// This file can be deleted as soon as other tests have been written
describe("Test example", () => {
    test("it should be equal", () => {
        expect(("b" + "a" + +"a" + "a").toLowerCase()).toEqual("banana");
    });
    test("it should not be equal", () => {
        expect(true).not.toEqual(![]);
    });
});
