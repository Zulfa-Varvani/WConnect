import { Text } from '@chakra-ui/layout'
import React from 'react'

export const Copyright = (props) => (
  <Text fontSize="sm" {...props} color="white">
    &copy; {new Date().getFullYear()} WConnect, Inc. All rights reserved.
  </Text>
)