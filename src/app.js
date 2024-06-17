/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let Who = ["The dog", "My grandma", "The mailman", "My bird"];
  let Action = ["ate", "peed", "crushed", "broke"];
  let What = ["my homework", "my phone", "the car"];
  let When = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let WhoIndex = Math.floor(Math.random() * Who.length);
  let ActionIndex = Math.floor(Math.random() * Action.length);
  let WhatIndex = Math.floor(Math.random() * What.length);
  let WhenIndex = Math.floor(Math.random() * When.length);

  return (
    Who[WhoIndex] +
    " " +
    Action[ActionIndex] +
    " " +
    What[WhatIndex] +
    " " +
    When[WhenIndex]
  );
};
