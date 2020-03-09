const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {

  it("middle([]), []", () => {
    assert(middle([]), []);
  });
  it("middle([1]), []", () => {
    assert(middle([1]), []);
  });
  it("middle([1, 2]), []", () => {
    assert(middle([1, 2]), []);
  });
  it("middle([1, 2, 3]), [2]", () => {
    assert(middle([1, 2, 3]), [2]);
  });
  it("middle([1, 2, 3, 4]), [2, 3]", () => {
    assert(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("middle([1, 2, 3, 4, 5]), [3]", () => {
    assert(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("middle([1, 2, 3, 4, 5, 6]), [3, 4]", () => {
    assert(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("middle([\"test\"]), []", () => {
    assert(middle(["test"]), []);
  });
  it("middle([\"test\", \"blah\"]), []", () => {
    assert(middle(["test", "blah"]), []);
  });
  it("middle([\"test\", \"blah\", \"blarg\"]), [\"blah\"]", () => {
    assert(middle(["test", "blah", "blarg"]), ["blah"]);
  });
  it("middle([\"test\", \"blah\", \"blarg\", \"everything is fine\"]), [\"blah\", \"blarg\"]", () => {
    assert(middle(["test", "blah", "blarg", "everything is fine"]), ["blah", "blarg"]);
  });
  it("middle([\"test\", \"blah\", \"blarg\", \"everything\", \"is\", \"fine\"]), [\"blarg\", \"everything\"]", () => {
    assert(middle(["test", "blah", "blarg", "everything", "is", "fine"]), ["blarg", "everything"]);
  });

});
