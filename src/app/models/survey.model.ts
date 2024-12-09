export interface Survey {

  id?: number; // Optional, as it's generated by the backend
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  feedback: string;
  visitDate: string | Date; // Use string to represent the date in mm/dd/yyyy format
  gradMonth: string;
  gradYear: number | string;
  likedCampus: string[]; // Array for multiple checkbox selections
  recommendLevel: string;
  interestedIn: String;
}
