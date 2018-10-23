import React from 'react';
import SinglePlayer from './SinglePlayer';
const tom_and_jerry = [
    {
        name: 'Tom',
        score: 55
    },
    {
        name: 'Jerry',
        score: 90
    }
];

export default class ScoreBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: tom_and_jerry
        };
    }
    changeScore(amount) {
        if ( typeof(amount) != "number" ) {
            return;
        }

        let players = this.state.players;
        let tom = players[0];
        tom.score = tom.score + amount;

        tom.score = (tom.score > 100) ? 100 : tom.score;
        tom.score = (tom.score < 0) ? 0 : tom.score;

        players[0] = tom;
        this.setState({ players: players });
    }
    render() {
        return (
            <div>
                <h4>Score Board</h4>
                <div>
                    <button onClick={ (amount) => this.changeScore(5) }>Score of Tom: +5</button>
                    <button onClick={ (amount) => this.changeScore(-5) }>Score of Tom: -5</button>
                </div>
                {
                    this.state.players.map((v, idx) => {
                        return <SinglePlayer key={idx} name={v.name} score={v.score} />
                    })
                }
            </div>
        );
    }
}
