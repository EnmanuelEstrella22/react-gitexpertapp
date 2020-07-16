import { useState } from "react";
import { useEffect } from "react";
import { getGrifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGrifs(category).then((imgs) => {
      console.log(imgs);
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  return state;
};

export default useFetchGifs;
