import "./App.css";
import Heading from "./Components/Heading";
import Layout from "./Components/Layout";
import Section from "./Components/Section";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const userName = "Khangaikhuu";
  return (
    <div className="App">
      <h1>Day-57 React Context </h1>
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Section level={4}>
              <Heading>Sub-sub-Heading</Heading>
              <Heading>Sub-sub-Heading</Heading>
              <Heading>Sub-sub-Heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;
