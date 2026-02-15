import { Grid, Paper, Typography } from "@mui/material";
import { ProjectItem } from "./ProjectItem";
import { useContext, useMemo } from "react";
import { GithubContext } from "../../contexts/GithubContext";

export function Projects() {

    const projects = useContext(GithubContext);

    const sortedProjects = useMemo(() => {
        return projects.filter((p) => p.topics?.includes("portfolio-project")).map((p) => {
            return <ProjectItem {...p} />
        })
    }, [
        projects
    ]);

    return <>
        <Typography variant="h3">Projects</Typography>
        <Paper>
            <Grid
                spacing={2}
                justifyContent={"center"}
                margin={2}
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    "& > *": {
                        flexGrow: 1,
                        width: "30%",
                        maxWidth: "50%"
                    }
                }}
            >
                {sortedProjects}
            </Grid>
        </Paper>
    </>
}
