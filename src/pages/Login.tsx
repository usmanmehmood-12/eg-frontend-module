import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { extractErrorMessage } from '../utils/errorHandler';
import { AuthContext } from '../context/AuthContext';
import {
  TextField,
  Button,
  createTheme,
  Avatar,
  Typography,
  Box,
  ThemeProvider,
  Link,
  Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styles } from '../styles/Login.styles';

const defaultTheme = createTheme();

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

/**
 * The Login component.
 *
 * This component renders a login form for the user to submit their login
 * credentials. The form contains fields for email and password, and a submit
 * button.
 *
 * @returns JSX.Element
 */
const Login = () => {
  const { login } = useContext(AuthContext)!;
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      setError(null);
      await login(values.email, values.password);
      navigate('/dashboard');
    } catch (error) {
      setError(extractErrorMessage(error));
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={styles.container}>
        {/* Left Background Image */}
        <Box sx={styles.backgroundImageBox} />

        {/* Right Side Form */}
        <Box sx={styles.formBox}>
          <Box sx={styles.formCard}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Avatar sx={styles.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={styles.title}>
                Sign in
              </Typography>
              {error && (
                <Alert severity="error" sx={styles.alert}>
                  {error}
                </Alert>
              )}
            </Box>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={LoginSchema}
              onSubmit={handleLogin}
            >
              {({ errors, touched }) => (
                <Form style={{ width: '100%' }}>
                  <Field name="email">
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        label="Email"
                        fullWidth
                        margin="normal"
                        required
                        sx={{ borderRadius: 2 }}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    )}
                  </Field>
                  <Field name="password">
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        required
                        sx={{ borderRadius: 2 }}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    )}
                  </Field>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={styles.button}
                  >
                    Sign In
                  </Button>
                </Form>
              )}
            </Formik>
            <Box sx={styles.link}>
              <Link href="/" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
