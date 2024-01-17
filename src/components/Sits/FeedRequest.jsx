import { useState } from 'react'
import {
    Text,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Image,
    Box,
} from '@chakra-ui/react';



export default function FeedSit() {
    const [request, setRequest] = useState({
        id: '54321',
        title: 'I need a Sittr!',
        user: 'UserName',
        avatar: 'src/assets/defaultImgs/snoopy.png',
        length: 5,
        coverPhoto: 'src/assets/defaultImgs/forky.png',
        description: 'The cat has been trying to kill me and the dog has started to help him. I just need a break. Please.',
        pets: [
            {
                name: 'Pet-1',
                species: 'Cat',
                age: '3yrs'
            },
            {
                ame: 'Pet-2',
                species: 'Dog',
                age: '2yrs'
            }]

    })

    return (
        <Card>
            <CardHeader>
                {request.title} <Text fontStyle="italic">&nbsp;| {request.length}-Days</Text>
            </CardHeader>
            <CardBody>
                <Image/>
                <Box>

                </Box>
            </CardBody>
        </Card>
    )
}
