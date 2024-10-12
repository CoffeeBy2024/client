interface WorkingHours {
  id: number;
  day_of_the_week: number;
  open_hour: string;
  close_hour: string;
}

interface Shop {
  id: number;
  name: string;
  coordinates: {
    type: 'Point';
    coordinates: [number, number];
  };
  photo: string;
}
