import "./App.css";
import Header from "./components/header/Header";
import JobsContainer from "./components/jobsContainer/JobsContainer";
import { SearchProvider } from "./context/searchContext";

function App() {
  return (
    <div className="h-screen flex flex-col overflow-y-hidden">
      <SearchProvider>
        <Header />
        <main className="flex h-[calc(100vh-96px)] pt-10">
          <JobsContainer />
        </main>
      </SearchProvider>
    </div>
  );
}

export default App;
