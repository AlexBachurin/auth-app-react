import React from 'react'
import styled from 'styled-components'
import { useAuthContext } from '../../contexts/AuthContext';
import Button from '@mui/material/Button';
const ProfileInfo = () => {
    const { contextValues } = useAuthContext();
    return (
        <Wrapper className='center'>
            <h2>Hello, <strong>{contextValues.user.firstName}</strong> </h2>
            <div className="btn-container">
                <Button variant="contained" color="success">
                    confirm email
                </Button>
                <Button variant="outlined" color="error">
                    reset password
                </Button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #cce6e6;
    height: calc(100vh - 48px);
    text-align: center;
    h2 {
        font-size: 25px;
        padding-top: 10px;
    }
    .btn-container {
        display: flex;
        text-align: center;
        justify-content: center;
        gap: 15px;
    }
`

export default ProfileInfo