document.getElementById("adviceSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            results += '<img src="fortune-cookie.png "> <br>';
            results += "<p>" + json.slip.advice + "</p>";
            document.getElementById("buttonResults").innerHTML = results;
        });
});

document.getElementById("jokeSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const url = "https://icanhazdadjoke.com/";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            results += '<img src="joke.png"> <br>';
            results += "<br><p>" + json + "</p>";
            document.getElementById("buttonResults").innerHTML = results;
        });
});

document.getElementById("quoteSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            results += '<img src="kisspng-ron-swanson-parks-and-recreation-pawnee-character-5af4d498a1c421.5158804515259946486626.png"><br>';
            results += "<br><p>" + json[0] + "</p>";
            document.getElementById("buttonResults").innerHTML = results;
        });
});
