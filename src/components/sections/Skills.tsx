import { Grid, Paper, Typography } from "@mui/material";
import { SkillIcon } from "../SkillIcon";

export function Skills() {
    return <>
        <Typography variant="h3">Skills</Typography>
        <Paper>
            <Grid justifyContent={"center"} container margin={1} gap={1}>
                <SkillIcon skillName="Docker" />
                <SkillIcon skillName="Express" />
                <SkillIcon skillName="Git" />
                <SkillIcon skillName="Github" />
                <SkillIcon skillName="HTML" />
                <SkillIcon skillName="JavaScript" />
                <SkillIcon skillName="TypeScript" />
                <SkillIcon skillName="MongoDB" />
                <SkillIcon skillName="Node" />
                <SkillIcon skillName="PostgreSQL" />
                <SkillIcon skillName="Python" />
                <SkillIcon skillName="Ruby on Rails" />
                <SkillIcon skillName="Ruby" />
                <SkillIcon skillName="React" />
                <SkillIcon skillName="Material UI" />
                <SkillIcon skillName="CSS" />
                <SkillIcon skillName="Sass" />
                <SkillIcon skillName="webpack" />
                <SkillIcon skillName="jOOQ" />
                <SkillIcon skillName="Powershell" />
            </Grid>
        </Paper>
    </>
}
