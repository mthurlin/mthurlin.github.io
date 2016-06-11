


function getScore(input) {
    var match = /(\d+)\s*\-\s*(\d+)/.exec(input);
    if (!match) {
        console.error("Failed to parse score: ", input);
        return null;
    }
    return [parseInt(match[1], 10), parseInt(match[2], 10)];
}

Object.keys(results).forEach(function (game) {

    var result = results[game];
    console.log("Result", result, "for", game);
    if (!result) {
        return;
    }

    var actualScore = getScore(result);

    players.forEach(function (player) {
        var guess = player.guesses[game];
        if (!guess) {
            console.error("No guess for " + player.name + " in game " + game, player);
            return;
        }

        var guessedScore = getScore(guess);
        var points = 0;
        if (actualScore[0] === guessedScore[0] && actualScore[1] === guessedScore[1]) {
            points = 5;
        } else if (actualScore[0] === actualScore[1] && guessedScore[0] === guessedScore[1]) {
            points = 3;
        } else if (actualScore[0] > actualScore[1] && guessedScore[0] > guessedScore[1]) {
            points = 3;
        } else if (actualScore[0] < actualScore[1] && guessedScore[0] < guessedScore[1]) {
            points = 3;
        }

        player.score += points;
        player.scores.push(game + ": " + points + "p (guessed " + guess + ", actual " + result + ")");

    });

});


players.sort(function (a, b) {
    return b.score - a.score;
});


ReactDOM.render(window.appRoot, document.getElementById("root"));



