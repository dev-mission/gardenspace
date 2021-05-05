import {Route, Switch, useRouteMatch} from 'react-router-dom';
import GardenList from "./gardenlist"
import GardenForm from "./gardenform"

const Garden = () => {
    const {path} = useRouteMatch();

    return(
        <Switch>
            <Route exact path={path}>
                <GardenForm />
            </Route>

            <Route path={`${path}/new`}>
                <GardenForm />
            </Route>

            <Route path={`${path}/:id/edit`}>
                <GardenForm/>
            </Route>
        </Switch>
    )
}

export default Garden