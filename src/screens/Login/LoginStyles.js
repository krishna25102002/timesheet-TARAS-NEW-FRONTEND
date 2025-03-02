export const LoginStyles = {
  container: {
    display: "flex",
    minHeight: "100vh",
  },
  leftSection: {
    flex: "1",
    background:
      "linear-gradient(135deg, rgb(59, 87, 140) 0%, rgb(29, 43, 100) 100%)",
    padding: "40px",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  rightSection: {
    flex: "1",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },
  logoContainer: {
    marginBottom: "30px",
  },
  logo: {
    width: "200px",
    height: "auto",
    marginBottom: "20px",
  },
  companyInfo: {
    marginBottom: "40px",
  },
  missionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#f1c353",
  },
  keyPoint: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    padding: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
  },
  keyPointText: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333333",
    marginBottom: "30px",
    textAlign: "center",
  },
  title1: {
    fontSize: "20px",
    fontWeight: "Light",
    fontfamily: "sans-serif",
    color: "#333333",
    marginBottom: "30px",
    textAlign: "center",
  },

  inputGroup: {
    marginBottom: "20px",
    width: "100%",
  },
  label: {
    marginBottom: "8px",
    fontSize: "16px",
    color: "#555555",
    fontWeight: "600",
    display: "block",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "15px",
    border: "1px solid #e1e1e1",
    borderRadius: "8px",
    backgroundColor: "#f8f9fa",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "rgb(59, 87, 140)",
    padding: "15px",
    borderRadius: "8px",
    width: "100%",
    marginTop: "20px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "rgb(29, 43, 100)",
    },
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
  },
  forgotPassword: {
    marginTop: "15px",
    cursor: "pointer",
  },
  forgotPasswordText: {
    color: "#4285f4",
    textAlign: "center",
    fontSize: "14px",
  },
  errorText: {
    color: "#dc3545",
    fontSize: "14px",
    marginTop: "5px",
  },
  keyPointText: {
    position: 'relative',
    paddingLeft: '20px', // Adjust padding to make space for the arrow
    // Your existing styles
  },
  keyPointTextBefore: {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '10px',
    height: '10px',
    borderRight: '2px solid black',
    borderBottom: '2px solid black',
    transform: 'rotate(45deg)',
  },
};
