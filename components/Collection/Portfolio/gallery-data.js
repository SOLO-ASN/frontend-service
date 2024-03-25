import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';

export const collectionData = [
  {
    type: 'collection',
    img: imgAPI.photosP[19],
    avatar: imgAPI.logos[10],
    title: 'Lorem ipsum',
    bgColor: 'triple-main',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. ',
    count: '20',
    items: [imgAPI.photosP[23], imgAPI.photosP[24], imgAPI.photosP[19], imgAPI.photosL[29]],
    href: link.portfolioDetail,
  },
  {
    type: 'collection',
    img: imgAPI.photosL[30],
    avatar: imgAPI.avatar[4],
    bgColor: 'secondary-dark',
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. ',
    count: '20',
    items: [imgAPI.photosL[32], imgAPI.photosS[1], imgAPI.photosP[27], imgAPI.photosS[5]],
    href: link.portfolioDetail,
  },
  {
    type: 'collection',
    img: imgAPI.photosL[7],
    avatar: imgAPI.avatar[7],
    title: 'Lorem ipsum',
    bgColor: 'primary-dark',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. ',
    count: '20',
    items: [imgAPI.photosL[8], imgAPI.photosP[10], imgAPI.photosL[1], imgAPI.photosL[7]],
    href: link.portfolioDetail,
  },
  {
    type: 'collection',
    img: imgAPI.photosL[7],
    avatar: imgAPI.avatar[7],
    title: 'Lorem ipsum',
    bgColor: 'primary-dark',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. ',
    count: '20',
    items: [imgAPI.photosL[8], imgAPI.photosP[10], imgAPI.photosL[1], imgAPI.photosL[7]],
    href: link.portfolioDetail,
  },
];

export const mediaData = [
  {
    type: 'media',
    img: imgAPI.photosL[4],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    href: link.portfolioDetail,
    size: 'short',
    category: 'cat1'
  },
  {
    type: 'media',
    img: imgAPI.photosL[41],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    href: link.portfolioDetail,
    size: 'medium',
    category: 'cat2'
  },
  {
    type: 'media',
    img: imgAPI.photosL[34],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    href: link.portfolioDetail,
    size: 'medium',
    category: 'cat3'
  },
  {
    type: 'media',
    img: imgAPI.photosS[12],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    href: link.portfolioDetail,
    size: 'short',
    category: 'cat1'
  },
  {
    type: 'media',
    img: imgAPI.photosS[2],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    href: link.portfolioDetail,
    size: 'medium',
    category: 'cat2'
  },
  {
    type: 'media',
    img: imgAPI.photosL[5],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    href: link.portfolioDetail,
    size: 'medium',
    category: 'cat3'
  },
  {
    type: 'media',
    img: imgAPI.photosP[2],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    href: link.portfolioDetail,
    size: 'long',
    category: 'cat2'
  },
  {
    type: 'media',
    img: imgAPI.photosL[32],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    href: link.portfolioDetail,
    size: 'medium',
    category: 'cat1'
  },
];

function getLongestArray(...arrays) {
  let longestArray = arrays[0]; // Assume the first array is the longest

  for (let i = 1; i < arrays.length; i += 1) {
    if (arrays[i].length > longestArray.length) {
      longestArray = arrays[i];
    }
  }

  return longestArray;
}

export const longestArray = getLongestArray(collectionData, mediaData);

export default {
  collectionData,
  mediaData,
  longestArray
};
