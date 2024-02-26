import { Box, Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import de Link depuis react-router-dom
import HomeIcon from '@mui/icons-material/Home';

const UserDashboard = () => {

    const { user } = useSelector(state => state.userProfile);

    return (
        <>
            <Box sx={{ bgcolor: "white", p: 3 }}>
                <h1>Dashboard</h1>
                <p>Complete name: {user && user.name}</p>
                <p>E-mail: {user && user.email}</p>
                <p>Role: {user && user.role}</p>
                <Button variant='contained' color="primary" startIcon={<HomeIcon />}>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>Home</Link>
                </Button>
            </Box>
        </>
    )
}

export default UserDashboard
