"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerExpand = function PlayerExpand(props) {
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

var LeaderboardPlayer = function (_React$Component) {
    _inherits(LeaderboardPlayer, _React$Component);

    function LeaderboardPlayer(props) {
        _classCallCheck(this, LeaderboardPlayer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LeaderboardPlayer).call(this, props));

        _this.state = { expand: false };
        return _this;
    }

    _createClass(LeaderboardPlayer, [{
        key: "toggle",
        value: function toggle() {
            this.setState({ expand: !this.state.expand });
        }
    }, {
        key: "render",
        value: function render() {
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
    }]);

    return LeaderboardPlayer;
}(React.Component);

var Leaderboard = function Leaderboard() {
    var p = players.map(function (player) {
        return React.createElement(LeaderboardPlayer, { key: player.name, player: player });
    });

    return React.createElement(
        "div",
        null,
        p
    );
};

var Upcoming = function Upcoming(props) {
    var match = props.match;
    var guesses = players.map(function (p) {
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

var App = function App() {
    var upcoming = Object.keys(results).map(function (match) {
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

