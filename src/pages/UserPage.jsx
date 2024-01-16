import { useState } from 'react'
import {
    TabPane,
    Tab,
    Grid,
    GridColumn,
    GridRow
} from 'semantic-ui-react'

import NavBar from '../components/NavBar';
import UserBio from '../components/Bios/UserBio';
import PetBio from '../components/Bios/PetBio'

export default function LoginPage() {
    const portals = [
        { menuItem: 'Login', render: () => <TabPane><LoginForm /></TabPane> },
        { menuItem: 'Signup', render: () => <TabPane><SignupForm /></TabPane> },
    ]

    return (
        <>
            <NavBar></NavBar>
            <Grid centered>
                <GridRow>
                    <GridColumn width={4} stretched>
                        <UserBio></UserBio>
                    </GridColumn>
                    <GridColumn width={8} stretched>
                        <PetBio></PetBio>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    )
}
