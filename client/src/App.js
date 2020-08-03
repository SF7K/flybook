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

import Login from './views/auth/Login';
import Register from './views/auth/Register';

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
    <main className={classes.main}>
    <Router>                                                {/* Elément qui pertmet de créer des routes                                                                                 */}
      <Switch>                                              {/* Change le composant affiché                                                                                             */}
        <Route path="/vols" />           {/* "Si le chemin de la barre d'adresse est '/vols' alors on affiches 'Flights'"                                            */}
        <Route path="/connexion" component={Login}/>                          
        <Route path="/inscription" component={Register}/>                        
        <Route path="/" exact={true} />     {/* "exact" est nécessaire pour différencier le path "/" de "/*"                                                            */}
        <Route path="/*"  />            {/* Tout ce que comprend "/*" et qui n'est pas listé au dessus amènera à notre page introuvable                             */}      
      </Switch>                                             
    </Router>                                               
    </main>
  </Fragment>
);

// EXPORT
export default withStyles(styles)(App);