import React from "react";
import { Heading, Stack, Box } from "@chakra-ui/react";
import { SocialMediaLinks } from './SocialMediaLinks';
import { Copyright } from './Copyright';

export const Footer = (props) => {
    return (
        <Box
            as="footer"
            role="contentinfo"
            mx="auto"
            maxW="7xl"
            py="12"
            px={{
            base: '4',
            md: '8',
            }}
            {...props}
        >
            <Stack>
            <Stack direction="row" spacing="4" align="center" justify="space-between">
                <Heading as="h1" size="2xl" color="white">WConnect</Heading>
                <SocialMediaLinks />
            </Stack>
            <Copyright
                alignSelf={{
                base: 'center',
                sm: 'start',
                }}
            />
            </Stack>
        </Box>
    )
}