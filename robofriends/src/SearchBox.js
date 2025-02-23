function SearchBox({handleInput}) {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={handleInput}
      />
    </div>
  );
}

export default SearchBox;
