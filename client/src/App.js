import { Grid } from "@mui/material";

import PostForm from "./components/PostForm/PostForm";
import Members from "./components/Members/Members";
import Posts from "./components/Posts/Posts";
import "./styles.css";

function App() {
  return (
    <Grid container spacing={2} className="App">
      <Grid item md={6}>
        <PostForm />
      </Grid>
      <Grid item md={1}>
        <Members />
      </Grid>
      <Grid item md={5}>
        <Posts />
      </Grid>
    </Grid>
  );
}

export default App;
