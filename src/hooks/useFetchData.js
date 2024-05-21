// REACT HOOKS
import { useEffect, useState } from "react";

export default function useFetchData() {
  const [destinationData, setDestinationData] = useState([]);
  const [loading, setDestinationLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("./data.json");
      const result = await response.json();
      //   console.log(result);
      setDestinationData(result);
      setDestinationLoading(false);
    } catch (error) {
      console.error("Error: fetching destination data is not possible:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [loading, destinationData];
}
