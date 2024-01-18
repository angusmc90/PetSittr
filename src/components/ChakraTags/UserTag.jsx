import {
    Tag,
    TagLabel,
    Avatar
} from '@chakra-ui/react';

export default function UserTag(props) {
    let user = props.user

    return (
        <Tag size="md">
            <Avatar name={user.userName} src={user.avatar} size="sm" />
            <TagLabel>
                {user.userName}
            </TagLabel>
        </Tag>
    )

}