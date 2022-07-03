import React from "react"
import { Box, Text } from "@chakra-ui/react"

export default function Logo() {
  return (
    <Box  color={["white", "white", "primary.500", "primary.500"]} w="100px">
      <Text fontSize="lg" fontWeight="bold">
        نظام الفواتير 
      </Text>
    </Box>
  )
}