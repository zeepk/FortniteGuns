import { Dropdown } from "primereact/dropdown";
import { weapons } from "../assets/data";
import { Weapon, rarities } from "../utils";

type Props = {
  weapon: Weapon;
  setWeapon: (weapon: Weapon) => void;
};

export default function WeaponSelect({ weapon, setWeapon }: Props) {
  const weaponRarities = weapons.filter((w) => w.name === weapon.name);

  const options = rarities
    .filter((r) => weaponRarities.map((w) => w.rarity).includes(r))
    .map((w) => ({
      name: w,
      code: w,
      icon: weaponRarities.find((wr) => wr.rarity === w)?.images.background,
    }));

  return (
    <Dropdown
      value={options.find((o) => o.name === weapon.rarity)}
      onChange={(e) =>
        setWeapon(
          weaponRarities.find((w) => w.rarity === e.value.name) ??
            weaponRarities[0]
        )
      }
      options={options}
      optionLabel="name"
      placeholder="Select a Weapon"
      className="w-60 h-12 capitalize my-2"
      itemTemplate={itemTemplate}
      valueTemplate={itemTemplate}
    />
  );
}

const itemTemplate = (option: any) => {
  return (
    <div className="flex justify-between align-center w-full">
      <div>{option.name}</div>
      <img className="h-8" alt={option.name} src={option.icon} />
    </div>
  );
};
