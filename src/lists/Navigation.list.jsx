import { useRouter } from "next/router";

import NavigationListItem from "../listitems/Navigation.listItem";

import navigationData from "../../utils/navigation.data";

const NavigationList = () => {
  const router = useRouter();

  return navigationData.map(({ label, href }) => (
    <NavigationListItem
      href={href}
      key={href}
      current={router.pathname === href ? 1 : 0}
    >
      {label}
    </NavigationListItem>
  ));
};

export default NavigationList;
