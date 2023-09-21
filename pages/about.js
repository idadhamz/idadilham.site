import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import AboutMe from "@/components/AboutMe";
import ConnectMe from "@/components/ConnectMe";

export default function About() {
  const data = {
    title: "About | Idadilham.space",
    description:
      "About of Dadi Ilham S, Say Hello! If you want to talk to me about something that could interest me, you can send me message to @idadcode instagram.",
    url: "https://idadilham.space/about",
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <Layout data={data} suppressHydrationWarning>
      <div className="p-5 space-y-10 lg:p-12">
        <AboutMe />
        <ConnectMe />
      </div>
    </Layout>
  );
}
