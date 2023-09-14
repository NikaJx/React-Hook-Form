import { useForm, SubmitHandler, Controller, useFormState } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './AuthForm.css';
import { loginValidation, passwordValidation } from '../../interfaces/validation';

interface ISignInForm {
    login: string;
    password: string;
}

const AuthForm = () => {
    const { handleSubmit, control } = useForm<ISignInForm>({ mode: 'onChange' });
    const { errors } = useFormState({ control });

    const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

    return (
        <div className="auth-form">
            <Typography variant="h4" component="div">
                Sign In
            </Typography>
            <Typography
                variant="subtitle1"
                component="div"
                gutterBottom={true}
                className="auth-form__subtitle">
                To gain access
            </Typography>

            <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="login"
                    rules={loginValidation}
                    render={({ field }) => (
                        <TextField
                            label="Login"
                            size="small"
                            fullWidth={true}
                            margin="normal"
                            className="auth-form__input"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            error={!!errors.login?.message}
                            helperText={errors.login?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={passwordValidation}
                    render={({ field }) => (
                        <TextField
                            label="Password"
                            type="password"
                            size="small"
                            fullWidth={true}
                            margin="normal"
                            className="auth-form__input"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            error={!!errors.password?.message}
                            helperText={errors.password?.message}
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth={true}
                    disableElevation={true}
                    sx={{
                        marginTop: 2,
                    }}>
                    Sign In
                </Button>
            </form>
        </div>
    );
};

export default AuthForm;
