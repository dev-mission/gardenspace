import {useState} from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PlantsList from './PlantsList';
import PlantForm from './PlantForm';

function Plants(){
    const {path} = useRouteMatch();

    return(
       <Switch>
           <Route exact path={path}>
                <PlantsList />
           </Route>
           <Route path ={`${path}/new`}>
            <PlantForm />
           </Route>
           
           <Route path ={`${path}/:id/edit`}>
            <PlantForm />
           </Route>
       </Switch>

    );
}
export default Plants;