import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
// import LoadingBar from "react-top-loading-bar";
// import NavBar from "./components/NavBar";
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [, setProgress] = useState(0);
  const getNewScomponent = (category) => {
    return (
      <News
        setProgress={setProgress}
        apiKey={apiKey}
        key={category}
        pageSize={pageSize}
        country="in"
        category={category}
      />
    );
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={getNewScomponent("general")} />
            <Route path="/business" element={getNewScomponent("business")} />
            <Route
              path="/entertainment" element={getNewScomponent("entertainment")}/>
            <Route path="/health" element={getNewScomponent("health")} />
            <Route path="/science" element={getNewScomponent("science")} />
            <Route path="/sports" element={getNewScomponent("sports")} />
            <Route path="/technology" element={getNewScomponent("technology")} />
            <Route path="/general" element={getNewScomponent("general")} />
          </Route>
          {/* <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            } */}
          {/* /> */}
          {/* <Route path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
