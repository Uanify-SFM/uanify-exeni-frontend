import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type SidebarButtonProp = {
  name: string;
  path: string;
  icon?: IconType;
};

function SidebarButton({ name, path, icon: Icon }: SidebarButtonProp) {
  const location = useLocation();
  const isActive = (pathname: string) => location.pathname === pathname;
  return (
    <Link
      className={twMerge(
        "px-4 py-2 w-full text-left rounded-lg flex gap-x-2 items-center",
        isActive(path) ? "bg-zinc-200" : ""
      )}
      to={`${path}`}
    >
      {Icon && <Icon className="text-lg" />}
      {name}
    </Link>
  );
}

export default SidebarButton;
