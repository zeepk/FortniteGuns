import { useState } from "react";
import WeaponSelect from "./WeaponSelect";
import RaritySelect from "./RaritySelect";
import Card from "./Card";
import { weapons } from "../assets/data";
import type { Weapon } from "../utils";

export default function CardContainer() {
  const [weapon1, setWeapon1] = useState<Weapon>(weapons[1]);
  const [weapon2, setWeapon2] = useState<Weapon>(weapons[4]);

  return (
    <div className="flex flex-wrap justify-around py-4 w-screen md:w-[80vw] min-h-[70vh] rounded-2xl bg-[#445144]">
      <div className="flex flex-col p-2 items-center w-full md:w-5/12 rounded-xl m-2">
        <WeaponSelect weapon={weapon1} setWeapon={setWeapon1} />
        <RaritySelect weapon={weapon1} setWeapon={setWeapon1} />
        <Card weapon={weapon1} compare={weapon2} />
      </div>
      <h1 className="text-4xl font-bold text-white my-12">VS</h1>
      <div className="flex flex-col p-2 items-center w-full md:w-5/12 rounded-xl  m-2">
        <WeaponSelect weapon={weapon2} setWeapon={setWeapon2} />
        <RaritySelect weapon={weapon2} setWeapon={setWeapon2} />
        <Card weapon={weapon2} compare={weapon1} />
      </div>
    </div>
  );
}
