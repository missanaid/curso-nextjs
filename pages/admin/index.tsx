import Head from "next/head";
import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <MainLayout>
      <h1 className={"title"}>ADMIN</h1>
      <h1 className={"title"}>
        Ir a <Link href="/"> Home</Link>
      </h1>
      <h1 className={"title"}>
        Ir a <Link href="/about"> About</Link>
      </h1>
      <h1 className={"title"}>
        Ir a <Link href="/contact"> Contact</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/admin.js</code>
      </p>
    </MainLayout>
  );
};

export default index;
