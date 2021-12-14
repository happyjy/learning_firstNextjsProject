import { useRouter } from 'next/router';

/*
 * http://localhost:3000/jyoon/settings
 */
export default function UsernameSettings() {
  const router = useRouter();
  console.log(router);
  const { username } = router.query;
  //username: 폴더명(url)

  return (
    <div>
      <h1>{username}/UsernameSettings</h1>
    </div>
  );
}
