import { IconButton, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { BoxImg } from "./BoxImg";
import { SIWrapper, type ShortSimpleIconNames } from "./DIWrapper";

export type SkillIconProps = {
    skillName: string;
}

type BaseSkillIconConfig = {
    color?: string;
}

type SimpleSkillIconConfig = {
    isLocal: false;
    skillMap: ShortSimpleIconNames;
} & BaseSkillIconConfig;

type LocalSkillIconConfig = {
    isLocal: true;
    skillMap: string;
    extension: string;
    baseURL: string;
} & BaseSkillIconConfig;

type FSimpleSkillIconConfig = {
    skillMap: ShortSimpleIconNames;
} & BaseSkillIconConfig;

type FLocalSkillIconConfig = {
    src: string;
} & BaseSkillIconConfig;

type SkillIconConfig = LocalSkillIconConfig | SimpleSkillIconConfig;
type FSkillIconConfig = FLocalSkillIconConfig | FSimpleSkillIconConfig;

// const DEFAULTSKILLICON: Required<Omit<SkillIconConfig, "skillMap" | "baseURL" | "extension" >> = {
//     // baseURL: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons",
//     // extension: "svg",
//     color: "currentColor"
// }

export const SkillIconConfigsByName: { [p: string]: SkillIconConfig } = {
    html: {
        isLocal: false,
        skillMap: "html5",
    },
    mongoose: {
        isLocal: false,
        skillMap: "mongodb",
    },
    node: {
        isLocal: false,
        skillMap: "nodedotjs",
    },
    materialui: {
        isLocal: false,
        skillMap: "mui",
        color: "yellow"
    },
    jooq: {
        isLocal: true,
        skillMap: "jooq-logo-black",
        baseURL: "https://www.jooq.org/img",
        extension: "png",
        color: "blue"
    }
};
export type SkillIconNamesType = typeof SkillIconConfigsByName;

function isLocalSkillIconConfig(config: SkillIconConfig): config is LocalSkillIconConfig {
    return config.isLocal || false
}

function isFLocalSkillIconConfig(config: FSkillIconConfig): config is FLocalSkillIconConfig {
    return Object.keys(config).includes("src");
}

function parseSkillName(skillName: string) {
    const parsedSkillName = skillName.replaceAll(" ", "").toLowerCase();
    const config = {skillMap: parsedSkillName, ...SkillIconConfigsByName[parsedSkillName as keyof typeof SkillIconConfigsByName]}

    if (isLocalSkillIconConfig(config)) {
        return parseLocalSkillIconConfig(config);
    } else {
        return parseSimpleSkillIconConfig(config);
    }
}

function parseBaseSkillIconConfig(config: SkillIconConfig): BaseSkillIconConfig {
    return {
        color: config.color
    }
}

function parseLocalSkillIconConfig(config: LocalSkillIconConfig): FLocalSkillIconConfig {
    return {
        src: `/icons/skills/${config.skillMap}.${config.extension}`,
        ...parseBaseSkillIconConfig(config)
    }
}

function parseSimpleSkillIconConfig(config: SimpleSkillIconConfig): FSimpleSkillIconConfig {
    return {
        skillMap: config.skillMap,
        ...parseBaseSkillIconConfig(config)
    }
}

export function SkillIcon(
    {
        skillName,
    }: SkillIconProps
) {
    const config = useMemo(() => {
        return parseSkillName(skillName);
    }, [
        skillName
    ]);

    const finalIcon = useMemo(() => {
        if (isFLocalSkillIconConfig(config)) {
            const {color, ...rest} = config;
            return <BoxImg
                alt={skillName}
                sx={{
                    width: "1em",
                    height: "1em",
                    color
                }}
                {...rest}
            />
        } else {
            const { skillMap, ...rest } = config;
            return <SIWrapper
                iconName={skillMap}
                {...rest}
            />
        }
    }, [
        config
    ]);

    // const {
    //     skillMap,
    //     color,
    //     src,
    //     isLocal
    // } = useMemo<Required<Omit<SkillIconConfig, "baseURL" | "extension">> & { src: string; isLocal: boolean; }>(() => {
    //     const parsedSkillName = skillName.replaceAll(" ", "").toLowerCase() as Lowercase<string>;
    //     const baseConfig = { skillMap: parsedSkillName, ...DEFAULTSKILLICON, ...SkillIconConfigsByName[parsedSkillName] ? SkillIconConfigsByName[parsedSkillName] : {} }
    //     const src = `${baseConfig.isLocal ? "/icons/skills" : baseConfig.baseURL}/${baseConfig.skillMap.toLowerCase()}.${baseConfig.extension}`
    //     return { ...baseConfig, src }
    // }, [
    //     skillName
    // ]);

    // const finalIcon = useMemo(() => {
    //     return isLocal ?
    //         <BoxImg
    //             src={src}
    //             alt={skillName}
    //             sx={{
    //                 width: "1em",
    //                 height: "1em",
    //                 color
    //             }}
    //         />
    //     :
    //         <SIWrapper iconName={skillMap} />
    // }, [
    //     color,
    //     src,
    //     isLocal
    // ]);

    return <Stack alignItems={"center"}>
        <IconButton sx={{ width: "auto" }} size={"large"}>
            { finalIcon }
        </IconButton>
        <Typography textAlign={"center"}>{skillName}</Typography>
    </Stack>
}
