export function setSearchTerm(searchTerm) {
  return {
    type: "SET_SEARCH_TERM",

    payload: searchTerm
  };
}
