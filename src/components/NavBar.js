import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import styled from 'styled-components'
import { useGlobalContext } from '../contexts/AppContext';
import { useAuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { openModal } = useGlobalContext();
    const { contextValues } = useAuthContext();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Wrapper className='center'>
            <div className="logo-container">
                <Link to='/'>
                    <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png" alt="logo" />
                </Link>
            </div>
            <div className="tabs-container">
                <Tabs sx={{
                    // marginRight: '30px'
                }} value={value} onChange={handleChange} aria-label="nav tabs example">
                    <Tab label="Page One" />
                    <Tab label="Page Two" />
                </Tabs>
                {contextValues.user ?
                    <>
                        <Button color="inherit" component={Link} to="/profile">
                            {contextValues.user.firstName} {contextValues.user.lastName}
                        </Button>
                        <Button sx={{
                            marginLeft: '20px'
                        }}
                            variant="contained"
                            onClick={() => contextValues.logOut()}
                        >
                            Logout
                        </Button>
                    </>
                    :
                    <Button sx={{
                        marginLeft: '20px'
                    }}
                        variant="contained"
                        onClick={openModal}
                    >
                        Login
                    </Button>}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
        display: flex;
        justify-content: space-between;
        /* margin-bottom: 15px; */
        .tabs-container {
            display: flex;
        }
        .logo-container {
            height: 48px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        
        
`

export default NavBar