import speakers1 from "@/public/images/Group 3 (3).png";
import speakers2 from "@/public/images/image-removebg-preview(49) (1).png";

export const speakers = [
  {
    id: "1",
    name: "ZX9 Speaker",
    price: 4500,
    isNew: true,
    category: "speakers",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity — creating new possibilities for more pleasing and practical audio setups.",
    image: speakers1,
    features: [
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
      "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    ],
    includes: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 10m Audio Cable" },
      { quantity: 1, item: "10m Optical Cable" },
    ],
    gallery: [
      "/images/Bitmap (16).png",
      "/images/Bitmap (17).png",
      "/images/Bitmap (18).png",
    ],
  },

  {
    id: "2",
    name: "ZX7 Speaker",
    price: 3500,
    isNew: false,
    category: "speakers",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represent the top of the line powered speakers for home or studio use.",
    image: speakers2,
    features: [
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
      "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimizes acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your fingertips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    ],
    includes: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm Audio Cable" },
    ],
    gallery: [
      "/images/Bitmap (19).png",
      "/images/Bitmap (20).png",
      "/images/Bitmap (21).png",
    ],
  },
];
