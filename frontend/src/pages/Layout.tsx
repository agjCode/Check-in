import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { MainComponent } from "../components/MainComponent";
import { TopBar } from "../components/TopBar";

import {
    Box,
} from "@mui/material";

const Layout : React.FC = () => {
    return(
        <Box sx = {{width: "100vw", height: "100vh", display: "flex", flexDirection: "column",}}>
        <MainComponent>
            
            <TopBar />
            <Box
                sx = {{
                    flex: 1,
                    minHeight: 0,
                    padding: { xs: 2, sm: 3, md: 4 },
                }}
            >
                <Outlet />
            </Box>
        
        </MainComponent>
        </Box>
    );
};

export default Layout;