import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4">
      <Navbar />
      <main>
        <section className="w-[80%] mx-auto h-[90dvh] flex justify-center items-center">
          <div className="w-[50%] flex flex-col justify-center items-start gap-6">
            <h1 className="font-extrabold text-7xl text-green-500">Shop Smarter, <br/> Not Harder.</h1>
            <p className="text-xl text-gray-500 py-4 w-[80%]">
              PickWise is the ultimate shopping transparency service, empowering everyone to always get the best deal.
            </p>
            <button className="p-3 text-xl bg-green-600 hover:bg-green-500 rounded-lg"><Link href="/electronics">Get started</Link></button>
          </div>
          <div className="w-[50%]">
            <img src="https://shopsavvy-website-static.storage.googleapis.com/assets/hero-index-dark.webp" alt="imag"/>
          </div>
        </section>
      </main>
    </div>
  );
}
