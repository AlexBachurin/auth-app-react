import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';
import { useGlobalContext } from '../../contexts/AppContext';
const Registration = () => {
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
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        className='input-field'
                        error={Boolean(errors.firstName?.message)}
                        fullWidth={true}
                        label="First name"
                        variant="filled"
                        helperText={errors.firstName?.message}
                    />
                )}
            />
            <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        className='input-field'
                        error={Boolean(errors.lastName?.message)}
                        fullWidth={true}
                        label="Last name"
                        variant="filled"
                        helperText={errors.lastName?.message}
                    />
                )}
            />
            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        error={Boolean(errors.email?.message)}
                        className='input-field'
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
                        {...field}
                        className='input-field'
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
                >
                    Register
                </Button>
                <Button
                    color="inherit"
                    type="Button"
                    onClick={handleLoginShow}
                >
                    Already have an account?
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
    .input-field {
        margin-top: 10px;
    }
`

export default Registration