import { useState } from 'react'
import {
    Text,
    Card,
    CardHeader,
    CardBody,
    Box,
    Image,
    Button,
    VStack,
    HStack,
    Tag,
    TagLabel,
    Avatar
} from '@chakra-ui/react';


export default function UserBio() {

    return (
        <Box>
            UN: This is the user bio section<br />
            <Box boxSize='150px'>
                <Image src='src/assets/defaultImgs/forky.png' size="sm" /><br />
            </Box>
            perferred name here<br />
            calc # of pets here<br />
            Needs a pet sitter status here<br />
            Available to Sit ??<br />
            <Button>Dynamic Create Request?</Button>
        </Box>
    )
}
