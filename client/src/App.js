import React, { Fragment } from 'react';
import {
  CssBaseline, // composant qui applique quelques "éléments" CSS par défaut
  withStyles, // composant qui permet d'utiliser l'outil 'JSS'* dans le projet grâce à Material-ui
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import NotFound from './views/NotFound';
import Home from './views/Home';
import Flights from './views/Flights';

// STYLE
const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

// COMPOSANT
const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppNavbar />
    <main className={classes.main}>
    <Router>                                                {/* Elément qui pertmet de créer des routes                                                                                 */}
      <Switch>                                              {/* Change le composant affiché                                                                                             */}
        <Route path="/vols" component={Flights}/>           {/* "Si le chemin de la barre d'adresse est '/vols' alors on affiches 'Flights'"                                            */}
        <Route path="/connexion"/>                          
        <Route path="/inscription"/>                        
        <Route path="/" exact={true} component={Home}/>     {/* "exact" est nécessaire pour différencier le path "/" de "/*"                                                            */}
        <Route path="/*" component={NotFound} />            {/* Tout ce que comprend "/*" et qui n'est pas listé au dessus amènera à notre page 404                                     */}      
      </Switch>                                             {/* Tout ça est dû au fait que le code soit lu de manière verticale, ex: si mon path="/" est premier de la liste            */}
    </Router>                                               {/*    et ne contient pas l'attribut "exact={true}" alors tous les paths comprendront "/" et seront donc valides pour "Home"*/}
    </main>
  </Fragment>
);

// EXPORT
export default withStyles(styles)(App);