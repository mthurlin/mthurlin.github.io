


var PlayerExpand = function (props) {
    var elements = props.player.scores.map(function (score, i) {

        var className = "player-expand-0p";
        if (score.indexOf("5p") > -1) {
            className = "player-expand-5p";
        } else if (score.indexOf("3p") > -1) {
            className = "player-expand-3p";
        }

        var pos = score.indexOf("(guessed");

        var match = score.substr(0, pos - 1);
        var guess = score.substr(pos);


        return <div className={className} key={i}>{match}<br/>{guess}</div>
    });
    return <div className="player-expands">{elements}</div>;
};


class LeaderboardPlayer extends React.Component {

    constructor (props) {
        super(props);
        this.state = {expand: false};
    }

    toggle () {
        this.setState({expand: !this.state.expand});
    }

    render () {
        var p = this.props.player;

        var expand = this.state.expand ? <PlayerExpand player={p} /> : null;
        return <div onClick={this.toggle.bind(this)}>
            <div className="leaderboard-player">{p.score}p - {p.name}</div>
            {expand}
        </div>;

    }
}

var Leaderboard = () => {
    var p = players.map(function (player) {
       return <LeaderboardPlayer key={player.name} player={player} />;
    });

    return (
        <div>
            {p}
        </div>
    )
};


var Upcoming = (props) => {
    var match = props.match;
    var guesses = players.map((p) => {
        var guess = p.guesses[match];
        return <tr className="upcoming-guess" key={p.name}><td>{p.name}</td><td>{guess}</td></tr>;
    });
    return <div><div className="upcoming-match">{match}</div><table><tbody>{guesses}</tbody></table></div>
};

var App = () => {
    var upcoming = Object.keys(results).map((match) => {
        var result = results[match];
        if (result) {
            return null;
        }
        return <Upcoming key={match} match={match} />;
    });

    return (
        <div>
            <Leaderboard />
            <h1>Upcoming</h1>
            {upcoming}
        </div>
    );
};

window.appRoot = <App />;