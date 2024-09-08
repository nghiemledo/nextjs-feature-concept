import { Suspense } from 'react';
import Link from 'next/link';
import styles from '../styles/dashboard.module.css';

async function getData() {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   if (!res.ok) {
      throw new Error('Failed to fetch data !');
   }
   return res.json();
}
export default async function DashBoadrdPage() {
   const data = await getData();

   return (
      <div>
         <h1>All list post</h1>
         <Suspense fallback={<div>Loading ...</div>}>
            {(data || []).map((item: any) => (
               <Link href={'/dashboard/' + item?.id} key={item?.userId}>
                  <h3 className={styles.single}>{item?.title}</h3>
               </Link>
            ))}
         </Suspense>
      </div>
   );
}
