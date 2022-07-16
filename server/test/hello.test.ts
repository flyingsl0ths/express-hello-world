import assert from "assert";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type _ from "mocha";

import { hello } from "../hello/hello.js";

describe("Hello", function () {
  describe("sayHello", function () {
    it("should return a string when given a name", function () {
      assert.ok(/Hello Sloths/.test(hello.sayHello("Sloths")));
    });

    it("should return a specific string when given an empty string", function () {
      assert.strictEqual(hello.sayHello(""), "Um..what's your name?");
    });
  });

  describe("emojifiedSayHello", function () {
    it("should return a string when given a name", function () {
      const regexp = /&#[0-9]+ Hello! [a-zA-Z]+ &#[0-9]+/i;
      assert.ok(regexp.test(hello.emojifiedSayHello("Sloths")));
    });

    it("should return a specific string when given an empty string", function () {
      const regexp = /\?\?\?/i;

      assert.ok(regexp.test(hello.emojifiedSayHello("")));
    });
  });
});
