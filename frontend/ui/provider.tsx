"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@chakra-ui/react/preset"
import React, { type PropsWithChildren } from "react"

export function CustomProvider(props: PropsWithChildren) {
    return (
        <ChakraProvider value={system}>
            <Co
        </ChakraProvider>
    )
}