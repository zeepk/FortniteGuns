import type { Weapon } from "../utils";

type Props = {
  weapon: Weapon;
  compare: Weapon;
};

export default function Card({ weapon }: Props) {
  // subtract 1 from the kill time to account for the first shot
  const killTime200 = (
    (Math.ceil(200 / weapon.mainStats.DmgPB) - 1) *
    (1 / weapon.mainStats.FiringRate)
  ).toFixed(2);

  const killTime250 = (
    (Math.ceil(250 / weapon.mainStats.DmgPB) - 1) *
    (1 / weapon.mainStats.FiringRate)
  ).toFixed(2);

  return (
    <div className="flex flex-col items-center mt-4 border-4 p-2 w-10/12 border-white bg-green-300 rounded-2xl">
      <h1 className="text-xl font-semibold text-center">{weapon.name}</h1>
      <img
        src={weapon.images?.background ?? ""}
        alt={weapon.name}
        className="w-32 h-32 m-2"
      />
      <div className="font-semibold flex flex-col w-10/12 items-center">
        <div className="mt-2 flex flex-row justify-between w-full">
          <p>Kill time (250 damage): </p>
          <p>{killTime250}</p>
        </div>
        <div className="mt-2 flex flex-row justify-between w-full">
          <p>Kill time (200 damage): </p>
          <p>{killTime200}</p>
        </div>
        <div className="mt-2 flex flex-row justify-between w-full">
          <p>Damage: </p>
          <p>{weapon.mainStats.DmgPB}</p>
        </div>
        <div className="flex mt-2 flex-row justify-between w-full">
          <p>Firing rate: </p>
          <p>{weapon.mainStats.FiringRate}</p>
        </div>
        <div className="flex mt-2 flex-row justify-between w-full">
          <p>Clip size: </p>
          <p>{weapon.mainStats.ClipSize}</p>
        </div>
        <div className="flex mt-2 flex-row justify-between w-full">
          <p>Reload time: </p>
          <p>{weapon.mainStats.ReloadTime}</p>
        </div>
      </div>
    </div>
  );
}
