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
    const url = "https://geek-jokes.sameerkumar.website/api";
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
    const url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            results += '<img src="file-light-bulb-yellow-icon-svg-2.png"><br>';
            results += json[0].content;
            document.getElementById("buttonResults").innerHTML = results;
        });
});
