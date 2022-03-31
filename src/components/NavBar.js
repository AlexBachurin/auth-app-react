import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import styled from 'styled-components'
import { useGlobalContext } from '../contexts/AppContext';
function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const NavBar = () => {
    const { openModal } = useGlobalContext();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Wrapper className='center'>
            <div className="logo-container">
                <img src="" alt="" />
            </div>
            <div className="tabs-container">
                <Tabs sx={{
                    // marginRight: '30px'
                }} value={value} onChange={handleChange} aria-label="nav tabs example">
                    <LinkTab label="Page One" href="/drafts" />
                    <LinkTab label="Page Two" href="/trash" />
                    <Button sx={{
                        marginLeft: '20px'
                    }}
                        variant="contained"
                        onClick={openModal}
                    >
                        Login
                    </Button>
                </Tabs>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
        display: flex;
        justify-content: space-between;
        
`

export default NavBar