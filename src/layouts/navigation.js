const pages = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '/services',
    items: [
      {
        title: 'Local Moving',
        href: '/services/local-moving',
      },
      {
        title: 'Interstate Moving',
        href: '/services/interstate-moving',
      },
      {
        title: 'Packing Services',
        href: '/services/packing-services',
      },
      {
        title: 'Storage Solutions',
        href: '/services/storage-solutions',
        isNew: true,
      },
    ],
  },
  {
    title: 'About us',
    href: '/about',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'FAQ',
    href: '/faq',
  },
];

export default pages;
