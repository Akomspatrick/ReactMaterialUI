import  Container  from "@mui/material/Container";
import { TourCard } from "./components/TourCard";
import Grid from '@mui/material/Grid'; 
function App() {
  return (
    // https://www.youtube.com/watch?v=o1chMISeTC0
    <div className="App">
    <Container>
    <Grid container spacing={3}>
      
      <TourCard></TourCard>
      <TourCard></TourCard>
      <TourCard></TourCard>
      <TourCard></TourCard>
    </Grid>
    </Container>
    </div>
  );
}

export default App;
