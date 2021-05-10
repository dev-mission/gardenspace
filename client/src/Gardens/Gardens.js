import {Route, Switch, useRouteMatch} from 'react-router-dom';
import GardensList from "./GardensList"
import GardenForm from "./GardenForm"

const Garden = () => {
    const {path} = useRouteMatch();

    return(
        <Switch>
            <Route exact path={path}>
                <GardensList />
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

export default Garden;
