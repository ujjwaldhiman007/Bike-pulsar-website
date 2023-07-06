import { FaMotorcycle, FaWpforms, FaMicrosoft } from 'react-icons/fa';
import { TbEngine } from 'react-icons/tb';
import { RiGalleryFill } from 'react-icons/ri';
import { CiCircleMore } from 'react-icons/ci';

// logo
export const logo =
  'https://seeklogo.com/images/P/pulsar-logo-D3EB344068-seeklogo.com.png';

export const sideButtons = [
  {
    id: 1,
    icon: <FaMotorcycle />,
    text: ' Bike',
    route: '/',
  },
  {
    id: 2,
    icon: <TbEngine />,
    text: ' Engine',
    route: 'features',
  },
  {
    id: 3,
    icon: <FaWpforms />,
    text: 'enquire',
    route: 'form',
  },
  {
    id: 4,
    icon: <FaMicrosoft />,
    text: 'specs',
    route: 'specs',
  },
  {
    id: 5,
    icon: <RiGalleryFill />,
    text: 'galley',
    route: 'gallery',
  },
  {
    id: 6,
    icon: <CiCircleMore />,
    text: 'more',
    route: 'more',
  },
];

export const bikeData = [
  {
    id: '1',
    color: 'white',
    img: 'https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/pulsar/pulsar-rs-200/pulsar-rs200-white/00.png',
    colorValue: '',
  },
  {
    id: '2',
    color: 'red',
    img: 'https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/pulsar/pulsar-rs-200/red/00.png',
    colorValue: '-600',
  },
  {
    id: '3',
    color: 'gray',
    img: 'https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/pulsar/pulsar-rs-200/pulsar-rs200-grey/00.png',
    colorValue: '-600',
  },
];

// features

export const features = [
  {
    id: 1,
    img: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/Bike-Feature-Navigation/Performance.ashx',
    title: 'performance',
    desc: '18 kW (24.5 PS) Power, Triple Spark DTS-i FI engine',
  },
  {
    id: 2,
    img: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/Bike-Feature-Navigation/Design.ashx',
    title: 'design',
    desc: 'Born to take on the racetrack',
  },
  {
    id: 3,
    img: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/Bike-Feature-Navigation/Technology.ashx',
    title: 'Technology',
    desc: 'Advanced liquid cooling system for seamless performance',
  },
  {
    id: 4,
    img: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/Bike-Feature-Navigation/Safety.ashx',
    title: 'safety',
    desc: 'ultra-safe braking with ABS technology',
  },
];

//  Highlights data

export const highlights = [
  {
    id: 1,
    img1: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/webp_images/pulser-rs200/performance/New-folder/Performance.ashx',
    heading1: 'performance',
    subHeading1: 'signature adrenaline rush',
    desc1:
      'Ace the race with 18 KW (24.5 PS) of raw power @ 9750 rpm, thanks to our patented Triple Spark DTS-i 4V FI engine. The engine has an advanced liquid cooling system that ensures optimum performance at all times, even at extremely high temperatures.',

    img2: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/webp_images/pulser-rs200/design/webp/Design.ashx',
    heading2: 'Design',
    subHeading2: 'Styled to race',
    desc2:
      'Get ready to face the racetrack with the sporty and race inspired design. The telescopic suspension with anti-friction bush will give you the perfect balance to carve corners and race with super comfort.',
  },

  {
    id: 3,
    img1: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/webp_images/pulser-rs200/technology/webp/Technology.ashx',
    heading1: 'Technology',
    subHeading1: 'Liquid cooled heart',
    desc1:
      'Experience feather-touch start, optimum fuel efficiency and engine temperature in all weather conditions with the advanced liquid cooling system.',

    img2: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/webp_images/pulser-rs200/safety/webp/Safety.ashx',
    heading2: 'safety',
    subHeading2: 'Precision and control',
    desc2:
      'Get ultra-safe braking performance on any surface with our Dual Channel ABS technology.',
  },
];

// specififations on the engine logo tab
export const specifications = [
  {
    id: 1,
    title: 'engine',
    head_1: 'type',
    text_1:
      'fuel injection System, triple spark 3-value 200cc BSVI DTS-i FL Engine, Liquid Colled',
    head_2: 'displacement',
    text_2: '199.5 cc',
    head_3: 'max power',
    text_3: '18 KW (24.5PS) @ 9750 rpm',
    head_4: 'max torque',
    text_4: '18.7 Nm @ 8000rpm',
  },
  {
    id: 2,
    title: 'fuel tank',
    head_1: 'total litres',
    text_1: '13 L',
    head_2: '',
    text_2: '',
    head_3: '',
    text_3: '',
    head_4: '',
    text_4: '',
  },
  {
    id: 4,
    title: 'suspension',
    head_1: 'front',
    text_1: 'Telescopic with aniti-friction bush',
    head_2: 'rear',
    text_2: 'nitrox mono shock absorber with canister',
    head_3: '',
    text_3: '',
    head_4: '',
    text_4: '',
  },
  {
    id: 5,
    title: 'brakes',
    head_1: 'front',
    text_1: 'dual channel ABS, 300 mm dia disc',
    head_2: 'rear',
    text_2: '230 mm dia disc ABS',
    head_3: '',
    text_3: '',
    head_4: '',
    text_4: '',
  },
  {
    id: 6,
    title: 'dimension',
    head_1: 'length',
    text_1: '1999 mm',
    head_2: 'width',
    text_2: '765',
    head_3: 'height',
    text_3: '1114 mm',
    head_4: 'ground clearance',
    text_4: '157 mm',
    head_5: 'wheelbase',
    text_5: '1345 mm',
    head_6: 'kerb weignt',
    text_6: '166 kg',
  },
  {
    id: 7,
    title: 'electricals',
    head_1: 'system',
    text_1: 'DC, 12V, 8Ah VRLA',
    head_2: 'headlamp',
    text_2: '55 Low beam Projector, 65W High beam Projector',
    head_3: '',
    text_3: '',
    head_4: '',
    text_4: '',
  },
];

// slider
export const SliderImages = [
  {
    id: 1,
    image:
      'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/pulsarRS200/Bike-Gallery/Thumbnail-Image/new/1.ashx',
  },
  {
    id: 2,
    image:
      'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/webp_images/pulser-rs200/gallery/webp/3.ashx',
  },
  {
    id: 3,
    image:
      'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/webp_images/pulser-rs200/gallery/webp/popup_images_PulsarRS200_2.ashx',
  },
  {
    id: 4,
    image:
      'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/webp_images/pulser-rs200/gallery/webp/popup_images_PulsarRS200_4.ashx',
  },
  {
    id: 5,
    image:
      'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/webp_images/pulser-rs200/gallery/webp/popup_images_PulsarRS200_5.ashx',
  },
];
