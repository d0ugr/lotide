const assertEqual = require("../assertEqual");

console.log("\nassertEqual\n");

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("test", "test");
assertEqual("Test", "test");
assertEqual(420, 420);
assertEqual(420, 666);
assertEqual(420.0, 420);
assertEqual(420.0, 420.0);
