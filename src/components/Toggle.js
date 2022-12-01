import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ListItemButton from '@mui/material/ListItemButton';

import { ThemeProvider, createTheme } from '@mui/material/styles';

  






const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#D7B38',
        },
    },
});

  

export default function EnableColorOnDarkAppBar(props) {
    const d = new Date()
    const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Ddec'];

    const day = weekDay[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()
    const today = day + ", " + month + " " + year
    return (
        

                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <ThemeProvider theme={lightTheme}>
                                <AppBar position="static" color="primary" enableColorOnDark>
                                    <Toolbar>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container spacing={3} columns={12}>
                                                <Grid item xs={1}>
                                                    <IconButton onClick={() => props.handleclick()} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>

                                                        <MenuIcon />




                                                    </IconButton>


                                                </Grid>
                                                <Grid item xs={9}>
                                                    <Typography noWrap component="div" sx={{ flexGrow: 1 }}>
                                                        {today}
                                                    </Typography>


                                                </Grid>
                                                <Grid item xs={2}>

                                                    <SwapVertIcon />
                                                    <EmojiObjectsIcon />

                                                </Grid>


                                            </Grid>
                                        </Box>





                                    </Toolbar>

                                </AppBar>

                            </ThemeProvider>

                        </Stack>
                    

    );

}
