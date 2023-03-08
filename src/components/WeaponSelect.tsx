import { Dropdown } from "primereact/dropdown";
import { weapons } from "../assets/data";
import type { Weapon } from "../utils";
const uniqueWeapons: Weapon[] = [];
weapons.forEach((w) => {
  const existingWeapon = uniqueWeapons.find((uw) => uw.name === w.name);
  if (!existingWeapon) {
    uniqueWeapons.push(w);
  }
});

type Props = {
  weapon: Weapon;
  setWeapon: (weapon: Weapon) => void;
};

const options = uniqueWeapons.map((w) => ({
  ...w,
  name: w.name,
  code: w.id,
}));

export default function WeaponSelect({ weapon, setWeapon }: Props) {
  return (
    <Dropdown
      value={options.find((o) => o.name === weapon.name)}
      onChange={(e) => setWeapon(e.value)}
      options={options}
      optionLabel="name"
      placeholder="Select a Weapon"
      className="w-60 h-12 capitalize"
      filter
      itemTemplate={itemTemplate}
      valueTemplate={itemTemplate}
    />
  );
}

const itemTemplate = (weapon: Weapon) => {
  return (
    <div className="flex justify-between align-center w-full">
      <div>{weapon.name}</div>
      <img className="h-8" alt={weapon.name} src={weapon.images.icon} />
    </div>
  );
};
