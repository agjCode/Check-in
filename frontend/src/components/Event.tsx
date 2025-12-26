import { Box, useTheme, Typography } from "@mui/material";


export interface EventData{
    eventName: string;
    eventID: string;
    dateString: string;
}

const Event = (event: EventData) => {
    const theme = useTheme();
    const date = new Date(event.dateString);
    return (
        <Box
            sx={{
                width: "100%",
                height: "15%",
                flexGrow: 1,
                backgroundColor: theme.palette.grey[300],
                color: theme.palette.getContrastText(theme.palette.grey[300]),
                border: "3px solid",
                borderColor: theme.palette.secondary.main,
                }}
        >
            <Box sx={{
                    width: "100%",
                    height: "30%",
                    borderBottom: "2px solid",
                    borderColor: theme.palette.secondary.main,
                    p: 0.5,      
                    }}
            >
                <Typography variant="h5" align="left">{event.eventName}</Typography>
            </Box>
            
            <Box
                sx={{
                    width: "100%",
                    height: "70%",
                    gap: theme.spacing(2),
                    marginTop: theme.spacing(1),
                    marginBottom: theme.spacing(1),
                    p: 0.5,
                    }}
            >
                <Typography variant="body1" align="left">Event Date: {date.toLocaleDateString()}</Typography>

                <Typography variant="body1" align="left">Start Time: {date.toLocaleTimeString()}</Typography>

                <Typography variant="body1" align="left">Event ID: {event.eventID}</Typography>
            </Box>

        </Box>
    );
};

export {Event};