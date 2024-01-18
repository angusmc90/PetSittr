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
                <Card key={pet.id} id={pet.id}>
                    <HStack>

                    <Image src={pet.avatar} boxSize='120px'/>
                    <VStack>
                        <CardBody>
                            <HStack>
                            <Heading size="md">{pet.name}</Heading>
                            <Text>{pet.species}, {pet.age}</Text>
                            </HStack>
                            <Text>{pet.bio}</Text>
                        </CardBody>
                    </VStack>
                    </HStack>
                </Card>
            ))}   
        </VStack>
    )
}