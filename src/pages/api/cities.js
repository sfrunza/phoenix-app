import { cities } from 'views/LandingPage/components/Cities/data';
export default async function handler(req, res) {
  res.status(200).json(cities);
}
