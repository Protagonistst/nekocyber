import collarImg from '../assets/products/collart.png';
import armorImg from '../assets/products/armor.png';
import earImplantsImg from '../assets/products/earp.png';
import holoTagPendantImg from '../assets/products/collar.png';
import cyberClawProtectorsImg from '../assets/products/clawp.png';
import bioSyncCollarImg from '../assets/products/biosynccollar.png';
import razorEdgeArmorImg from '../assets/products/razorarm.png';
import neuralWhiskerGuardsImg from '../assets/products/whisker.png';
import technoTrailTailCoverImg from '../assets/products/tail.png';
import chromaShiftCollarImg from '../assets/products/chromecollar.png';
import spectrArmorSuitImg from '../assets/products/armor3.png';
import dataCorePetTagImg from '../assets/products/tag.png';


export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Collars' | 'Armor' | 'Accessories';
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "NeonPulse Collar",
    description: "LED-infused collar with reactive sound patterns. Pulses to music and ambient sounds, creating a light show that reacts to your cat's environment.",
    price: 39.99,
    image: collarImg,
    category: "Collars",
    featured: true
  },
  {
    id: 2,
    name: "QuantumShield Armor",
    description: "Lightweight flexible vest with EMP protection and holographic display. Shows your cat's mood and biometric data through an accompanying app.",
    price: 89.99,
    image: armorImg,
    category: "Armor",
    featured: true
  },
  {
    id: 3,
    name: "NeuroByte Ear Implants",
    description: "Magnetic clip-on ear extensions with fiber optic tips that react to sound. Give your cat that extra digital edge without any discomfort.",
    price: 29.99,
    image: earImplantsImg,
    category: "Accessories",
    featured: false
  },
  {
    id: 4,
    name: "Holo-Tag Pendant",
    description: "Interactive ID tag with built-in holographic projector. Displays owner info, vaccination status, and customizable 3D avatars.",
    price: 45.99,
    image: holoTagPendantImg,
    category: "Accessories",
    featured: true
  },
  {
    id: 5,
    name: "CyberClaw Protectors",
    description: "Illuminated claw caps that glow in the dark and create light trails when your cat moves in low light. Safe and comfortable.",
    price: 19.99,
    image: cyberClawProtectorsImg,
    category: "Accessories",
    featured: false
  },
  {
    id: 6,
    name: "BioSync Collar",
    description: "Health-monitoring collar that tracks heart rate, activity levels, and sleep patterns. Silent alarm alerts you when your cat needs attention.",
    price: 59.99,
    image: bioSyncCollarImg,
    category: "Collars",
    featured: false
  },
  {
    id: 7,
    name: "RazorEdge Armor",
    description: "Sleek exoskeleton-inspired jacket with reflective panels and adjustable fit. Protects against scratches while looking incredibly futuristic.",
    price: 79.99,
    image: razorEdgeArmorImg,
    category: "Armor",
    featured: false
  },
  {
    id: 8,
    name: "Neural Whisker Guards",
    description: "Whisker guards with built-in LED lighting and static electricity dispersal. Helps prevent whisker fatigue while adding cybernetic style.",
    price: 24.99,
    image: neuralWhiskerGuardsImg,
    category: "Accessories",
    featured: false
  },
  {
    id: 9,
    name: "TechnoTrail Tail Cover",
    description: "Segmented tail attachment that adds length and luminescent properties to your cat's tail. Glows and pulses as your cat moves.",
    price: 34.99,
    image: technoTrailTailCoverImg,
    category: "Accessories",
    featured: false
  },
  {
    id: 10,
    name: "ChromaShift Collar",
    description: "Color-changing collar that shifts based on temperature, mood, and time of day. Syncs with your smart home to match your lighting.",
    price: 49.99,
    image: chromaShiftCollarImg,
    category: "Collars",
    featured: true
  },
  {
    id: 11,
    name: "SpectrArmor Suit",
    description: "Full-body light armor with adjustable panels and built-in cooling system. Perfect for the cat that needs extra protection with maximum style.",
    price: 99.99,
    image: spectrArmorSuitImg,
    category: "Armor",
    featured: false
  },
  {
    id: 12,
    name: "DataCore Pet Tag",
    description: "Advanced ID tag with embedded NFC chip and emergency contact display. Stores medical information and can be updated remotely.",
    price: 32.99,
    image: dataCorePetTagImg,
    category: "Accessories",
    featured: false
  }
]; 