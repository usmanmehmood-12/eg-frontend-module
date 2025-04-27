import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { AuthContext } from '../context/AuthContext';
import { extractErrorMessage } from '../utils/errorHandler';
import {
  TextField,
  Button,
  Container,
  Grid,
  Box,
  Typography,
  Avatar,
  CssBaseline,
  Link,
  Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styles } from '../styles/Signup.styles';

const defaultTheme = createTheme();

// Defined the validation schema using Yup
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  name: Yup.string().required('Name is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character',
    ),
});

/**
 * The Signup component.
 *
 * This component renders a signup form for the user to submit their information.
 * The form contains fields for email, name, and password. Once the user submits
 * the form, it will call the `signup` function from the `AuthContext` to create
 * a new user in the backend. If the signup is successful, it will call the
 * `login` function to login the user and redirect to the dashboard.
 *
 * @returns JSX.Element
 */
const Signup = () => {
  const { signup, login } = useContext(AuthContext)!;
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignup = async (values: {
    email: string;
    name: string;
    password: string;
  }) => {
    try {
      setError(null);
      await signup(values.email, values.name, values.password);
      // Once the signup is successful, login the user and redirect to the dashboard
      await login(values.email, values.password);
      navigate('/dashboard');
    } catch (error) {
      setError(extractErrorMessage(error));
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={styles.container}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={styles.typographyTitle}>
            Sign up
          </Typography>
          {error && (
            <Alert severity="error" sx={styles.alert}>
              {error}
            </Alert>
          )}
          <Formik
            initialValues={{ email: '', name: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={handleSignup}
          >
            {({ touched, errors, handleSubmit }) => (
              <Form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                <Grid container spacing={3}>
                  <Field
                    label="Email"
                    name="email"
                    as={TextField}
                    required
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    label="Name"
                    name="name"
                    as={TextField}
                    required
                    fullWidth
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <Field
                    name="password"
                    as={TextField}
                    label="Password"
                    required
                    type="password"
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={styles.button}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
          <Box sx={styles.link}>
            <Link href="/login" variant="body2">
              {'Already have an account? Sign In'}
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
