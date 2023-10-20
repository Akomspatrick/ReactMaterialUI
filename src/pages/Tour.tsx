import { BottomNavigation, BottomNavigationAction, Box, Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/CustomizedAccordions";
import BasicModal from "../components/BasicModal";

const Tour=():JSX.Element=>

 
        <Container >
           <Typography variant="h3" component="h1" marginTop={3}  >Explore What God can give </Typography>
       <Box  marginTop={3} sx={{display:"flex" }}  >
          <img src="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg" 
          alt="WHATEVER"
          height={325}/>  
          <ImageCollage/>
       </Box>
       <Box>
       <Typography variant="h6" component="h4" marginTop={3} marginBottom={3} >About this ... </Typography>
       <Typography variant="subtitle1" component="p" marginTop={3} marginBottom={3} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo repudiandae ratione praesentium modi recusandae, earum quidem atque. Soluta accusantium dolor dignissimos eveniet neque! Ratione facere incidunt exercitationem nemo illum.
       Dicta quas unde minus eum officiis exercitationem voluptatem incidunt velit vel nihil rerum, aperiam quidem eos iste. Itaque tempora saepe et est ipsum, ducimus excepturi nam eaque consequatur ab aut!
       Facere dolor saepe illum aliquid cupiditate tempore magni excepturi ipsa minus magnam accusamus corporis dolorem sunt, modi, dignissimos impedit porro numquam alias iste id sapiente unde qui fugit voluptate? Aspernatur?
       Cum ratione possimus reiciendis quasi sit expedita excepturi quo et quas, praesentium debitis rerum magnam. Molestiae quia veritatis culpa ut neque earum dolor praesentium reiciendis dignissimos ullam itaque, esse vero.
       Officia cumque vero mollitia porro? Laboriosam numquam vel quaerat molestias nisi a esse, nesciunt quam, maxime modi voluptate eos saepe explicabo eligendi dicta, velit qui excepturi nihil incidunt ipsa. Voluptatibus! </Typography>
       </Box>

       <Box marginBottom={10}>
       <Typography variant="h6" component="h4" marginTop={3} marginBottom={3} >Frequently Asked  </Typography>
         <CustomizedAccordions></CustomizedAccordions>
       </Box>
       <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
 
        >
 <BasicModal></BasicModal>
        </BottomNavigation>
      </Paper>
    </Container>
    



export default Tour;