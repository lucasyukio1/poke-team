import { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState('');

  return (
    <input
      type="text"
      value={query}
      onChange={(ev) => setQuery(ev.target.value) }
      placeholder="Search for Pokémons"
      className="py-1 px-2 rounded-lg"
    >
    </input>
  )
}

export default Searchbar