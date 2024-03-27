import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';

const sample = [
  {
    id: 'company',
    name: 'company',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'about',
        link: link.about
      },
      {
        name: 'career',
        link: link.career
      },
      {
        name: 'team',
        link: link.team
      },
      {
        name: 'profile',
        link: link.profile
      },
      {
        name: 'blog',
        link: link.blog
      },
      {
        name: 'blog_grid',
        link: link.blogGrid
      },
      {
        name: 'blog_detail',
        link: link.blogDetail
      }
    ],
  },
  {
    id: 'form',
    name: 'form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.login
      },
      {
        name: 'register',
        link: link.register
      },
      {
        name: 'contact',
        link: link.contact
      },
    ],
  },
  {
    id: 'collection',
    name: 'collection',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'Space',
        link: link.space
      },
      {
        name: 'product',
        link: link.product
      },
      {
        name: 'product_detail',
        link: link.productDetail
      },
      {
        name: 'Campaign',
        link: link.productDetailSpace
      },
      {
        name: 'services',
        link: link.services
      },
      {
        name: 'service_detail',
        link: link.serviceDetail
      },
      {
        name: 'portfolio',
        link: link.portfolio
      },
      {
        name: 'portfolio_detail',
        link: link.portfolioDetail
      }
    ],
  },
  {
    id: 'utilities',
    name: 'utilities',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'pricing',
        link: link.pricing
      },
      {
        name: 'faq',
        link: link.faq
      },
      {
        name: 'maintenance',
        link: link.maintenance
      },
      {
        name: 'coming soon',
        link: link.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
];

export default sample;
