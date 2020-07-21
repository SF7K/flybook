import React from 'react';
import {
    withStyles,
    AppBar,
    Toolbar,
    Box,
    Typography,
    Link,
} from '@material-ui/core';


// STYLE
const navbarstyle = {                                                   // Style de mon élément "AppNavbar"
    navbar: {                                                           // Création de classe "navbar"
        background: "#aa2200",
    },
    link: {
        color: "inherit",
        '&:hover': {
            textDecoration: "none",
            color: "#fcf9d0",
        },
    },
};

// COMPOSANT
const AppNavbar = ( {classes} ) => (
    <AppBar  className={classes.navbar} position="static">          {/* Appel de la classe "navbar"*/}
        <Toolbar className={classes.flex}>
            <Box pr={3} borderRight={1}>
                <Typography variant="h6" color="inherit">
                    Flybook
                </Typography>
            </Box>

            <Box width={1/2} display="flex" justifyContent="flex-start">
                <Box ml={3} width={1/8} display="flex" justifyContent="space-between">
                    <Link href="/" className={classes.link}>
                        Accueil
                    </Link>
                    <Link href="/vols" className={classes.link}>
                        Vols
                    </Link>
                </Box>
            </Box>
            <Box width={1/2} display="flex" justifyContent="flex-end">
                <Box width="30%" display="flex" justifyContent="space-around">
                    <Link href="#" className={classes.link}>
                        Se connecter
                    </Link>
                    <Link href="#" className={classes.link}>
                        S'enregistrer
                    </Link>
                </Box>
            </Box>

        </Toolbar>
    </AppBar>
);

// Export du composant "AppNavbar" et de son style "navbarstyle"
export default withStyles(navbarstyle)(AppNavbar);
