import headphones1 from "@/public/images/Group 3.png";
import headphones2 from "@/public/images/Group 3 (1).png";
import headphones3 from "@/public/images/Group 3 (2).png";

export const headphones = [
  {
    id: "1",
    name: "XX99 Mark II Headphones",
    price: 2999,
    isNew: true,
    category: "headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience",
    image: headphones1,
    features: [
            "As the headphones all others are measured against, the XX59 Mark II demonstrates over five decades of expertise in headphone engineering, refining, and crafting. The resultis a pair of headphones that delivers an unparalleled listening experience, from crisp highs to deep, rich bass tones that are uniquely balanced for professional or personal use..",
            "From the handcrafted materials our artisans use to the robust metal headband with fineleather stitching, these headphones are built for absolute comfort and extraordinarystrength. The ear cushions work together to deliver comfort and enhance passive noiseisolation. The lightweight design ensures all-day pleasure for extended use, makingmusic immersion deeply engaging. To add to your convenience, a specially tuned cable isincluded with a balanced gold connector."
                ],
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm Audio Cable" }
    ],
    gallery: [
      "/images/Bitmap (6).png",
      "/images/Bitmap (7).png",
      "/images/Bitmap (8).png",
    ],
  },

  {
    id: "2",
    name: "XX99 Mark I Headphones",
    price: 1750,
    isNew: false,
    category: "headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: headphones2,
    features: [
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back  headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz",
      "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
    ],
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm Audio Cable" }
    ],
    gallery: [
      "/images/Bitmap (3).png",,
      "/images/Bitmap (4).png",
      "/images/Bitmap (5).png"
    ],
  },

  {
    id: "3",
    name: "XX59 Headphones",
    price: 899,
    isNew: false,
    category: "headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: headphones3,
    features: [
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
      "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
    ],
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm Audio Cable" }

    ],
    gallery: [
      "/images/Bitmap (13).png",
      "/images/Bitmap (14).png",
      "/images/Bitmap (15).png"
    ],
  },
];
