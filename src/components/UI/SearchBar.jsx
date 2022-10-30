import React,{useState} from 'react'


function SearchBar(props) {
    const [search, setSearch] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  

  return (
    <div>
        <input
          id="outlined-basic"
          value={search}
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
        <button>Search</button>
    </div>
  )
}

SearchBar.propTypes = {}

export default SearchBar
