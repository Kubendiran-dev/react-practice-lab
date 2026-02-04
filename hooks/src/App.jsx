import useCounter from "./assets/useCounter";
import useInput from "./assets/useInput";
import useToggle from "./assets/useToggle";
import useTimer from "./assets/useTimer";
import useSearch from "./assets/useSearch";
import usePrevious from "./assets/usePrevious";
import useUniqueCategories from "./assets/useUniqueCategories";




function App() {
  
  const { count, increment, decrement } = useCounter(0);

  
  const name = useInput("");

  
  const { value: isOn, toggle } = useToggle(false);

 
  const seconds = useTimer();

  
  const prevCount = usePrevious(count);

  
  const products = [
    { id: 1, title: "Laptop", category: "Electronics" },
    { id: 2, title: "Mobile", category: "Electronics" },
    { id: 3, title: "Shirt", category: "Clothing" },
    { id: 4, title: "Jeans", category: "Clothing" },
  ];

  const searchText = useInput("");
  const filteredProducts = useSearch(products, searchText.value);

  
  const categories = useUniqueCategories(products);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <hr />

      <h2>Input</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name.value}
        onChange={name.onChange}
      />
      <p>Name: {name.value}</p>

      <hr />

      <h2>Toggle</h2>
      <button onClick={toggle}>
        {isOn ? "ON" : "OFF"}
      </button>

      <hr />

      <h2>⏱ Timer</h2>
      <p>Seconds: {seconds}</p>

      <hr />

      <h2>Search Products</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchText.value}
        onChange={searchText.onChange}
      />

      {filteredProducts.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}

      <hr />

      <h2>Unique Categories</h2>
      {categories.map((cat, index) => (
        <p key={index}>{cat}</p>
      ))}
    </div>
  );
}

export default App;
