import { Box } from "@mui/material";
import type { BoxProps } from "@mui/system";

export type BoxImgProps = Required<Pick<BoxProps<"img">, "src" | "alt">> & Omit<BoxProps<"img">, "component" | "src" | "alt" | "children">;

export function BoxImg(
    boxImgProps: BoxImgProps
) {
    return <Box
        component={"img"}
        {...boxImgProps}
    />
}
