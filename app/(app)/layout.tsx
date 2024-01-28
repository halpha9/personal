import ThemePicker from "@/components/theme-picker";
import { getWeather } from "@/lib/weather";
import { format } from "date-fns";
import Link from "next/link";
import { RiGithubLine, RiLinkedinBoxFill } from "react-icons/ri";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const weather = await getWeather();

  return (
    <main className="flex min-h-screen w-screen h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full h-full items-center justify-between font-mono text-sm">
        <div className="corner-border min-h-full w-full p-10 grid-cols-8 grid gap-24">
          <div className="flex flex-col col-span-3">
            <div className="flex flex-col">
              <h1 className="text-5xl font-light whitespace-nowrap">
                Harry Alpha
              </h1>
              <p className="mt-2">Software Developer</p>

              <div className="flex flex-col space-y-2 flex-1 mt-12 z-10">
                {navItems.map(({ name, url }, i) => (
                  <Link
                    key={`${i}-${url}`}
                    href={url}
                    className="transition-all cursor-pointer hover:opacity-80 font-semibold"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full h-full justify-end">
              <div className="flex flex-col justify-center whitespace-nowrap">
                <p>
                  {weather.temp}°C London {format(new Date(), "p")}
                </p>
                <div className="flex transition-all space-x-3">
                  {socialIcons.map(({ Icon, url }, i) => (
                    <Link
                      key={`${i}-${url}`}
                      href={url}
                      className="hover:pb-4 py-3 group transition-all"
                    >
                      <Icon className="w-6 h-6 group-hover:fill-blue-900" />
                    </Link>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <p className="font-light">harryalpha@hotmail.co.uk</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 relative">{children}</div>
        </div>

        <ThemePicker />
      </div>
      <div className="flex flex-row self-end absolute bottom-4 opacity-80 right-4">
        <p className="font-light text-xs">
          © Vulcan Digital {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}

const navItems = [
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Experience",
    url: "/experience",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const socialIcons = [
  {
    name: "Github",
    url: "https://www.github.com/halpha9",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harryalpha/",
    Icon: RiLinkedinBoxFill,
  },
];
