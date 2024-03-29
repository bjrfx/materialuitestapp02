import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("dark")
  const darkThemme = createTheme ({
    palette: {
      mode: mode
    }
  })
  return (
     
        <ThemeProvider theme={darkThemme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rightbar />
        </Stack>
        <AddPost />
      </Box>
        </ThemeProvider>
      
  );
}

export default App;
