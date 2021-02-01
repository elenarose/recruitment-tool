import React from 'react';
import Recruiters from "./Recruiters";
import {
    Switch,
    Route
} from "react-router-dom";

function Routes() {
    return (
        <Switch>
            <Route path='/home' name='Home'>
                <Recruiters/>
            </Route>
            <Route path='/recruiters' name='Recruiters'>
                <Recruiters/>
            </Route>
        </Switch>
    )
}
export default Routes;