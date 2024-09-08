'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
   const router = useRouter();
   return (
      <nav>
         <div className="logo">
            <h1>
               <Link href="/">Nghiem Le Do</Link>
            </h1>
            <Image
               src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="logo"
               width={128}
               height={77}
            />
         </div>
         <Link href="/">Home</Link>
         <Link href="/about">About</Link>
         <Link href="/dashboard">Dashboard</Link>
      </nav>
   );
};

export default Navbar;
