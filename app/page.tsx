import Link from 'next/link';
import styles from './styles/home.module.css';

export default function Home() {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>Home page</h1>
         <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit molestias enim aliquid, velit saepe laudantium tempora. Quos
            doloremque quasi reiciendis est, nobis, placeat exercitationem odit quia quae quis fugit explicabo in maiores pariatur rem officia, alias
            laudantium vel. Eveniet delectus voluptate repudiandae earum corporis maxime ipsa ab at consectetur.
         </p>
         <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vitae voluptatum nisi facere ex, hic ipsum officia velit? Nihil delectus
            consequatur possimus soluta omnis, accusamus veritatis odio nisi ducimus dolores ex perferendis iste obcaecati nobis. Autem sint sed
            tenetur a nostrum, soluta voluptatum tempore ipsum porro assumenda labore, saepe rerum!
         </p>
         <Link href="/dashboard">
            <div className={styles.btn}>See List</div>
         </Link>
      </div>
   );
}
