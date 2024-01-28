import { format } from "date-fns";
import Link from "next/link";

export default function About() {
  return (
    <div className="p-4 flex-col flex self-end justify-end items-end space-y-8">
      {projects.map((project) => (
        <Link
          key={project.title}
          href={project.url}
          className="flex md:flex-row flex-col-reverse md:items-center space-x-2 md:space-x-4 transition-all hover:opacity-40 cursor-pointer"
        >
          <p className="self-end opacity-80 whitespace-nowrap text-xs md:text-base">
            <span>{format(new Date(project.date), "MMM.yyyy")}</span> /{" "}
            <span>{project.scope}</span>
          </p>

          <p className="text-base font-bold md:text-5xl md:font-normal truncate">
            {project.title}
          </p>
        </Link>
      ))}
    </div>
  );
}

// ChIJYQ_54rhUi4IRuPbPFCSNkPg
//TODO: ADD TIMELINE SORT

const projects = [
  {
    date: "2023-12-01",
    scope: "freelance",
    title: "Clippa AI",
    url: "https://clippa.ai",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas corporis. Recusandae vero dolores sequi eveniet ullam, itaque odit nisi nobis voluptas placeat cumque animi dicta quae reprehenderit provident officiis.",
  },
  {
    date: "2023-11-01",
    scope: "commercial",
    title: "Managed",
    url: "https://withmanaged.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas corporis. Recusandae vero dolores sequi eveniet ullam, itaque odit nisi nobis voluptas placeat cumque animi dicta quae reprehenderit provident officiis.",
  },
  {
    date: "2023-08-01",
    scope: "freelance",
    title: "Pharmacist Task Force",
    url: "https://www.pharmaciststaffforce.co.uk/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas corporis. Recusandae vero dolores sequi eveniet ullam, itaque odit nisi nobis voluptas placeat cumque animi dicta quae reprehenderit provident officiis.",
  },
  {
    date: "2023-06-01",
    scope: "commercial",
    title: "Charmelle London",
    url: "https://www.charmelle.london",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas corporis. Recusandae vero dolores sequi eveniet ullam, itaque odit nisi nobis voluptas placeat cumque animi dicta quae reprehenderit provident officiis.",
  },
  {
    date: "2022-05-01",
    scope: "commercial",
    title: "Cosmetic College",
    url: "https://www.cosmetic.college",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas corporis. Recusandae vero dolores sequi eveniet ullam, itaque odit nisi nobis voluptas placeat cumque animi dicta quae reprehenderit provident officiis.",
  },
];
