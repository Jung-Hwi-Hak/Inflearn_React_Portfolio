import axios from "axios";
import { useEffect, useState } from "react";
import DogOpenapiListUI from "./DogOpenapiList.presenter";

export default function DogOpenapiList(): JSX.Element {
  const [dogImgUrls, setDogImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const getImg = async (): Promise<void> => {
      new Array(9).fill(1).forEach(async () => {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setDogImgUrls((prev) => [...prev, result.data.message]);
      });
    };
    void getImg();
  }, []);

  return <DogOpenapiListUI dogImgUrls={dogImgUrls} />;
}
