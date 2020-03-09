const assert    = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {

  const ab  = { a: "1", b: "2" };
  const ba  = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd  = { c: "1", d: ["2", 3] };
  const dc  = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it("{ a: \"1\", b: \"2\" } === { b: \"2\", a: \"1\" }", () => {
    assert.isTrue(eqObjects(ab, ba));
  });
  it("{ a: \"1\", b: \"2\" } === { a: \"1\", b: \"2\", c: \"3\" }", () => {
    assert.isFalse(eqObjects(ab, abc));
  });
  it("{ c: \"1\", d: [\"2\", 3] } === { d: [\"2\", 3], c: \"1\" }", () => {
    assert.isTrue(eqObjects(cd, dc));
  });
  it("{ c: \"1\", d: [\"2\", 3] } === { c: \"1\", d: [\"2\", 3, 4] }", () => {
    assert.isFalse(eqObjects(cd, cd2));
  });

  it("{} === {}", () => {
    assert.isTrue(eqObjects({}, {}));
  });
  it("{ a: 1, b: [] }, { a: 1, b: [] }", () => {
    assert.isTrue(eqObjects({ a: 1, b: [] }, { a: 1, b: [] }));
  });
  it("{ a: [], b: [] }, { a: 1, b: [] }", () => {
    assert.isFalse(eqObjects({ a: [], b: [] }, { a: 1, b: [] }));
  });
  it("{ a: 1, b: [] }, { a: [], b: [] }", () => {
    assert.isFalse(eqObjects({ a: 1, b: [] }, { a: [], b: [] }));
  });
  it("{ a: [1], b: [] }, { a: 1, b: [] }", () => {
    assert.isFalse(eqObjects({ a: [1], b: [] }, { a: 1, b: [] }));
  });
  it("{ a: [], b: [] }, { a: 1, b: [1] }", () => {
    assert.isFalse(eqObjects({ a: [], b: [] }, { a: 1, b: [1] }));
  });

  it("{ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it("{ a: { z: 1 }, b: { y: 2 }, c: { x: 3 } }, { a: { z: 1 }, b: { y: 2 }, c: { x: 3 } }", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: { y: 2 }, c: { x: 3 } }, { a: { z: 1 }, b: { y: 2 }, c: { x: 3 } }));
  });
  it("{ a: { z: 1, y: { x: 3 } }, b: 2 }, { a: { z: 1, y: { x: 3 } }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1, y: { x: 3 } }, b: 2 }, { a: { z: 1, y: { x: 3 } }, b: 2 }));
  });
  it("{ a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2 }, { a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2 }, { a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2 }));
  });
  it("{ a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2, c: { u: 5 } }, { a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2, c: { u: 5 } }", () => {
    assert.isTrue(eqObjects({ a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2, c: { u: 5 } }, { a: { z: 1, y: { x: 3, w: { v: 4 } } }, b: 2, c: { u: 5 } }));
  });

  it("{ a: { z: [] }, b: 2 }, { a: { z: [] }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: [] }, b: 2 }, { a: { z: [] }, b: 2 }));
  });
  it("{ a: { z: 1 }, b: { y: [] }, c: { x: 3 } }, { a: { z: 1 }, b: { y: [] }, c: { x: 3 } }", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: { y: [] }, c: { x: 3 } }, { a: { z: 1 }, b: { y: [] }, c: { x: 3 } }));
  });
  it("{ a: { z: 1, y: { x: [] } }, b: 2 }, { a: { z: 1, y: { x: [] } }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1, y: { x: [] } }, b: 2 }, { a: { z: 1, y: { x: [] } }, b: 2 }));
  });
  it("{ a: { z: [], y: { x: 3, w: { v: 4 } } }, b: [] }, { a: { z: [], y: { x: 3, w: { v: 4 } } }, b: [] }", () => {
    assert.isTrue(eqObjects({ a: { z: [], y: { x: 3, w: { v: 4 } } }, b: [] }, { a: { z: [], y: { x: 3, w: { v: 4 } } }, b: [] }));
  });
  it("{ a: { z: 1, y: { x: 3, w: { v: [] } } }, b: 2, c: { u: [] } }, { a: { z: 1, y: { x: 3, w: { v: [] } } }, b: 2, c: { u: [] } }", () => {
    assert.isTrue(eqObjects({ a: { z: 1, y: { x: 3, w: { v: [] } } }, b: 2, c: { u: [] } }, { a: { z: 1, y: { x: 3, w: { v: [] } } }, b: 2, c: { u: [] } }));
  });
  it("{ a: { z: 1, y: [{ x: 3, w: { v: [] } }] }, b: 2, c: { u: [] } }, { a: { z: 1, y: [{ x: 3, w: { v: [] } }] }, b: 2, c: { u: [] } }", () => {
    assert.isFalse(eqObjects({ a: { z: 1, y: [{ x: 3, w: { v: [] } }] }, b: 2, c: { u: [] } }, { a: { z: 1, y: [{ x: 3, w: { v: [] } }] }, b: 2, c: { u: [] } }));
  });
  it("{ a: { z: 1, y: [[[[{ x: 3, w: { v: [] } }]]]] }, b: 2, c: { u: [] } }, { a: { z: 1, y: [[[[{ x: 3, w: { v: [] } }]]]] }, b: 2, c: { u: [] } }", () => {
    assert.isFalse(eqObjects({ a: { z: 1, y: [[[[{ x: 3, w: { v: [] } }]]]] }, b: 2, c: { u: [] } }, { a: { z: 1, y: [[[[{ x: 3, w: { v: [] } }]]]] }, b: 2, c: { u: [] } }));
  });
  it("{ a: { z: 1, y: [[[[{ x: 3, w: { v: [1, 2, 3] } }]]]] }, b: 2, c: { u: [4, 5, 6] } }, { a: { z: 1, y: [[[[{ x: 3, w: { v: [1, 2, 3] } }]]]] }, b: 2, c: { u: [4, 5, 6] } }", () => {
    assert.isFalse(eqObjects({ a: { z: 1, y: [[[[{ x: 3, w: { v: [1, 2, 3] } }]]]] }, b: 2, c: { u: [4, 5, 6] } }, { a: { z: 1, y: [[[[{ x: 3, w: { v: [1, 2, 3] } }]]]] }, b: 2, c: { u: [4, 5, 6] } }));
  });
  it("{ a: { z: 1, y: [[[[{ x: 3, w: { v: [\"1\", \"2\", \"3\"] } }]]]] }, b: 2, c: { u: [4, \"5\", 6] } }, { a: { z: 1, y: [[[[{ x: 3, w: { v: [\"1\", \"2\", \"3\"] } }]]]] }, b: 2, c: { u: [4, \"5\", 6] } }", () => {
    assert.isFalse(eqObjects({ a: { z: 1, y: [[[[{ x: 3, w: { v: ["1", "2", "3"] } }]]]] }, b: 2, c: { u: [4, "5", 6] } }, { a: { z: 1, y: [[[[{ x: 3, w: { v: ["1", "2", "3"] } }]]]] }, b: 2, c: { u: [4, "5", 6] } }));
  });

  it("{ a: { y: 0, z: 1 }, b: 2 }, {}", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, {}));
  });
  it("{ a: { y: 0, z: 1 }, b: 2 }, { a: {} }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: {} }));
  });
  it("{ a: { y: 0, z: 1 }, b: 2 }, { a: { b: {} } }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { b: {} } }));
  });
  it("{ a: { y: 0, z: 1 }, b: 2 }, { a: { b: {}, c: {}, d: {} } }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { b: {}, c: {}, d: {} } }));
  });
  it("{ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it("{ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });

});
