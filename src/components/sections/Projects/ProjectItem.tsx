import { GitHub, Web } from "@mui/icons-material";
import { Card, Typography, CardHeader, CardContent, IconButton, Tooltip, Stack } from "@mui/material";
import { useMemo } from "react";
import type { ProjectType } from "../../../schemas/schemas";

export function ProjectItem(
    {
        title,
        homepage,
        description,
        htmlUrl,
        isPrivate = false
    }: ProjectType
) {

    const ProjectItemActions = useMemo(() => {
        return <Stack direction={"row"}>
            {
                homepage && <Tooltip title={`View Project Page`}>
                    <span>
                        <IconButton target="_blank" rel="noopener" href={homepage}>
                            <Web />
                        </IconButton>
                    </span>
            </Tooltip>
            }
            {
                htmlUrl && <Tooltip title={isPrivate ? `Private Repo` : `View Repo`}>
                    <span>
                        <IconButton disabled={isPrivate} target="_blank" rel="noopener" href={htmlUrl}>
                            <GitHub />
                        </IconButton>
                    </span>
                </Tooltip>
            }
        </Stack>
    }, [
        isPrivate,
        homepage,
        htmlUrl
    ]);

    return <Card>
        <CardHeader title={title} action={ProjectItemActions} />
        <CardContent>
            <Typography>{description}</Typography>
        </CardContent>
    </Card>
}
