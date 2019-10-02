const button = document.querySelector("button");
const joke = document.querySelector("p");
const image = document.querySelector("img");

var handleClick = function(event) {
  event.preventDefault();

  var options = {
    url:
      "https://cors-anywhere.herokuapp.com/https://api.chucknorris.io/jokes/random"
  };

  var options2 = {
    url:
      "https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/random?tag=chucknorris&api_key=Tg9V3TkAY9BFePnwVwuRzQRa5bBgsejc"
  };

  $.ajax(options2).done(function(resp) {
    var results = resp.data;

    image.src = `${results.images.original.url}`;
  });

  $.ajax(options).done(function(resp) {
    joke.textContent = resp.value;
  });
};

button.addEventListener("click", handleClick);
