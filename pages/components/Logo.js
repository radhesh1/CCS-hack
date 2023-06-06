import React, { useState } from 'react';
import { Box, Heading, HStack, Image, Spacer, useColorModeValue } from '@chakra-ui/react';
// import { Player } from "@lottiefiles/react-lottie-player";
import Link from 'next/link';




export const Logo = props => {
    // var lottieFrames = useState();
    // const [lottieFrames, setLottieFrames] = useState(0);

    return <>

        <Link href="/">
                <HStack >
                    <Box w={65} >
                        <Image src={useColorModeValue('./logo_light.png','./logo_dark.png')} />
                    </Box>



                    <Spacer w={2}>
                    </Spacer>


                    <Heading as="h1" size="xl"
                        fontWeight='bold'>
                        SAHAYAK
                    </Heading>
                </HStack>
        </Link>



    </>;
};