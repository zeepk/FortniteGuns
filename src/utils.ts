export const rarities = [
  "common",
  "uncommon",
  "rare",
  "epic",
  "legendary",
  "transcendent",
  "exotic",
] as const;
export type Rarity = (typeof rarities)[number];

type Stats = {
  DmgPB: number;
  FiringRate: number;
  ClipSize: number;
  ReloadTime: number;
  BulletsPerCartridge: number;
  Spread: number;
  SpreadDownsights: number;
  DamageZone_Critical: number;
};

type Images = {
  icon: string;
  background: string;
};

export type Weapon = {
  id: string;
  enabled: boolean;
  name: string;
  rarity: string;
  images: Images;
  mainStats: Stats;
  description: string;
  type: string;
  gameplayTags: string[];
  searchTags: string;
};
