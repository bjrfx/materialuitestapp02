import { Button, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import styled from "@emotion/styled";

function App() {
  const CrimsonButton = styled(Button) ({
    backgroundColor: "crimson",
    color: "white",
    margin: 5,
    "&:hover": {
      backgroundColor: "#E2654B"
    }
  })
  return (
    <div>
    <Button variant="text">Text</Button>
    <Button endIcon={<SettingsIcon />} size="small" color="warning" variant="contained">Settings</Button>
    <Button variant="outlined">Outlined</Button>
    <Typography variant="h1" component="p">
      It uses h1 style but it's a P tag
    </Typography>
    <CrimsonButton>Crimson</CrimsonButton>
    </div>
  );
}

export default App;
