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
  }
];

export const mediaData = [
  {
    type: 'media',
    img: 'https://cdn.galxe.com/galaxy/payrue/8ee5f499-7545-4f9b-b9f1-f4896e7543fc.jpeg',
    title: 'Random lottery',
    link: 'total: 5',
    href: link.portfolioDetail,
    size: 'short',
    category: 'cat1'
  }
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
