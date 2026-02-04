const useUniqueCategories = (data) => {
  return [...new Set(data.map(item => item.category))];
}

export default useUniqueCategories;
