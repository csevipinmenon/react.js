import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      ` https://v6.exchangerate-api.com/v6/83ca210776f22f180e6ed39c/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates));
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
