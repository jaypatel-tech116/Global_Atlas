import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postAPI";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";
import { Pagination } from "../components/UI/Pagination";

export const Country = () => {
  // ✅ all hooks at the top
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  // fetch countries
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  // reset to page 1 on search/filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);

  // scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // filter and search
  const searchCountry = (country) =>
    search
      ? country.name.common.toLowerCase().includes(search.toLowerCase())
      : country;

  const filterRegion = (country) =>
    filter === "all" ? country : country.region === filter;

  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  // pagination
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);
  const indexOfLast = currentPage * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirst, indexOfLast);

  // ✅ early return for loader (hooks are already declared above)
  if (isPending) return <Loader />;

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      {filteredCountries.length === 0 && (
        <p className="not-found-message">
          We couldn’t find any matching countries. Try adjusting your search or filter.
        </p>
      )}

      <ul className="grid grid-three-cols">
        {currentCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};
