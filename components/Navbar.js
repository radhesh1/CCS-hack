import {
    Box,
    Button,
    IconButton,
    Flex,
    Spacer,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaSignOutAlt } from 'react-icons/fa';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import { useLocalStorage } from '../hooks/useLocalStorage.js';
import React, { useState, useEffect } from 'react';
// import jwt_decode from "jwt-decode";

export default function Navbar() {
    var router = useRouter();


    return (

        <Box className='header' paddingX={2} paddingY={5} >
            <Flex as="header" width="100%" align="center" px={10} wrap={'wrap'} paddingBottom={2}>
                <Logo />

                <Box marginLeft={'auto'} >
                    <><Button colorScheme='red' variant='outline' onClick={() => router.push('/getstarted')}>
                        Get Started.
                    </Button></>


                    <ColorModeSwitcher />
                </Box>

            </Flex>
        </Box>

    )
        ;
}