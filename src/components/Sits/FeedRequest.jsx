import { useState } from 'react'
import {
    Segment,
    Container,
    Grid,
    GridColumn,
    Header,
    Image,
    Label,
    LabelDetail,
    GridRow,
    Icon,
} from 'semantic-ui-react'


export default function FeedSit() {

    return (
        <Container>
            <Container>
            <Header as="h1">I need a Sittr!<span>&nbsp;| n-Days</span> </Header>
            </Container>
            <Container fluid>
            <Grid>
                <GridColumn>
                    <Image src="src/assets/defaultImgs/snoopy.png" />
                </GridColumn>
                <GridColumn>
                    <GridRow>
                        <Label>
                            <Image src="src/assets/defaultImgs/forky.png"/>
                            UserName
                        </Label>
                    </GridRow>
                    <GridRow>
                        <Label>
                            <Icon name="paw" />
                            Pet-1
                            <LabelDetail>Cat</LabelDetail>
                        </Label>
                        <Label>
                            <Icon name="paw" />
                            Pet-2
                            <LabelDetail>Dog</LabelDetail>
                        </Label>
                    </GridRow>
                    <GridRow>
                        <p>Description</p>
                    </GridRow>
                </GridColumn>
            </Grid>
            </Container>
        </Container>
    )
}
