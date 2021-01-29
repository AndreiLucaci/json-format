import { Layout } from "antd";
import "../node_modules/antd/dist/antd.css";
import React, { FC, useState } from "react";

import "./App.css";
import { EditorPage } from "./pages";
import { Footer, Header } from "./sections";

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
