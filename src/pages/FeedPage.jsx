import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import {
    Container,
    Button,
    Segment,
} from 'semantic-ui-react'

import NavBar from '../components/NavBar'
import FeedSit from '../components/Sits/FeedRequest'

export default function FeedPage() {

    return (
        <>
            <NavBar></NavBar>

            <Container fixed="top">
                <Button fixed="top">I need a sittr</Button>
            </Container>

            <Container fixed="top">
                <FeedSit/>
                <FeedSit/>
                <FeedSit/>
            </Container>
        </>
    )
}
