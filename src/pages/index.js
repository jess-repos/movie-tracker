import Head from "next/head";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>MV</title>
      </Head>
      <div id="main">
        <Home />
      </div>
      <Navbar />
    </>
  );
}
