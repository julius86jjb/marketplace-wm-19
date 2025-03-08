
export interface Category {
  id:               string;
  name:             string;
  department_title: string;
  slug:             string;
  img:              string;
  inventory:        string;
  views:            string;
  created_at:       Date;
  updated_at:       Date;
  department:       Department;
}

export interface Department {
  id:         string;
  name:       string;
  titles:     string[];
  slug:       string;
  img:        string;
  icon:       string;
  views:      string;
  created_at: Date;
  updated_at: Date;
}
