import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import bc from '../.bc.json';
export default class Layout extends React.Component {
    render() {
        const exercisesHTML = bc.exercises.map(ex => (<li key={ex.slug}><Link to={ex.slug}>{ex.title} s</Link></li>));
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" render={() => (<ul>{exercisesHTML}</ul>)} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
