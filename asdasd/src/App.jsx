import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <div className="appBar">
        <h2 className="heading">Memories</h2>
        <img className="image" src={memories} alt="memories" />
      </div>
      <div>
        <div className="container-grid">
          <div className="grid">
            <div className="posts-grid">
              <Posts />
            </div>
            <div className="form-grid">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
