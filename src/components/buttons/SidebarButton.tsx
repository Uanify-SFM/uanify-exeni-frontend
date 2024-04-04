import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type SidebarButtonProp = {
  name: string;
  path: string;
};

function SidebarButton({ name, path }: SidebarButtonProp) {
  const location = useLocation();
  const isActive = (pathname: string) => location.pathname === pathname;
  return (
    <Link
      className={twMerge(
        "px-4 py-3 w-full text-left rounded-lg",
        isActive(path) ? "bg-zinc-300" : ""
      )}
      to={`${path}`}
    >
      {name}
    </Link>
  );
}

export default SidebarButton;
