import React from 'react'
import useAuth from '../useAuth'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Body from './Body';

const useStyles = makeStyles({
    dashboard : {
        display : "flex",
    }
})

const Dashboard = ({code}) => {
    const accessToken = useAuth(code)
    const classes = useStyles()
    return (
        <div className={classes.dashboard}>
            <Sidebar />
            <Body accessToken = {accessToken} />
        </div>
    )
}

export default Dashboard
