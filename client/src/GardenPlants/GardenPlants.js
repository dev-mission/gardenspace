import {useState} from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import GardenPlantsList from './GardenPlantsList';
import GardenPlantForm from './GardenPlantForm';

function GardenPlants(){
    const {path} = useRouteMatch();

    return(
       <Switch>
           <Route exact path={path}>
                <GardenPlantsList />
           </Route>
           <Route path ={`${path}/new`}>
            <GardenPlantForm />
           </Route>
           
           <Route path ={`${path}/:id/edit`}>
            <GardenPlantForm />
           </Route>
       </Switch>
    );
}
export default GardenPlants;