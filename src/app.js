const App = () => {
  return <h1>Hello, World!!!</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const apiUrl = process.env.APP_API_URL;