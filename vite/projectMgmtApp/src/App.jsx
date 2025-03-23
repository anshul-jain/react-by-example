import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // undefined means doing noting
    projects: []
  });

  function handleStartAddProject() {
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId: null // null means adding new project
      }
    });
  }

  let content = null;

  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject}/>
     {content}
    </main>
  );
}

export default App;
