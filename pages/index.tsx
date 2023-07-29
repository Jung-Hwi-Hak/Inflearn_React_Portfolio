import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    void router.push("/boards");
  }, []);
  return <></>;
}
