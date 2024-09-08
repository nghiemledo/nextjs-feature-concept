import Image from 'next/image';
import styles from '../page.module.css';

export default function AboutPage() {
   return (
      <div className={styles.page}>
         <main className={styles.main}>
            <div className={styles.title}>About page</div>
            <p className={styles.text}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit molestias enim aliquid, velit saepe laudantium tempora.
               Quos doloremque quasi reiciendis est, nobis, placeat exercitationem odit quia quae quis fugit explicabo in maiores pariatur rem
               officia, alias laudantium vel. Eveniet delectus voluptate repudiandae earum corporis maxime ipsa ab at consectetur.
            </p>
            <p className={styles.text}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vitae voluptatum nisi facere ex, hic ipsum officia velit? Nihil delectus
               consequatur possimus soluta omnis, accusamus veritatis odio nisi ducimus dolores ex perferendis iste obcaecati nobis. Autem sint sed
               tenetur a nostrum, soluta voluptatum tempore ipsum porro assumenda labore, saepe rerum!
            </p>
         </main>
      </div>
   );
}
