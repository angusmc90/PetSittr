import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom';
import {
    Menu,
    Container,
    MenuItem,
    Grid,
    GridColumn,
    Image
} from 'semantic-ui-react'

export default function NavBar() {

    return (
        <Menu fixed="top">
            <MenuItem as="a" floated="left">
                <Image src="src/assets/defaultImgs/forky.png" size="mini" />
                Forkys_UN
            </MenuItem>
            <MenuItem as="a">
                Open Sit Requests
            </MenuItem>
            <MenuItem as="a">
                Reviews
            </MenuItem>
            <MenuItem as="a">
                SittrSearch
            </MenuItem>
            <MenuItem as="a" floated='right'>
                Logout
            </MenuItem>
        </Menu >
    )
}