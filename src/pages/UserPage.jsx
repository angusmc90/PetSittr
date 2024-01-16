import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { 
    TabPane, 
    Tab,
    Grid,
    GridColumn 
} from 'semantic-ui-react'

import NavBar from '../components/NavBar';

export default function LoginPage() {
    const portals = [
        { menuItem: 'Login', render: () => <TabPane><LoginForm /></TabPane> },
        { menuItem: 'Signup', render: () => <TabPane><SignupForm /></TabPane> },
    ]

    return (
        <>
            <NavBar></NavBar>
            <Grid>
                <GridColumn></GridColumn>
                <GridColumn></GridColumn>
            </Grid>
        </>
    )
}
