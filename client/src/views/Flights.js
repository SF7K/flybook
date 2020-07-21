import React, {Fragment} from 'react';
import {
    withStyles,
    Typography,
    Box,
    } from '@material-ui/core';
import FlightsTable from '../components/FlightsTable';

// STYLE


// COMPOSANT
const Flights = () => (
    <Fragment>
        <Box mt={4} mb={4} display="flex" justifyContent="center">
            <Typography variant="h4">
                LISTE DES VOLS
            </Typography>
        </Box>
        <FlightsTable />
    </Fragment>
);


// EXPORT
export default withStyles()(Flights);