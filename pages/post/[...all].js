import { useRouter } from 'next/router';

/*
  http://localhost:3000/post/as
  http://localhost:3000/post/as/asd
*/
export default function PostAll() {
  const router = useRouter();
  const { all } = router.query;

  console.log(router);
  console.log(all);
  return (
    <div>
      <h1>post[...all].js: {all?.join('/')}</h1>
    </div>
  );
}
