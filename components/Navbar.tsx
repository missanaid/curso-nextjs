import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Admin",
    href: "/admin",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav className={styles.menu}>
        {menuItems.map((menuItem) => (
          <ActiveLink
            key={menuItem.href}
            href={menuItem.href}
            text={menuItem.text}
          />
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
