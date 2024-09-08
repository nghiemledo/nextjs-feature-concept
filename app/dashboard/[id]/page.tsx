async function getPost(id: string) {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
   if (!res.ok) {
      throw new Error('Failed to fetch data !');
   }
   return res.json();
}

export default async function DashBoardSDetailPage({ params: { id } }: { params: { id: string } }) {
   const post = await getPost(id);
   return (
      <div>
         <h1>{post?.id}</h1>
         <p>{post?.title}</p>
         <p>{post?.body}</p>
      </div>
   );
}
