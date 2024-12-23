export interface User {
  id:         string;
  email:      string;
  userName:   string;
  first_name: string;
  last_name:  string;
  country:    string;
  city:       string;
  phone:      string;
  address:    string;
  img:        string;
  isActive:   boolean;
  roles:      string[];
  store:     null;
  orders:    any[];
  questions: any[];
  reviews:   any[];
  created_at: Date;
  updated_at: Date;
}
