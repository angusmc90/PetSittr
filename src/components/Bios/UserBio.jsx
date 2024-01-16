import {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { 
    TabPane, 
    Tab,
    Grid,
    GridColumn,
    Container,
    Button,
} from 'semantic-ui-react'


export default function UserBio() {

    return (
        <Container>
            UN: This is the user bio section<br/>
            PIC HERE<br/>
            perferred name here<br/>
            calc # of pets here<br/>
            Needs a pet sitter status here<br/>
            Available to Sit ??<br/>
            <Button>Dynamic Create Request?</Button>
        </Container>
    )
}
