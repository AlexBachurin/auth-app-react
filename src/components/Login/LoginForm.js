import styled from 'styled-components'
import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validation';
import { useGlobalContext } from '../../contexts/AppContext';
const LoginForm = () => {
    const { handleLoginShow } = useGlobalContext();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });
    return (
        <FormWrapper>
            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        error={Boolean(errors.email?.message)}
                        fullWidth={true}
                        type="email"
                        label="Email"
                        variant="filled"
                        helperText={errors.email?.message}
                    />
                )}
            />
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        sx={{
                            marginTop: '20px'
                        }}
                        {...field}
                        error={Boolean(errors.password?.message)}
                        type="password"
                        fullWidth={true}
                        label="Password"
                        variant="filled"
                        helperText={errors.password?.message}
                    />
                )}
            />
            <div className="btn-container">
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                // disabled={isLoading}
                >
                    Login
                </Button>
                <Button
                    color="inherit"
                    type="Button"
                    onClick={handleLoginShow}
                >
                    Create an account
                </Button>
            </div>
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
    background: #fff;
    max-width: 400px;
    margin: 0 auto;
    .btn-container {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
`
export default LoginForm