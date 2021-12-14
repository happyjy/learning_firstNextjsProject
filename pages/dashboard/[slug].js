import { useRouter } from 'next/router';

/*
 * dashboard/ 뒤에 어떤것이 오면 먼저 url에 해당하는 파일명을 찾고 없으면 여기에 매칭된다.
 * http://localhost:3000/dashboard/circle
 */
export default function DashBoard() {
  const router = useRouter();
  console.log(router);
  const { slug } = router.query;

  return (
    <div>
      <h1>dashboard/[slug].js: dashboard/[{slug}]</h1>
    </div>
  );
}
