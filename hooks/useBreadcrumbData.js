import { useRouter } from "next/router";

import navigationData from "../utils/navigation.data";

export default function useBreadcrumbData() {
  const router = useRouter();
  const { pathname } = router;

  const rootPath = navigationData.find(({ href }) => href === "/");

  //? For root path
  if (pathname === "/") {
    return [rootPath];
  }

  //? For one level sub route
  const currentPath = navigationData.find(({ href }) => href === pathname) || {
    label: "unknown path",
    href: "",
  };

  return [rootPath, currentPath];
}
