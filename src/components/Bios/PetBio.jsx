import {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { 
    TabPane, 
    Tab,
    Grid,
    GridColumn,
    GridRow, 
    Container
} from 'semantic-ui-react'


export default function PetBio() {

    return (
        <Container>
            <Grid centered>
                <GridRow>
                    <GridColumn width={3}>
                        PetPic
                    </GridColumn>
                    <GridColumn width={12}>
                        Pet_Name_bold<br/>
                        Pet_species, pet_age<br/>
                        Pet_bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    )
}
