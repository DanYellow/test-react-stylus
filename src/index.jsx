import ReactDOM from "react-dom";

import "index.styl";

const App = () => {
  return (
    <div>
      <p className="text">Hello world</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
