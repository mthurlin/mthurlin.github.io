

var PlayerExpand = function (props) {
    var elements = props.player.scores.map(function (score, i) {

        var className = "player-expand-0p";
        if (score.indexOf("5p") > -1) {
            className = "player-expand-5p";
        } else if (score.indexOf("3p") > -1) {
            className = "player-expand-3p";
        }

        return React.createElement(
            "div",
            { className: className, key: i },
            score
        );
    });
    return React.createElement(
        "div",
        { className: "player-expands" },
        elements
    );
};

class LeaderboardPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { expand: false };
    }

    toggle() {
        this.setState({ expand: !this.state.expand });
    }

    render() {
        var p = this.props.player;

        var expand = this.state.expand ? React.createElement(PlayerExpand, { player: p }) : null;
        return React.createElement(
            "div",
            { onClick: this.toggle.bind(this) },
            React.createElement(
                "div",
                { className: "leaderboard-player" },
                p.score,
                "p - ",
                p.name
            ),
            expand
        );
    }
}

var Leaderboard = () => {
    var p = players.map(function (player) {
        return React.createElement(LeaderboardPlayer, { key: player.name, player: player });
    });

    return React.createElement(
        "div",
        null,
        p
    );
};

var Upcoming = props => {
    var match = props.match;
    var guesses = players.map(p => {
        var guess = p.guesses[match];
        return React.createElement(
            "tr",
            { className: "upcoming-guess", key: p.name },
            React.createElement(
                "td",
                null,
                p.name
            ),
            React.createElement(
                "td",
                null,
                guess
            )
        );
    });
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "upcoming-match" },
            match
        ),
        React.createElement(
            "table",
            null,
            React.createElement(
                "tbody",
                null,
                guesses
            )
        )
    );
};

var App = () => {
    var upcoming = Object.keys(results).map(match => {
        var result = results[match];
        if (result) {
            return null;
        }
        return React.createElement(Upcoming, { key: match, match: match });
    });

    return React.createElement(
        "div",
        null,
        React.createElement(Leaderboard, null),
        React.createElement(
            "h1",
            null,
            "Upcoming"
        ),
        upcoming
    );
};

appRoot = React.createElement(App, null);

