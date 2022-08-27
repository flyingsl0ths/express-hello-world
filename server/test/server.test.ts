import request from "supertest";
import assert from "assert";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type _ from "mocha";

import express from "express";
import { withExpressApp } from "../setup.js";

const app = withExpressApp(express());

describe("Endpoints", function () {
  it('GET /regular should return a personalized "Hello World!" message', function (done) {
    request(app)
      .get("/regular")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(
        200,
        {
          message: "Hello World!"
        },
        done
      );
  });

  it('GET /emoji should return a personalized "emjofied" "Hello World!" message', function (done) {
    request(app)
      .get("/emoji")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200)
      .then(res => {
        assert.ok(res.body);
        assert.ok(res.body.message);
        assert.ok(/&#[0-9]+ Hello! World! &#[0-9]+/.test(res.body.message));
        done();
      })
      .catch(err => done(err));
  });
});
