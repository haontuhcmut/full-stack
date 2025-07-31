"use client"

import React, {type PropsWithChildren} from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@chakra-ui/react/preset"
import { ColorModeProvider } from "./color-mode"
import { Toaster } from "./toaster"

export function CustomeProvider(props: PropsWithChildren) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider>
                {props.children}
            </ColorModeProvider>
            <Toaster></Toaster>
        </ChakraProvider>
    )
}