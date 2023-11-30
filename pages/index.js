import useSWR from "swr";
import { useRouter } from "next/router";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: character, error } = useSWR(`/api/random-character`, fetcher);
  if (error) {
    return <h1>Error loading character data</h1>;
  }

  if (!character) {
    return <h1>Loading...</h1>;
  }







  return (
    <>
      <h1>Character Details</h1>
       <p>Name: {character.name}</p>
     <p>Twitter: {character.twitterName}</p>
      <p>Geohash: {character.geohash}</p>

      </>
  )
}
