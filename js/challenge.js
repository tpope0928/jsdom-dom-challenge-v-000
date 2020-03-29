document.addEventListener("DOMContentLoaded", () => {
  let startInterval = setInterval(incrementPerSecond, 1000);
  let counter = document.getElementById("counter");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let heart = document.getElementById("heart");
  let pause = document.getElementById("pause");
  let submit = document.getElementById("submit");
  let likes = document.getElementsByClassName("likes")[0];
  let comments = document.getElementById("list");
  let form = document.getElementById("comment-form");
  let input = document.getElementById("comment-input");

  minus.addEventListener("click", decrement);
  plus.addEventListener("click", increment);
  pause.addEventListener("click", pauseButtonClicked);
  heart.addEventListener("click", likeButtonClicked);

  form.addEventListener("submit", function(event) {
    let comment = document.createElement("p");
    comment.innerText = input.value;

    event.preventDefault();
    comments.appendChild(comment);
  });
