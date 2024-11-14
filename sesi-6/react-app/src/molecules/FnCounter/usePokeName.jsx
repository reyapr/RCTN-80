import { useEffect, useState } from "react";

export const usePokeName = (defaultUrl) => {
  const [url, setUrl] = useState(defaultUrl);
  const [name, setName] = useState("");

  useEffect(() => {
    setName("...Loading");
    const getDate = async () => {
      const streamRes = await fetch(url);
      const res = await streamRes.json();
      setName(res.name);
    };

    getDate();
  }, [url]);

  return {
    name,
    setUrl,
  };
};
