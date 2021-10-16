import PostForm from "./components/PostForm/PostForm";
import Members from "./components/Members/Members";
import Posts from "./components/Posts/Posts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PostForm />
      <Members />
      <Posts />
    </div>
  );
}

export default App;
