import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import {
    Box,
    Flex,
    Image,
    Stack,
    HStack,
    Link,
    Text,
    IconButton,
} from '@chakra-ui/react';

export default function NavBar() {

    return (
        <HStack>
            <Spacer/>
            <Box>
                <Link>
                    <Image src="src/assets/defaultImgs/forky.png" size="mini" />
                    Forkys_UN
                </Link>
            </Box>
            <Spacer/>
            <Box>
                <Link>Open Requests</Link>
                <Link>Reviews</Link>
                <Link>Owner Search</Link>
            </Box>
            <Spacer/>
            <Box>Logout -D-</Box>
            <Spacer/>
        </HStack>

    )
}

/* <Menu fixed="top">
<MenuItem as="a" floated="left">
    <Image src="src/assets/defaultImgs/forky.png" size="mini" />
    Forkys_UN
</MenuItem>
<MenuItem as="a">
    Open Sit Requests
</MenuItem>
<MenuItem as="a">
    Reviews
</MenuItem>
<MenuItem as="a">
    SittrSearch
</MenuItem>
<MenuItem as="a" floated='right'>
    Logout
</MenuItem>
</Menu > */