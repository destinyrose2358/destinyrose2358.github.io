import { IconButton, Stack, Typography } from "@mui/material";
import { BoxImg } from "./BoxImg";
import { useMemo } from "react";

export type SkillIconProps = {
    skillName: string;
}

type SkillIconConfig = {
    skillMap?: string;
    baseURL?: string;
    extension?: string;
}

const DEFAULTSKILLICON: Required<Omit<SkillIconConfig, "skillMap">> = {
    baseURL: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons",
    extension: "svg"
}

export const SkillIconNames = {
    html: {
        skillMap: "HTML5",
    },
    mongoose: {
        skillMap: "MongoDB",
    },
    node: {
        skillMap: "nodedotjs",
    },
    materialui: {
        skillMap: "mui"
    },
    jooq: {
        skillMap: "jooq-logo-black",
        baseURL: "https://www.jooq.org/img",
        extension: "png"
    }
} as const satisfies { [p: Lowercase<string>]: SkillIconConfig};
export type SkillIconNamesType = typeof SkillIconNames;

export function SkillIcon(
    {
        skillName
    }: SkillIconProps
) {
    const {
        skillMap: finalSkillName,
        baseURL,
        extension
    } = useMemo<Required<SkillIconConfig>>(() => {
        const parsedSkillName = skillName.replaceAll(" ", "").toLowerCase() as keyof SkillIconNamesType;
        // @ts-expect-error
        return {skillMap: parsedSkillName, ...DEFAULTSKILLICON, ...SkillIconNames[parsedSkillName] ? SkillIconNames[parsedSkillName] : {}}
    }, [
        skillName
    ]);

    return <Stack alignItems={"center"}>
        <IconButton sx={{width: "auto"}} size={"large"}>
            <BoxImg
                src={`${baseURL}/${finalSkillName.toLowerCase()}.${extension}`}
                alt={skillName}
                sx={{
                    width: "1em",
                    height: "1em",
                    display: "block",
                    color: "currentColor",
                }}
            />
        </IconButton>
        <Typography textAlign={"center"}>{skillName}</Typography>
    </Stack>
}
