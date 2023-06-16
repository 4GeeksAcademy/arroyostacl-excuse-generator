/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excuse = document.getElementById("excuse");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];


  const getPhrase = (who, action, what, when) => {
    const all = [who, action, what, when];
    let newPhrase = "";
    all.forEach(item => {
      newPhrase += item[Math.floor(Math.random() * item.length)] + " ";
    });

    return newPhrase;
  };

  excuse.innerText = getPhrase(who, action, what, when);
};
