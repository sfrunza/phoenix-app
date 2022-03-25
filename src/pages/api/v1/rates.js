export default async function handler(req, res) {
  const response = await fetch('http://localhost:3001/api/v1/prices');
  const data = response;
  console.log(data);
  res.status(200).json(data);
}
