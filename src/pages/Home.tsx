import { Container, Typography, Grid } from "@mui/material"

import { TourCard } from "../components/TourCard"
import cities from "../data.json"   

const  Home =():JSX.Element=>{
    return(
        <div className="App">
    
    <Container  sx={{marginY:5}}>
      { 
      cities.map((city) => (
       <>
         <Typography
          variant="h4"
          component="h2"
          marginTop={5}
          marginBottom={3}>Top {city.name} Tours 
          </Typography>
          <Grid container spacing={10}>
         {
          city.tours.map((tour,index) => (
            
              <TourCard tour={tour} key={index}></TourCard>
            
          ))
         }
 
         </Grid>

         </>
      ))
      }

    </Container>
    </div>
    )
}
export default   Home;