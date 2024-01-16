import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import {
    Segment,
    Container,
    Grid,
    GridColumn,
    Header,
    Image,
    Label,
} from 'semantic-ui-react'


export default function FeedSit() {

    return (
        <Segment>
            <Header as="h1">I need a Sittr!
            <Header as="h2">&nbsp;| n-Days</Header> </Header>
            <Grid>
                <GridColumn>
                    <Image/>
                </GridColumn>
                <GridColumn>
                    User-Label<br/>
                    Pet-Label(s)<br/>
                    Desc
                </GridColumn>
            </Grid>
        </Segment>
    )
}
