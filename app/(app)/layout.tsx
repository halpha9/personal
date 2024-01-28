import ContentBox from "@/components/content-box";
import Nav from "@/components/nav";
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
    <main className="flex min-h-screen w-screen h-screen flex-col items-center justify-between md:p-24 p-4 py-8">
      <div className="z-10 w-full h-full items-center justify-between font-mono text-sm">
        <div className="corner-border min-h-full w-full p-6 md:p-10 grid-cols-2 md:grid-cols-8 grid md:gap-24">
          <div className="flex flex-col md:col-span-3 col-span-1">
            <div className="flex flex-col">
              <h1 className="text-lg font-bold md:text-5xl md:font-light whitespace-nowrap">
                Harry Alpha
              </h1>
              <p className="text-xs md:mt-2 md:text-base">Software Developer</p>

              <Nav />
            </div>
            <div className="flex flex-col w-full h-full justify-end">
              <div className="flex flex-col justify-center whitespace-nowrap">
                <p className="text-xs md:text-base">
                  {weather.temp}°C London {format(new Date(), "p")}
                </p>
                <div className="flex transition-all space-x-3">
                  {socialIcons.map(({ Icon, url }, i) => (
                    <Link
                      key={`${i}-${url}`}
                      href={url}
                      className="hover:pb-4 py-3 group transition-all"
                    >
                      <Icon className="w-4 h-4 md:w-6 md:h-6 group-hover:fill-blue-900" />
                    </Link>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <p className="font-light text-xs md:text-base">
                    harryalpha@hotmail.co.uk
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContentBox>
            <div className="">{children}</div>
          </ContentBox>
        </div>

        <ThemePicker />
      </div>
      <div className="flex-row self-end absolute bottom-4 opacity-80 right-4 hidden md:flex">
        <p className="font-light text-xs">
          © Vulcan Digital {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}

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
