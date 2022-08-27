"use strict";

const homeRoute = "https://my-hello-world-app.onrender.com";

const updateHeader = async url => {
  const res = await fetch(url);
  const message = await res.json();

  document.querySelector("h1").innerHTML = message.message;
};

document.querySelector(".btn").addEventListener("pointerdown", () => {
  updateHeader(homeRoute + "regular");
});

document.querySelector(".emoji").addEventListener("pointerdown", () => {
  updateHeader(subRoute + "emoji");
});
