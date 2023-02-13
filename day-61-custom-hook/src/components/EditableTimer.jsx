import { useState } from "react";
import TimerForm from "./TimerForm.jsx";
import Timer from "./Timer.jsx";

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  runningSince,
}) {
  const [editFormOpen, setEditFormOpen] = useState(false);

  function handleFormClose() {
    closeForm();
  }

  function handleEditClick() {
    openForm();
  }

  function handleSubmit(timer) {
    // onFormSubmit(timer);
    closeForm();
  }

  function closeForm() {
    setEditFormOpen(false);
  }

  function openForm() {
    setEditFormOpen(true);
  }

  return (
    <div>
      {editFormOpen ? (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormSubmit={handleSubmit}
          onFormClose={handleFormClose}
        />
      ) : (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
          onEditClick={handleEditClick}
        />
      )}
    </div>
  );
}
