
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Cats from "./Components/Cats/Cats";
import FavouriteCatImages from './Components/Cats/FavouriteCatImages';
import TopBar from "./Components/SharedComponents/TopBar";
import Loading from "./Components/SharedComponents/Loading";

function App() {
  const isLoading = useSelector(state => state?.catsAssessment?.loading);
  return (
    <Container>
      <Grid >
        <Loading loading={isLoading} />
        <TopBar />
        <Routes>
          <Route path="/" element={<Cats />} />
          <Route path="/favourite" element={<FavouriteCatImages />} />
        </Routes>
      </Grid>
    </Container>
  );
}

export default App;