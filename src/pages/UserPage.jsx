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

import NavBar from '../components/NavBar';
import UserBio from '../components/Bios/UserBio';
import PetBio from '../components/Bios/PetBio'

export default function LoginPage() {
    const [user, setUser] = useState(
        {
            username: 'userName',
            pets: [
                {
                    id: '1',
                    name: 'Salem',
                    species: 'Cat',
                    age: '3yrs',
                    avatar: 'src/assets/defaultImgs/salem.png',
                    bio: 'Salem Saberhagen was a hundreds-year-old warlock, sentenced to spend 100 years trapped in the body of a black American shorthair and stripped of his magical powers as punishment for attempted world domination.'
                },
                {
                    id: '2',
                    name: 'Cliffod',
                    species: 'Dog?',
                    age: '2yrs',
                    avatar: 'src/assets/defaultImgs/salem.png',
                    bio: 'Literally just an insurance nightmare. No one wants to talk about how this BIG. READ. MONSTER. is clearly not a dog.'
                },
                {
                    id: '3',
                    name: 'Spot',
                    species: 'Dog',
                    age: '3yrs',
                    avatar: 'src/assets/defaultImgs/spot.jpg',
                    bio: 'Spot the Dog is a book series written by Ernest Hemmingway under the pseudonym Eric Hill. The books center around the titular character Spot, a young Golden Retriever who struggles with alcoholism and a shattered sense of masculinity. Spot the Dog showcases Hemmingway\'s minimalism: \"Where\'s Spot? Is he under the stairs? Is in he in the box? No. He\'s at the bar. Sipping whiskey. Sucking on cigarettes. Suffering.\"'
                },
            ]
        }
    )

    const [veiw, setView] = useState('pets');



    return (
        <>
            <NavBar />
            <HStack>
                <UserBio user={'placeholder'} />
                <PetBio pets={user.pets} />
            </HStack>
        </>
    )
}
