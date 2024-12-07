export interface Survey {
  //id?: number; // Optional, since it's auto-generated in the backend
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  surveyDate: Date; // Can be a string or Date depending on how you handle dates
  likedCampus: string; // Example: Comma-separated values or a JSON string
  interestedIn: string; // Single choice, like radio button value
  recommendLevel: string; // Dropdown selection
  additionalComments?: string; // Optional field
}
