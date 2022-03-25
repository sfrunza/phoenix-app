import { cities } from 'views/Rental/components/Cities/data';
export default async function handler(req, res) {
  res.status(200).json(cities);
}
