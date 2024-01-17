import { useState } from 'react';
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


import PetTags from '../Tags/PetTags';
import UserTag from '../Tags/UserTag';


export default function FeedSit() {
    const [request, setRequest] = useState({
        id: '54321',
        title: 'I need a Sittr!',
        user: {
            userName: 'userName',
            avatar: 'src/assets/defaultImgs/forky.png',
        },
        numDays: 5,
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


    return (
        <Card key={request.id}>
            <CardHeader>
                {request.title} <Text fontStyle="italic">&nbsp;| {request.numDays}-Days</Text>
            </CardHeader>
            <CardBody>
                <HStack>

                    <Image src={request.coverPhoto} boxSize='150px' />
                    <Box>
                        <VStack>
                            <UserTag user={request.user}/>
                            <PetTags pets={request.pets} />
                            <Text>
                                {request.description}
                            </Text>
                        </VStack>
                    </Box>
                </HStack>
            </CardBody>
        </Card>
    )
}
