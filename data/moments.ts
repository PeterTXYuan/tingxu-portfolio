export type PhotoMoment = {
  id: string;
  src: string;
  caption: string;
  alt: string;
};

// Add, remove, or reorder photos here. The PhotoWall animation and preview
// automatically adapt to the number and order of items in this array.
export const photoMoments: PhotoMoment[] = [
  {
    id: "cen-officer",
    src: "/images/selfie1.jpg",
    caption: "CEN Officer",
    alt: "Tingxu serving as a CEN officer",
  },
  {
    id: "intramural-basketball",
    src: "/images/selfie2.jpg",
    caption: "Intramural Basketball Team",
    alt: "Tingxu with his intramural basketball team",
  },
  {
    id: "traveling-china",
    src: "/images/selfie3.jpg",
    caption: "Traveling in China",
    alt: "Tingxu traveling in China",
  },
  {
    id: "chinese-new-year-seattle",
    src: "/images/selfie4.jpg",
    caption: "Chinese New Year in Seattle!",
    alt: "Celebrating Chinese New Year in Seattle",
  },
  {
    id: "vancouver-canada",
    src: "/images/selfie5.jpg",
    caption: "Vancouver, Canada",
    alt: "Tingxu visiting Vancouver, Canada",
  },
  {
    id: "skiing",
    src: "/images/selfie6.jpg",
    caption: "Skiing!",
    alt: "Tingxu on a skiing trip",
  },
  {
    id: "cherry-blossoms",
    src: "/images/selfie7.jpg",
    caption: "Cherry Blossoms 🌸",
    alt: "Tingxu under cherry blossoms",
  },
  {
    id: "cen-president",
    src: "/images/selfie8.jpg",
    caption: "CEN President",
    alt: "Tingxu serving as CEN president",
  },
];
