import React from 'react'
import {
    useColorMode,
    Text,
    Flex,
    Box,
    Avatar,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import DarkModeSwitch from './DarkModeSwitch'

import { primaryDarkColor } from '../styles/theme'
import Footer from './Footer'
import { FaHome } from 'react-icons/fa'

const headingColor = {
    light: 'gray.700',
    dark: 'gray.200'
}

const titleColor = {
    light: 'gray.700',
    dark: 'gray.400'
}

const Container = ({ children, showBackButton }) => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light: 'white',
        dark: '#020817'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
        `

    const FlexBox = styled(Box)`
            display: flex;
            align-items: center;
        `

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="800px"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[0, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 4]}
                mx="auto"
            >
                <FlexBox justifyContent="space-between" alignItems="center" flexDir='row' >
                    <NextLink href="https://www.prajwalsv.dev" passHref>
                        <FlexBox
                            w="40px"
                            h="40px"
                            alignItems="center"
                            justifyContent="center"
                            _hover={{ cursor: "pointer" }}
                        >
                            <Box position="absolute">
                                <svg height="50" width="50" viewBox="0 0 56 56">
                                    <path
                                        d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z"
                                        fill={primaryDarkColor}
                                    ></path>
                                    <path
                                        d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z"
                                        fill={primaryDarkColor}
                                    ></path>
                                    <path
                                        d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z"
                                        fill={primaryDarkColor}
                                    ></path>
                                </svg>
                            </Box>
                            <Avatar
                                color="white"
                                bg="none"
                                size="lg"
                                name={"PSV"}
                                src="/logo.jpg"
                                w="40px"
                                h="40px"
                            />
                        </FlexBox>
                    </NextLink>
                    <Flex pl="20px" justifyContent="space-between" alignItems="start" flexDir="column">
                        <Text fontSize="14px" fontWeight={700} color={headingColor[colorMode]} >
                            BLOG 🚀
                        </Text>
                        <NextLink href="https://www.prajwalsv.dev" fontWeight={600} color={headingColor[colorMode]} cursor="pointer">
                            <Text fontSize="10px" fontWeight={600} color={titleColor[colorMode]} cursor="pointer" _hover={{ color: "#16a34a" }}>Prajwal S Venkateshmurthy</Text>
                        </NextLink>

                    </Flex>
                </FlexBox>
                <DarkModeSwitch showBackButton={showBackButton} />
            </StickyNav >
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
            <Footer />
        </>
    )
}

export default Container