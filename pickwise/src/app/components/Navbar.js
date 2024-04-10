"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../nav.css";

export default function Navbar() {

	const route = useRouter();

	return (
		<nav className="navbar dark:bg-slate-950 dark:text-white flex justify-between items-center text-lg p-4" role="navigation" aria-label="main navigation">
			<div className="flex justify-between items-center">
				<Link className="flex justify-center items-center font-extrabold w-auto h-[60px] text-transparent bg-clip-text bg-gradient-to-l from-green-800 to-green-400 p-2 text-2xl" href="/">PickWise</Link>

				<div className="flex items-center flex-col gap-[5px] lg:hidden">
					<span className="block w-9 h-2 bg-black rounded-md"></span>
					<span className="block w-9 h-2 bg-black rounded-md"></span>
				</div>
			</div>
			<div className="flex justify-between items-center gap-8">
				<ul className="flex justify-between items-center gap-6 pr-8">
					<li className={route.prefetch === '/electronics' ? 'active' : ''}><Link href="/electronics">Electronics</Link></li>
					<li className={route.prefetch === '/appliances' ? 'active' : ''}><Link href="/appliances">Home Appliances</Link></li>
					<li className={route.pathname === '/decor' ? 'active' : ''}><Link href="/decor">Home Decor</Link></li>
					<li className={route.pathname === '/automobile' ? 'active' : ''}><Link href="/automobile">Automobile</Link></li>
				</ul>
				<div className="flex items-center gap-4">
					<Link className="bg-green-500 p-2 hover:bg-green-600 transition-all px-4 font-bold rounded-lg" href="/admin">Sign up</Link>
					<Link className="border-2 p-[6px] hover:scale-110 px-4 border-green-500 transition-all rounded-lg" href="/user">Login</Link>
				</div>
			</div>
		</nav>
	);
}
