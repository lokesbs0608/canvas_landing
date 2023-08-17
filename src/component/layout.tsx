import { useRouter } from "next/router";

import Navbar from "./header";
import Footer from "./footer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { asPath } = useRouter();

  return (
    <div>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* {asPath != "/checkout" && <Footer />} */}
    </div>
  );
}
