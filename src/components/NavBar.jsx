import { useState } from 'react'
import {
    Box,
    Flex,
    Link,
    Spacer,
    Tag,
    TagLabel,
    Avatar,
    Center
} from '@chakra-ui/react';

export default function NavBar() {

    return (
        <Box width="100vw" justifyContent="center">

            <Center>
                <Flex width="90%">

                    <Box>
                        <Link>
                            <Tag size="lg">
                                <Avatar name="userName" src="src/assets/defaultImgs/forky.png" size="sm" />
                                <TagLabel>
                                    Forkys_UN
                                </TagLabel>
                            </Tag>
                        </Link>
                    </Box>

                    <Spacer />

                    <Box>
                        <Link>Open Requests</Link>
                        <Link>Reviews</Link>
                        <Link>Owner Search</Link>
                    </Box>
                    <Spacer />



                    <Box>Logout -D- </Box>

                </Flex>
            </Center>
        </Box>

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