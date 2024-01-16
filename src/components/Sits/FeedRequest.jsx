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
    GridRow,
} from 'semantic-ui-react'


export default function FeedSit() {

    return (
        <Segment>
            <Header as="h1">I need a Sittr!
            <span>&nbsp;| n-Days</span> </Header>
            <Container>
            <Grid>
                <GridColumn>
                    <Image src="src/assets/defaultImgs/snoopy.png"/>
                </GridColumn>
                <GridColumn>
                    <GridRow>
                        <Label>UserName</Label>
                    </GridRow>
                    <GridRow>
                        <Label>Pet-1</Label>
                        <Label>Pet-2</Label>
                    </GridRow>
                    <GridRow>
                        <p>Description</p>
                    </GridRow>
                </GridColumn>
            </Grid>
            </Container>
        </Segment>
    )
}
