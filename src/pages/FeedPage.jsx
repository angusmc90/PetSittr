import { useState } from 'react'
import {
    Container,
    Button,
} from '@chakra-ui/react';

import NavBar from '../components/NavBar'
import FeedSit from '../components/Sits/FeedRequest'

export default function FeedPage() {

    return (
        <>
            <NavBar/>
            <Container fixed="top" centerContent>
                <Button>I need a sittr</Button>
            </Container>

            <Container fixed="top" centerContent>
                Sits
                <FeedSit/>
                <FeedSit/>
                <FeedSit/>
            </Container>
        </>
    )
}
