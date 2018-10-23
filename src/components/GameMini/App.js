import React from 'react';
import ScoreBoard from './ScoreBoard';
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Component Lifecycle Demo</h1>
                <ScoreBoard />
            </div>
        )
    }
}

export default App