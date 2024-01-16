import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import {
    Container,
    Button,
    Segment,
} from 'semantic-ui-react'

import NavBar from '../components/NavBar'

export default function FeedPage() {

    return (
        <>
            <NavBar></NavBar>

            <Container fixed="top">
                <Button fixed="top">I need a sittr</Button>
            </Container>

            <Container fixed="top">
                <Segment>this is a request for a sittr</Segment>
                <Segment>this is a request for a sittr</Segment>
                <Segment>this is a request for a sittr</Segment>
            </Container>
        </>
    )
}
