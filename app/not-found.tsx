import Link from 'next/link';

const NotFound = () => {
   return (
      <div className="not-found">
         <h1>Oops...</h1>
         <h2>This page cannot be found :(((</h2>
         <p>
            Go back to the <Link href="/">Home page</Link>
         </p>
      </div>
   );
};

export default NotFound;
