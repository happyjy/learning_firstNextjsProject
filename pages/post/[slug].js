import { useRouter } from 'next/router';

/*
 * post/ 뒤에 어떤것이 오면 먼저 url에 해당하는 파일명을 찾고 없으면 여기에 매칭된다.
 * http://localhost:3000/post/myblog
 * http://localhost:3000/post/myblog/123 이건 [...all].js에 들어오게 된다.
 */
export default function Post() {
  const router = useRouter();
  console.log(router);
  const { slug } = router.query;

  return (
    <div>
      <h1>post/[slug].js: post/[{slug}]</h1>
    </div>
  );
}
