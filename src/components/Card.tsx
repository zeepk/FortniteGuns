import { useState, useEffect } from "react";
import type { Weapon } from "../utils";

type Props = {
  weapon: Weapon;
  compare: Weapon;
};

type StatInfo = {
  title: string;
  stat: (weapon: Weapon) => string | number;
  lowerIsBetter?: boolean;
};

const isBetter = (a: number, b: number, lowerIsBetter?: boolean) =>
  lowerIsBetter ? a < b : a > b;

// subtract 1 from the kill time to account for the first shot
const killTime = (weapon: Weapon, health: number) =>
  (
    (Math.ceil(health / weapon.mainStats.DmgPB) - 1) *
    (1 / weapon.mainStats.FiringRate)
  ).toFixed(2);

const statsToShow: StatInfo[] = [
  {
    title: "Kill time (200 dmg)",
    stat: (weapon: Weapon) => killTime(weapon, 200),
    lowerIsBetter: true,
  },
  {
    title: "Kill time (250 dmg)",
    stat: (weapon: Weapon) => killTime(weapon, 250),
    lowerIsBetter: true,
  },
  {
    title: "Damage",
    stat: (weapon: Weapon) => weapon.mainStats.DmgPB,
    lowerIsBetter: false,
  },
  {
    title: "Firing rate (shots/sec)",
    stat: (weapon: Weapon) => weapon.mainStats.FiringRate,
    lowerIsBetter: false,
  },
  {
    title: "Clip size",
    stat: (weapon: Weapon) => weapon.mainStats.ClipSize,
    lowerIsBetter: false,
  },
  {
    title: "Reload time",
    stat: (weapon: Weapon) => weapon.mainStats.ReloadTime,
    lowerIsBetter: true,
  },
];

export default function Card({ weapon, compare }: Props) {
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    if (initialLoad) {
      setLoading(true);
    } else {
      setInitialLoad(true);
    }
  }, [weapon]);

  return (
    <div className="text-white flex flex-col items-center mt-4 border-4 py-2 w-11/12 border-white bg-green-900 rounded-2xl">
      <h1 className="text-xl font-semibold text-center">{weapon.name}</h1>

      <div
        className="w-32 h-32 m-2 flex align-center justify-center"
        style={{ display: loading ? "block" : "none" }}
      >
        <div
          className="ml-12 mt-12 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
      <img
        src={weapon.images?.background ?? ""}
        alt={weapon.name}
        className="w-32 h-32 m-2"
        style={{ display: loading ? "none" : "block" }}
        onLoad={() => setLoading(false)}
      />
      <div className="font-semibold flex flex-col w-full items-center">
        {statsToShow.map((s) => {
          return (
            <div
              key={s.title}
              className={`${
                isBetter(
                  Number(s.stat(weapon)),
                  Number(s.stat(compare)),
                  s.lowerIsBetter
                )
                  ? "bg-green-600"
                  : ""
              } px-4 py-2 mt-2 flex flex-row justify-between w-full`}
            >
              <p>{s.title}</p>
              <p>
                {s.stat(weapon)}
                {s.title.includes("time") ? " s" : ""}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
