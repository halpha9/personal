import { format } from "date-fns";

export default function Experience() {
  return (
    <div className="p-4 flex-col flex self-end justify-end items-end space-y-8 w-full pb-36 md:pb-0">
      {experience.map((work) => (
        <div key={work.company} className="flex flex-col w-full">
          <p className="text-sm md:text-3xl truncate">{work.company}</p>

          <p className="opacity-50 text-xs whitespace-nowrap py-1">
            <span>{format(new Date(work.from), "MMM.yyyy")}</span> -{" "}
            <span>
              {work.to === "Now"
                ? "Now"
                : format(new Date(work.to), "MMM.yyyy")}
            </span>
          </p>
          <span className="text-xs md:text-base">{work.title}</span>

          <div className="text-[8px] md:text-base flex flex-col space-y-2 mt-2 opacity-80">
            {work.points.map((point, index) => (
              <p key={index} className="text-xs">
                {point}
              </p>
            ))}
          </div>

          <div className="md:flex flex-row space-x-2 mt-4 hidden">
            {work.technologies.map((tech, index) => (
              <p key={index} className="text-xs">
                {tech} {index + 1 === work.technologies.length ? "" : "•"}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const experience = [
  {
    from: "2022-05-01",
    to: "2023-11-01",
    company: "Managed",
    title: "Web Developer",
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "TypeScript",
      "AWS",
      "NextJs",
    ],
    points: [
      "Collaborated with a cross-functional team to develop a robust React Native application for business management, showcasing strong teamwork and communication skills.",
      "Played a key role in UI/UX design efforts, enhancing the app's user experience and visual appeal, while ensuring a seamless and intuitive interface for users.",
      "Successfully integrated and optimised payment processing using Stripe, leveraging cloud-based solutions to ensure secure and efficient transactions, demonstrating expertise in payment gateway integration and cloud technologies.",
    ],
  },
  {
    from: "2023-12-01",
    to: "Now",
    company: "Unisys",
    title: "Software Engineer",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Remix",
      "Docker",
      "Golang",
    ],
    points: [
      "Worked within a small team to develop a scalable, high-performance web application for a large client, showcasing strong teamwork and communication skills.",
      ,
      "Utilised a variety of technologies, including Remix, Node.js, TypeScript, and Docker, to develop a robust and efficient application, demonstrating expertise in full-stack development.",
    ],
  },
];
