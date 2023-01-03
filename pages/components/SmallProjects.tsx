import {
  ArrowTopRightOnSquareIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";

const Projects = {
  NotificationsMicroservice: {
    title: "Notifications Microservice",
    description:
      "Notifications microservice built with Nest.js, TypeScript and Prisma, during Ignite Lab.",
    link: "https://github.com/monnclaro/notifications-microservice",
  },

  LogisticsManagement: {
    title: "Logistics Management",
    description:
      "Logistics Management application that performs CRUD operations, built with Next.js & Prisma.",
    link: "https://github.com/monnclaro/logistics-management",
  },

  NLWCopa: {
    title: "NLW Copa",
    description:
      "Project developed during the Next Level Week Copa, on the Ignite trail.",
    link: "https://github.com/monnclaro/nlw-copa",
  },

  NLWeSports: {
    title: "NLW eSports",
    description:
      "Project developed during the Next Level Week eSports, on the Ignite trail.",
    link: "https://github.com/monnclaro/nlw-eSports",
  },
};

export function SmallProjects() {
  return (
    <div className="items-center pt-20 text-zinc-700 dark:text-slate-200">
      <h1 className="text-md text-center">Other small noteworthy projects ↓</h1>
      <div className="mt-6 flex gap-4">
        {Object.keys(Projects).map((key) => {
          const project = Projects[key as keyof typeof Projects];
          return (
            <div
              key={project.title}
              className="flex max-h-[400px] w-[390px] flex-col gap-4 rounded-md bg-white px-8 py-10 shadow-lg dark:bg-[#1d1f20] dark:shadow-xl"
            >
              <div className="flex justify-between">
                <FolderIcon className="h-5 w-5 text-slate-400" />
                <a href={project.link}>
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 cursor-pointer text-[#0076FF] hover:text-[#0077ffa9]" />
                </a>
              </div>
              <h1 className="text-2xl font-semibold text-black dark:text-white">
                {project.title}
              </h1>
              <p className="text-lg">{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
