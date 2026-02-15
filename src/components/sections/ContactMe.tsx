import { Email, Phone } from "@mui/icons-material";
import { IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material";

export function ContactMe() {
    return <>
        <Typography variant="h3">Contact Me</Typography>
        <Paper>
            <Stack justifyContent={"center"} gap={2} direction={"row"} padding={1}>
                <Tooltip title="Call Me"> 
                    <Typography display={"flex"} alignItems={"center"}>
                        <IconButton href="tel:256-710-2471">
                            <Phone/>
                        </IconButton>
                        256-710-2471
                    </Typography>
                </Tooltip>
                <Tooltip title="Email Me">
                    <Typography display={"flex"} alignItems={"center"}>
                        <IconButton href="mailto:destinyrose2358@gmail.com">
                            <Email />
                        </IconButton>
                        destinyrose2358@gmail.com
                    </Typography>
                </Tooltip>
            </Stack>
        </Paper>
    </>
}
