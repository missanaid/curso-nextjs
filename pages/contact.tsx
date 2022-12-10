import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

const about = () => {
  return (
    <MainLayout>
      <h1 className={"title"}>CONTACT</h1>
      <h1 className={"title"}>
        Ir a <Link href="/"> Home</Link>
      </h1>
      <h1 className={"title"}>
        Ir a <Link href="/about"> About</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/contact.js</code>
      </p>
    </MainLayout>
  );
};

export default about;
