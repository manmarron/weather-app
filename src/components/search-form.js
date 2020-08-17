import React from 'react';


const SearchForm = props => {
 const {   
    searchFunction,
    handleSearch,
} = props;

  return (
    <div className="search-form">
      <input type="text" onChange={handleSearch}></input>
      <input onClick={searchFunction} type="submit" value="Search"/>
    </div>
  );
};

export default SearchForm;

