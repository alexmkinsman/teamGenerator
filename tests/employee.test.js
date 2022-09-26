const { exportAllDeclaration } = require("@babel/types");
const { default: test } = require("node:test");
const Employee = require("../lib/Employee");

test("Can create Employee", () => {
    const e = new Employee("test", 1, "email");
    expect(e.name).toBe("test");
    expect(e.id).toBe(1);
    expect(e.email).toBe("email");
})