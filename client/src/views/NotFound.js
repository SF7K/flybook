import React, {Fragment} from 'react';
import {
    withStyles,
    Typography,
    Box,
    } from '@material-ui/core';

// STYLE


// COMPOSANT
const Flights = () => (
    <Fragment>
        <Box mt={4} display="flex" justifyContent="center">
            <Typography variant="h4">
                PAGE INTROUVABLE !
            </Typography>
        </Box>
    </Fragment>
);


// EXPORT
export default withStyles()(Flights);