import imgAPI from '../images/imgAPI';

const products = [
  {
    title: 'Ut sed eros finibus',
    img: imgAPI.photosL[25],
    category: 'cat-a',
    tag: ['tag-one', 'tag-three', 'tag-four'],
    price: 50,
    rating: 5,
    check: 'check-d',
    radio: 'radio-b'
  },
  {
    title: 'Cras convallis lacus orci',
    img: imgAPI.photosL[26],
    category: 'cat-b',
    tag: ['tag-one', 'tag-one', 'tag-four'],
    price: 10,
    rating: 2,
    check: 'check-d',
    radio: 'radio-e'
  },
  {
    title: 'Integer orci justo',
    img: imgAPI.photosL[27],
    category: 'cat-b',
    tag: ['tag-one'],
    price: 100,
    rating: 5,
    check: 'check-a',
    radio: 'radio-e'
  },
  {
    title: 'Ut sed eros finibus',
    img: imgAPI.photosL[28],
    category: 'cat-c',
    tag: ['tag-one', 'tag-two'],
    price: 80,
    rating: 0,
    check: 'check-c',
    radio: 'radio-d'
  },
  {
    title: 'Cras convallis lacus orci',
    img: imgAPI.photosL[29],
    category: 'cat-d',
    tag: ['tag-two'],
    price: 20,
    rating: 5,
    check: 'check-b',
    radio: 'radio-a'
  },
  {
    title: 'Ut sed eros finibus',
    img: imgAPI.photosL[30],
    category: 'cat-e',
    tag: ['tag-one', 'tag-three'],
    price: 5,
    rating: 4,
    check: 'check-a',
    radio: 'radio-b'
  },
  {
    title: 'Pellentesque ullamcorper',
    img: imgAPI.photosL[31],
    category: 'cat-c',
    tag: ['tag-one', 'tag-four', 'tag-two'],
    price: 70,
    rating: 4,
    check: 'check-a',
    radio: 'radio-a'
  },
  {
    title: 'Cras convallis lacus orci',
    img: imgAPI.photosL[32],
    category: 'cat-d',
    tag: ['tag-one', 'tag-three'],
    price: 74,
    rating: 4,
    check: 'check-a',
    radio: 'radio-b'
  },
  {
    title: 'Ut sed eros finibus',
    img: imgAPI.photosL[33],
    category: 'cat-a',
    tag: ['tag-one', 'tag-three'],
    price: 80,
    rating: 1,
    check: 'check-b',
    radio: 'radio-b'
  },
  {
    title: 'Phasellus ante massa',
    img: imgAPI.photosL[34],
    category: 'cat-d',
    tag: ['tag-one', 'tag-three'],
    price: 40,
    rating: 4,
    check: 'check-d',
    radio: 'radio-a'
  },
  {
    title: 'Cras convallis lacus orci',
    img: imgAPI.photosL[35],
    category: 'cat-a',
    tag: ['tag-two', 'tag-three'],
    price: 40,
    rating: 0,
    check: 'check-b',
    radio: 'radio-a'
  },
  {
    title: 'Ut sed eros finibus',
    img: imgAPI.photosL[36],
    category: 'cat-a',
    tag: ['tag-one'],
    price: 70,
    rating: 0,
    check: 'check-a',
    radio: 'radio-d'
  },
  {
    title: 'Phasellus ante massa',
    img: imgAPI.photosL[37],
    category: 'cat-e',
    tag: ['tag-one', 'tag-three'],
    price: 55,
    rating: 2,
    check: 'check-e',
    radio: 'radio-d'
  },
  {
    title: 'Pellentesque ullamcorper',
    img: imgAPI.photosL[38],
    category: 'cat-a',
    tag: ['tag-three'],
    price: 90,
    rating: 0,
    check: 'check-d',
    radio: 'radio-c'
  },
  {
    title: 'Ut sed eros finibus',
    img: imgAPI.photosL[39],
    category: 'cat-a',
    tag: ['tag-two', 'tag-four'],
    price: 80,
    rating: 5,
    check: 'check-a',
    radio: 'radio-f'
  },
  {
    title: 'Cras convallis lacus orci',
    img: imgAPI.photosL[40],
    category: 'cat-b',
    tag: ['tag-one', 'tag-two', 'tag-four'],
    price: 10,
    rating: 5,
    check: 'check-e',
    radio: 'radio-a'
  },
  {
    title: 'Pellentesque ullamcorper',
    img: imgAPI.photosP[7],
    category: 'cat-c',
    tag: ['tag-one', 'tag-three'],
    price: 100,
    rating: 4,
    check: 'check-f',
    radio: 'radio-f'
  },
  {
    title: 'Ut sed eros finibus',
    img: imgAPI.photosP[8],
    category: 'cat-b',
    tag: ['tag-one', 'tag-four'],
    price: 70,
    rating: 0,
    check: 'check-d',
    radio: 'radio-b'
  },
  {
    title: 'Integer orci justo',
    img: imgAPI.photosP[9],
    category: 'cat-a',
    tag: ['tag-one', 'tag-two', 'tag-four'],
    price: 10,
    rating: 0,
    check: 'check-d',
    radio: 'radio-c'
  },
  {
    title: 'Phasellus ante massa',
    img: imgAPI.photosP[10],
    category: 'cat-f',
    tag: ['tag-one', 'tag-two'],
    price: 20,
    rating: 0,
    check: 'check-b',
    radio: 'radio-e'
  },
  {
    title: 'Pellentesque ullamcorper',
    img: imgAPI.photosP[11],
    category: 'cat-d',
    tag: ['tag-one', 'tag-two', 'tag-four'],
    price: 80,
    rating: 1,
    check: 'check-d',
    radio: 'radio-e'
  },
  {
    title: 'Ut sed eros finibus',
    img: imgAPI.photosP[12],
    category: 'cat-b',
    tag: ['tag-one', 'tag-two', 'tag-four'],
    price: 45,
    rating: 5,
    check: 'check-c',
    radio: 'radio-a'
  },
  {
    title: 'Cras convallis lacus orci',
    img: imgAPI.photosP[13],
    category: 'cat-f',
    tag: ['tag-one', 'tag-two', 'tag-four'],
    price: 40,
    rating: 0,
    check: 'check-c',
    radio: 'radio-a'
  },
  {
    title: 'Phasellus ante massa',
    img: imgAPI.photosP[14],
    category: 'cat-a',
    tag: ['tag-one', 'tag-four'],
    price: 50,
    rating: 5,
    check: 'check-f',
    radio: 'radio-c'
  },
  {
    title: 'Cras convallis lacus orci',
    img: imgAPI.photosP[18],
    category: 'cat-f',
    tag: ['tag-one', 'tag-two'],
    price: 20,
    rating: 3,
    check: 'check-a',
    radio: 'radio-c'
  },
  {
    title: 'Pellentesque ullamcorper',
    img: imgAPI.photosP[19],
    category: 'cat-b',
    tag: ['tag-one', 'tag-two'],
    price: 70,
    rating: 5,
    check: 'check-c',
    radio: 'radio-c'
  },
  {
    title: 'Ut sed eros finibus',
    img: imgAPI.photosP[20],
    category: 'cat-a',
    tag: ['tag-four'],
    price: 45,
    rating: 0,
    check: 'check-b',
    radio: 'radio-a'
  }
];

export default products;
