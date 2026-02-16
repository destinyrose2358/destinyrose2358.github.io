import { useMemo } from "react";
import { devicons } from "devicon";
import { capitalize } from "lodash";

export type ShortSimpleIconNames = {
    [K in keyof typeof icons]: K extends `si${infer S}` ? Lowercase<S> : never;
}[keyof typeof icons]

console.dir(Object.keys(icons), { maxArrayLength: null });

export function SIWrapper(
    {
        iconName,
        color = "currentColor"
    }: { iconName: ShortSimpleIconNames; color?: string; }
) {
    const icon = useMemo(() => {
        const icon = icons[`si${capitalize(iconName)}`]
        if (!icon) console.log(iconName);
        return icon
    }, [
        iconName
    ]);

    if (!icon) return null;

    return <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        style={{ width: '1em', height: '1em' }}
    >
        <title>{ icon.title }</title>
        <path d={icon.path} />
    </svg>
}
