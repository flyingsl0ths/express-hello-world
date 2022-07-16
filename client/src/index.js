"use strict";

const homeRoute = "http://localhost:8080/";
const subRoute = `${homeRoute}emoji`;

const updateHeader = async url => {
  const res = await fetch(url);
  const message = await res.json();

  document.querySelector("h1").innerHTML = message.message;
};

document.querySelector(".btn").addEventListener("pointerdown", () => {
  updateHeader(homeRoute);
});

document.querySelector(".emoji").addEventListener("pointerdown", () => {
  updateHeader(subRoute);
});
