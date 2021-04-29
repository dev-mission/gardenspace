import { Route, Switch, useRouteMatch } from "react-router-dom";
import PlantList from './PlantList';
import PlantForm from './PlantForm';

function Plant(){
    const {path} = useRouteMatch();

    return(
       <Switch>
           <Route exact path={path}>
                <PlantList />
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
export default Plant;