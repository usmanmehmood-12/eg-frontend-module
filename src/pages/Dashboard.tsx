import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from '../lib/axios';
import { Avatar, Box, Button, Card, Typography } from '@mui/material';
import { styles } from '../styles/Dashboard.styles';

/**
 * The App Dashboard component.
 *
 * This component is only accessible if the user is authenticated (i.e. has a
 * valid token).
 *
 * It displays a welcome message from the server, and a logout button.
 *
 * @returns JSX.Element
 */
const Dashboard = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      try {
        const response = await axios.get('/');
        setWelcomeMessage(response.data);
      } catch (error) {
        console.error('Error fetching welcome message:', error);
      }
    };

    if (auth?.token) {
      fetchWelcomeMessage();
    }
  }, [auth?.token]);

  const handleLogout = () => {
    auth?.logout();
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h4" gutterBottom sx={styles.title}>
          App Dashboard
        </Typography>
      </Box>

      <Box sx={styles.cardContainer}>
        <Card sx={styles.card}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={styles.avatar}>
              {auth?.user?.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant="h5" sx={styles.greeting}>
              {welcomeMessage}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            sx={styles.logoutButton}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Card>
      </Box>
    </div>
  );
};

export default Dashboard;
