import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar/>
      <NewProject/>
    </main>
  );
}

export default App;
