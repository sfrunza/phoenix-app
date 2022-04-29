import prisma from 'lib/prisma';

export default async function handle(req, res) {
  const addressId = req.query.addressId;

  try {
    if (req.method === 'DELETE') {
      const address = await prisma.address.delete({
        where: { id: parseInt(addressId) },
      });
      res.json(address);
    } else if (req.method === 'GET') {
      const address = await prisma.address.findUnique({
        where: { id: parseInt(addressId) },
      });
      res.json(address);
    } else if (req.method === 'PUT') {
      const data = req.body;
      const address = await prisma.address.update({
        where: { id: Number(addressId) },
        data,
      });
      res.json(address);
    } else {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
    }
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to fetch address' });
  } finally {
    await prisma.$disconnect();
  }
}
