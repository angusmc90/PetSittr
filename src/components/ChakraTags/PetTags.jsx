import {
    HStack,
    Tag,
    TagLabel,
    Avatar
} from '@chakra-ui/react';


export default function PetTags(props) {
    const pets = props.pets
    
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