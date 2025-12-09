import React from "react";
import { NavLink } from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    Box,
    useTheme,
} from "@mui/material";

const TopBar: React.FC = () => {
    const theme = useTheme();
    return(
    <AppBar 
            sx={{
            flexShrink: 0,
            position: "relative",}}
        >
            <Toolbar
            sx={{width: "100%", flexShrink: 0, justifyContent: "center", backgroundColor: theme.palette.secondary.main,}}
            >
            <Box
                sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
                    <NavLink 
                        to="/"
                        style={({ isActive }) => ({
                        color: isActive? theme.palette.grey[500]: "inherit",
                        textDecoration: isActive ? 'underline' : 'none',
                    })}    
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="/EventsList"
                        style={({ isActive }) => ({
                        color: isActive? theme.palette.grey[500]: "inherit",
                        textDecoration: isActive ? 'underline' : 'none',
                    })}    
                    >
                        Events List
                    </NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export { TopBar };