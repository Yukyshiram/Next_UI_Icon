import * as React from "react";

import { IconSvgProps } from "./types";

export const NextuiIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => {
    return (
        <svg
            fill="currentColor"
            height={size || height}
            viewBox="0 0 180 180"
            width={size || width}
            {...props}
        >
            <g transform="translate(0,180) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M363 1786 c-172 -42 -316 -191 -352 -364 -15 -72 -15 -972 0 -1044
37 -178 189 -330 367 -367 72 -15 972 -15 1044 0 178 37 330 189 367 367 15
72 15 972 0 1044 -37 178 -189 330 -367 367 -78 16 -990 13 -1059 -3z m187
-784 c0 -268 1 -279 23 -322 34 -68 92 -103 178 -108 59 -4 77 -1 122 22 55
27 91 69 107 127 6 19 10 152 10 296 l0 263 35 0 35 0 0 -268 c0 -310 -6 -347
-71 -417 -128 -138 -376 -118 -474 40 l-30 48 -3 299 -3 298 35 0 36 0 0 -278z
m780 -108 l0 -385 -32 3 -33 3 -3 383 -2 382 35 0 35 0 0 -386z"/>
            </g>
        </svg>
    )
}
