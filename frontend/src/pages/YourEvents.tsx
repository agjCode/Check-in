import React, { useEffect, useState } from "react";
import getEvents from "../api/getEvents";
import type { EventData } from "../components/Event";
import { Event } from "../components/Event";

import {
    Typography,
    Box,
    CircularProgress,
    useTheme,
} from "@mui/material";

const YourEvents : React.FC = () => {
    const [loading, setLoading] = useState<"Loading" | "Success" | "Error">("Loading");
    const [events, setEvents] = useState< | null>(null);
    const dummy: EventData = {
        eventName: "dude",
        eventID: "21",
        dateString: "2025-12-11T00:00:00Z",
    };

    

    return(
        <Box
            sx = {{
                display: "flex",
                flexDirection: "column",
                width: {xs: "95%", sm: "80%", md: "65%", lg: "55%"},
                flexGrow: 1,
                mx: "auto",
            }}
        >
            <Event {...dummy} />
        </Box>
    );
};

export default YourEvents;