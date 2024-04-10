"use client"
import { useEffect, useId, useRef, useState } from "react";
import Navbar from "../components/Navbar";

export default function Product() {
  const box = useRef();
  const close = useRef();

  const openbox = () => {
    box.current.classList.toggle("hidden");
  }

  const closebox = () => {
    box.current.classList.toggle("hidden");
  }

  return (
    <div className="">
      <Navbar />
      <main className="w-full h-[90.4dvh] text-black">
        <section className="w-[85%] h-full mx-auto py-4 ">
          <div className="flex justify-center items-center">
            <h1>Compare House Decoration</h1>
          </div>

          <div className="flex justify-evenly items-center h-[85%] ">
            <div>
                <select
                  id="sel1" 
                  name="select1" 
                  className="w-[400px] h-auto p-2 px-3 lg:text-xl text-base rounded-lg"
                >
                  <option value="none">--Select-option--</option>
                </select>
            </div>
            <div>
                <select
                  id="sel1" 
                  name="select1" 
                  className="w-[400px] h-auto p-2 px-3 lg:text-xl text-base rounded-lg"
                >
                  <option value="none">--Select-option--</option>
                </select>
            </div>
          </div>
          <div>
            <button onClick={openbox} className="px-3 py-2 bg-green-500 font-medium text-xl border-2 border-black dark:border-white rounded-lg">Compare</button>
          </div>
        </section>
      </main>
      <div ref={box} className="hidden w-full min-h-dvh fixed top-0 overflow-y-scroll overflow-x-hidden bg-slate-950">
        <span ref={close} onClick={closebox} className="fixed top-0 right-0 z-20 m-6 flex justify-center items-center w-[50px] h-[50px] bg-white text-black rounded-full"><i className="fa-solid fa-xmark text-4xl "></i></span>
        <section className="w-[85%] mx-auto h-auto flex justify-evenly items-center py-6">
          <div className="w-[50%] flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Iphone imag" className="w-[450px] rounded-lg" />
            <div className="flex flex-col justify-center items-start gap-2 p-4">
              <p><strong>Name:</strong> Iphone 12</p>
              <p><strong>Description:</strong> The iPhone is a line of smartphones designed and marketed by Apple Inc. It revolutionized the mobile industry upon its initial release in 2007 </p>
              <div className="w-full flex justify-between items-center pr-2 py-2">
                <p className="bg-yellow-400 text-black p-2 rounded-md"><strong>Ratings:</strong> 4.5</p>
                <button className="bg-green-500 p-2 rounded-md text-black">Buy now</button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 px-4">
              <span className="bg-slate-900 rounded-lg shadow-md shadow-white flex flex-col items-start gap-2 p-3">
                <span className="bg-yellow-400 text-black px-2 rounded-md">4.4 <i className="fa-solid fa-star mr-1"></i></span>
                <p><strong>Alex Smith</strong></p>
                <p><i>alex.smith@example.com</i></p>
                <p>
                  Experience the unparalleled performance and stunning photography of the iPhone 12.
                </p>
              </span>
              <span className="bg-slate-900 rounded-lg shadow-md shadow-white flex flex-col items-start gap-2 p-3">
                <span className="bg-yellow-400 text-black px-2 rounded-md">4.4 <i className="fa-solid fa-star mr-1"></i></span>
                <p><strong>Emily Johnson</strong></p>
                <p><i>emily.johnson@example.com</i></p>
                <p>
                  Elevate your mobile experience with the iPhone 12's sleek design and powerful capabilities.
                </p>
              </span>
            </div>
          </div>
          <div className="w-[50%] flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1609561954579-f5d38cece8c4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Iphone imag" className="w-[450px] rounded-lg" />
            <div className="flex flex-col justify-center items-start gap-2 p-4">
              <p><strong>Name:</strong> SamSung Galaxy A12</p>
              <p><strong>Description:</strong> Experience the Samsung Galaxy A12's impressive display and long-lasting battery life. Discover more about its features here: Samsung Galaxy A12. </p>
              <div className="w-full flex justify-between items-center pr-2 py-2">
                <p className="bg-yellow-400 text-black p-2 rounded-md"><strong>Ratings:</strong> 4.5</p>
                <button className="bg-green-500 p-2 rounded-md text-black">Buy now</button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 px-4">
              <span className="bg-slate-900 rounded-lg shadow-md shadow-white flex flex-col items-start gap-2 p-3">
                <span className="bg-yellow-400 text-black px-2 rounded-md">4.4 <i className="fa-solid fa-star mr-1"></i></span>
                <p><strong>Juan Martinez</strong></p>
                <p><i>juan.martinez@example.com</i></p>
                <p>
                  The Samsung Galaxy A12's generous screen size and vibrant display enhance my gaming and streaming experience.
                </p>
              </span>
              <span className="bg-slate-900 rounded-lg shadow-md shadow-white flex flex-col items-start gap-2 p-3">
                <span className="bg-yellow-400 text-black px-2 rounded-md">4.4 <i className="fa-solid fa-star mr-1"></i></span>
                <p><strong>Sakura Tanaka</strong></p>
                <p><i>sakura.tanaka@example.com</i></p>
                <p>
                  I'm impressed by the Samsung Galaxy A12's durability and sturdy build quality. Its smooth performance and ample storage meet all my needs.</p>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
