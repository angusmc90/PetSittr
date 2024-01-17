import { useState } from 'react'
import {
    Text,
    Card,
    CardHeader,
    CardBody,
    Image,
    Box,
    VStack,
    HStack,
    Tag,
    TagLabel,
    Avatar
} from '@chakra-ui/react';



export default function FeedSit() {
    const [request, setRequest] = useState({
        id: '54321',
        title: 'I need a Sittr!',
        user: 'UserName',
        avatar: 'src/assets/defaultImgs/forky.png',
        length: 5,
        coverPhoto: 'src/assets/defaultImgs/snoopy.png',
        description: 'The cat has been trying to kill me and the dog has started to help him. I just need a break. Please.',
        pets: [
            {
                id: '1',
                name: 'Pet-1',
                species: 'Cat',
                age: '3yrs',
                avatar: 'src/assets/defaultImgs/salem.png'
            },
            {
                id: '6',
                name: 'Pet-2',
                species: 'Dog',
                age: '2yrs',
                avatar: 'src/assets/defaultImgs/clifford.png'
            }]
    })

    const petTags = () => {
        let pets = request.pets
        return (
            <HStack>
                {pets.map((pet) => (

                    <Tag key={pet.id} size="lg">
                        <Avatar name={pet.name} src={pet.avatar} size="sm" />
                        <TagLabel>
                            {pet.name} |
                            {pet.age} |
                            {pet.species}
                        </TagLabel>
                    </Tag>
                ))}
            </HStack>
        )

    }

    return (
        <Card key={request.id}>
            <CardHeader>
                {request.title} <Text fontStyle="italic">&nbsp;| {request.length}-Days</Text>
            </CardHeader>
            <CardBody>
                <HStack>

                    <Image src={request.coverPhoto} boxSize='150px' />
                    <Box>
                        <VStack>
                            <Tag size="md">
                                <Avatar name={request.user} src={request.avatar} size="xs" />
                                <TagLabel>
                                    Forkys_UN
                                </TagLabel>
                            </Tag>
                            {petTags()}
                            <Text>

                            </Text>
                        </VStack>
                    </Box>
                </HStack>
            </CardBody>
        </Card>
    )
}
