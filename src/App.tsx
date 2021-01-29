import { Layout } from "antd";
import "../node_modules/antd/dist/antd.css";
import React, { FC, useState } from "react";

import "./App.scss";
import { EditorPage } from "./pages";
import { Footer, Header } from "./sections";

const { Content } = Layout;

const App: FC = () => {
  const [activePage] = useState(<EditorPage />);

  return (
    <Layout>
      <Header />
      <Content className="page">{activePage}</Content>
      <Footer />
    </Layout>
  );
};

export default App;
