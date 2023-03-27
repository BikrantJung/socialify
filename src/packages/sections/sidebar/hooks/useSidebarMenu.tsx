import {
  IconBell,
  IconCompass,
  IconLayout2,
  IconUser,
} from "@tabler/icons-react";
import { useRouter } from "next/router";
interface ISidebarMenuData {
  link: string;
  title: string;
  icon: JSX.Element;
  active: boolean;
}

interface SidebarMenuDataProps {
  username: string;
}

const useSidebarMenu = ({ username }: SidebarMenuDataProps) => {
  const router = useRouter();
  const splittedRouter = router.pathname.split("/");

  const sidebarMenuData: Array<ISidebarMenuData> = [
    {
      icon: <IconLayout2 className="icon" />,
      link: "/",
      title: "Feed",
      active: router.pathname === "/",
    },
    {
      icon: <IconUser className="icon" />,
      link: `/${username}/friends`,
      title: "Friends",
      active: splittedRouter[-1] === "friends",
    },
    {
      icon: <IconCompass className="icon" />,
      link: "/explore",
      title: "Explore",
      active: splittedRouter[-1] === "explore",
    },
    {
      icon: <IconBell className="icon" />,
      link: "/notifications",
      title: "Notifications",
      active: splittedRouter[-1] === "notifications",
    },
  ];
  return { sidebarMenuData };
};

export { useSidebarMenu };
