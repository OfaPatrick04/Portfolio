import { cn } from "@/lib/utils";
import {
  IconChartBar,
  IconChartLine,
  IconCode,
  IconGauge,
  IconLayout,
  IconLayoutDashboard,
  IconPlugConnected,
  IconServer,
  IconShoppingCart,
  IconStack,
  IconTools,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Web Strategy and Planning",
      description: "Helping clients determine website goals, ideal features, and user journey mapping",
      icon: <IconChartBar />,
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually engaging user interfaces that enhance user experience",
      icon: <IconLayout />,
    },
    {
      title: "Front-End Development",
      description:
        "Coding the client-facing part of the website and making designs functiona.",
      icon: <IconCode />,
    },
    {
      title: "Back-End Development",
      description:
        "Developing server-side code to support complex functionalities.",
      icon: <IconServer />,
    },
    {
      title: "Full-Stack Development",
      description: "Combining front-end and back-end services for a complete development solution.",
      icon: <IconStack />,
    },
    {
      title: "E-commerce Development",
      description: "Building online stores, integrating payment systems, and ensuring secure transaction processes",
      icon: <IconShoppingCart />,
    },
    {
      title: "CMS Integration",
      description:
        "Setting up CMS platforms like WordPress custom CMS solutions, allowing clients to easily manage their content.",
      icon: <IconLayoutDashboard />,
    },
    {
      title: "API Integration",
      description:
        "Connecting the website with third-party services, such as social media, payment gateways, or analytics tools, to extend functionality.",
      icon: <IconPlugConnected />,
    },
    {
      title: "Performance Optimization",
      description: "Improving website speed, ensuring quick load times, and optimizing code for performance",
      icon: <IconGauge />,
    },
    {
      title: "SEO",
      description: "Implementing SEO best practices in design and development to help websites rank higher in search engine results",
      icon: <IconChartLine />,
    },
    {
      title: "Maintenance and Updates",
      description: "Ongoing support to fix issues, update plugins, manage security, and keep the site running smoothly",
      icon: <IconTools />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4 || index === 8) && "lg:border-l dark:border-neutral-800",
        index < 8 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-purple transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
