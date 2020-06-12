import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
// Components
import Layout from './Layout';
import BadgeEdit from './BadeEdit';


function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact  path="/badges/new" component={BadgeNew}/>
                    {/* <Route exact  path="/badges/edit/:badgeId" component={BadgeEdit}/> */}
                    <Route component={NotFound} />
                </Switch> 
            </Layout>
        </BrowserRouter>
    );
}

export default App;