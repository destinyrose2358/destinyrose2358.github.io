import { IconButton, Stack, Tooltip } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import ResumeIcon from '@mui/icons-material/AssignmentInd';

export function ProfessionalLinks() {
    return <Stack direction="row">
        <Tooltip title="Resume">
            <IconButton
                href="https://docs.google.com/document/d/1aElgGg5XctsrNTpWR_FKGdNPsXd_ANnmQCPWJhWi7kg/edit?usp=sharing"
                target="_blank"
                rel="noopener"
            ><ResumeIcon /></IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
            <IconButton
                href="https://www.linkedin.com/in/destiny-rose-b256a1197/"
                target="_blank"
                rel="noopener"
            ><LinkedInIcon /></IconButton>
        </Tooltip>
        <Tooltip title="Github">
            <IconButton
                href="https://github.com/destinyrose2358"
                target="_blank"
                rel="noopener"
            ><GithubIcon /></IconButton>
        </Tooltip>
    </Stack>
}
