import {useState} from 'react'
import { 
    Image,
    Grid,
    GridColumn,
    GridRow, 
    Container,
    Button,
} from 'semantic-ui-react'


export default function PetBio() {

    return (
        <Container>
            <Grid centered>
                <GridRow>
                    <GridColumn width={4}>
                    <Image src='src/assets/defaultImgs/salem.png'/><br/>
                    </GridColumn>
                    <GridColumn width={10}>
                        <Container>
                            
                        Pet_Name_bold <Button>edit</Button><br/>
                        </Container>
                        Pet_species, pet_age<br/>
                        Pet_bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    )
}
