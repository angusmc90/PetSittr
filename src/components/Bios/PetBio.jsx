import {useState} from 'react'
import {
    Text,
    Card,
    Heading,
    CardBody,
    Image,
    Box,
    VStack,
    HStack,
    Tag,
    TagLabel,
    Avatar
} from '@chakra-ui/react';


export default function PetBio(props) {
    const pets=props.pets

    return (
        <VStack>
            {pets.map((pet) => (
                <Card id={pet.id}>
                    <HStack>

                    <Image src={pet.avatar} boxSize='120px'/>
                    <VStack>
                        <CardBody>
                            <Heading size="md">{pet.name}</Heading>
                            <Text>{pet.species}, {pet.age}</Text>
                            <Text>{pet.bio}</Text>
                        </CardBody>
                    </VStack>
                    </HStack>
                </Card>
            ))}   
        </VStack>
    )
}
        // <Container>
        //     <Grid centered>
        //         <GridRow>
        //             <GridColumn width={4}>
        //             <Image src='src/assets/defaultImgs/salem.png'/><br/>
        //             </GridColumn>
        //             <GridColumn width={10}>
        //                 <Container>
                            
        //                 Pet_Name_bold <Button floated='right'>edit</Button><br/>
        //                 </Container>
        //                 Pet_species, pet_age<br/>
        //                 Pet_bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        //             </GridColumn>
        //         </GridRow>
        //     </Grid>
        // </Container>
