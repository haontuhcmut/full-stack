import * as React from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import { ThemeProviderProps } from 'next-themes'

export interface ColorModeProviderProps extends ThemeProviderProps {}

export function ColorModeProvider(props: ColorModeProviderProps) {
    return (
        <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
    )
}

export type ColorMode =  "light" | "dark"

export interface UseColorModeReturn {
    colorMode: ColorMode
    setColorMode: (colorMode: ColorMode) => void
}