import { Route, Switch, useRouteMatch } from "react-router-dom";

import AttendeeList from "./AttendeeList";
import AttendeeForm from './AttendeeForm';

const Attendee = () => {
    const {path} = useRouteMatch();

    return (
        <Switch>
            {/*
                Main URL Path to AttendeeList file
            */}
            <Route exact path={path}>
                <AttendeeList />
            </Route>
            {/*
                Main URL Path to new AttendeeList file
            */}
            <Route path={`${path}/new`}>
                <AttendeeForm />
            </Route>
            <Route path={`${path}/:id/edit`}>
                <AttendeeForm />
            </Route>
        </Switch>
    )
}

export default Attendee;