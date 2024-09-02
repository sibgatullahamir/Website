import axios from "axios";
const fetchCountryCodesAndFlags = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const countries = await response.data.map((country) => ({
      name: country.name.common,
      code:
        country.idd.root +
        (country.idd.suffixes ? country.idd.suffixes[0] : ""),
      flag: country.flags.svg, // You can also use country.flags.png for PNG format
    }));

    // Sort countries to have India at the first place
    countries.sort((a, b) => {
      if (a.name === "India") return -1;
      if (b.name === "India") return 1;
      return a.name.localeCompare(b.name);
    });

    return countries;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return [];
  }
};

export default fetchCountryCodesAndFlags;
