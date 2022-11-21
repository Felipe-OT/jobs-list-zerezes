import "./App.css";
import Header from "./components/header/Header";
//import JobsContainer from "./components/jobsContainer/JobsContainer";

function App() {
  return (
    <div className="h-screen flex flex-col overflow-y-hidden">
      <Header />
     {/* <main className="flex h-[calc(100vh-96px)] pt-10">
        <JobsContainer />
  </main>*/}
    </div>
  );
}

export default App;
