export interface ServiceType {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  duration: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
}