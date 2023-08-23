import Image from "next/image";
import { hero } from "@/data/config";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            src="/static/profile.png"
            layout="fill"
            objectFit="contain"
            alt="mbz"
          />
        </div>

        <Image
          src={isDarkMode ? "/static/icons/sun.svg" : "/static/icons/Moon.svg"}
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer toggleTheme"
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
        />
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg mb-4">{hero.desc}</p>
      <p className="text-lg">{hero.more}</p>
    </div>
  );
}
