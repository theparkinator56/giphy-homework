var videoGames = ["Half-Life", "Fallout", "xcom", "skyrim"]
var gif;
var limit;

function renderButtons() {
  $("#buttons").empty()
for (game in videoGames) {

  let a = $("<button>");

  a.addClass("videoGames");

  a.attr("data-name", videoGames[game]);

  a.text(videoGames[game]);

  $("#buttons").append(a);



}
}

$("#add-button").on("click", function(event) {

  event.preventDefault();
  var gameadd = $("#search-input").val().trim();

  videoGames.push(gameadd);

  renderButtons();

});
renderButtons();




$(".videoGames").on("click", function() {
  gif = $(this).attr("data-name")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }) .then(function(response) {
      console.log(queryURL);
      console.log(response);

      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        var gameDiv = $("<div>");

        var p = $("<p>").text("Rating: " + results[i].rating);

        var gamesGifs = $("<img>");

        gamesGifs.attr("src", results[i].images.fixed_height.url);

        gameDiv.append(p);
        gameDiv.append(gamesGifs);

        $("#gifs-appear-here").prepend(gameDiv);
      }
    
  });
});




