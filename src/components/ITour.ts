interface ITour {
    id: number;
    name: string;
    duration: number;
    rating: number;
    numberOfReviews: number;
    price: number;
    image: string;
  }
  
  export default interface IITour {
  tour:ITour
  }