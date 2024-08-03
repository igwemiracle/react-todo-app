import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
// '@babel/plugin-proposal-private-property-in-object'