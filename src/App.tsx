import React, { FC, useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

import { EditorPage } from "./pages";
import { Header, Footer } from "./sections";

import "./App.css";

const App: FC = () => {
  const [activePage] = useState(<EditorPage />);

  return (
    <Layout>
      <Header />
      {activePage}
      <Footer />
    </Layout>
  );
};

export default App;
