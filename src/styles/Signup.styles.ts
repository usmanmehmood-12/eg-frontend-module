export const styles = {
  container: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 4,
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
    mt: 4,
  },
  avatar: {
    m: 1,
    width: 56,
    height: 56,
    background: 'linear-gradient(90deg, #F9A825 0%, #F57C00 50%, #D84315 100%)',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
    color: 'white',
  },
  typographyTitle: {
    mt: 1,
    fontWeight: 'bold',
  },
  button: {
    mt: 3,
    mb: 2,
    background: '#FF5722',
    borderRadius: '8px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      background: '#E64A19',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
    },
  },
  alert: {
    width: '100%',
    mb: 2,
  },
  link: {
    mt: 2,
    textAlign: 'center',
    display: 'block',
  },
};
