// REACT HOOKS
import { useEffect, useState } from "react";

export default function useFetchData({ setDestinations }) {
  const [loading, setDestinationLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        const result = await response.json();
        //   console.log(result);
        setDestinations(result);
        setDestinationLoading(false);
      } catch (error) {
        console.error(
          "Error: fetching destination data is not possible:",
          error
        );
      }
    };
    fetchData();
  }, [setDestinations]);

  return loading;
}
