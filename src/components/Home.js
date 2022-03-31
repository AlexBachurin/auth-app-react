import React from 'react'
import Box from '@mui/material/Box';
import styled from 'styled-components';
const Home = () => {
    return (
        <Wrapper className='center'>
            Home
        </Wrapper>
    )
}

const Wrapper = styled.section`
    height: calc(100vh - 48px);
    background: #66b3b3;
`
export default Home