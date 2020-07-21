import React, {Fragment} from 'react';
import { 
        withStyles,
        Box,
        Typography,
    } from '@material-ui/core';

    
// STYLE
const homestyle = {
    centertext: {
        textAlign: "center",
    },
    boldtext: {
        fontWeight: "bold",
    }
};

// COMPOSANT
const Home = ( {classes} ) => (
    <Fragment>
        <Box mt={4} display="flex" justifyContent="center">
            <Typography variant="h4">
                Bienvenu(e) sur Flybook !
            </Typography>
        </Box>
        <Box mt={4} className={classes.centertext}>
            <Typography>
                Flybook vous permettra de gérer vos vols qui seront stocké dans une base de données.
            </Typography>
            <Typography>
                Vous pourez: <span class={classes.boldtext}>lister, ajouter, modifier, supprimer, les vols</span>.
            </Typography>
        </Box>
    </Fragment>
);

export default withStyles(homestyle)(Home);