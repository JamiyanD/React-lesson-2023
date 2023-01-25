import { useState } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";
export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  runningSince,
  onTrashClick,
  onStartClick,
  onStopClick,
  onFormSubmit,
}) {
  const [editOpenForm, setEditOpenForm] = useState(false);

  function handleFormClose() {
    closeForm();
  }
  function handleEditClick() {
    openForm();
  }

  function handleSubmit(timer) {
    onFormSubmit(timer);
    closeForm();
  }

  function closeForm() {
    setEditOpenForm(false);
  }
  function openForm() {
    setEditOpenForm(true);
  }
  return (
    <div>
      {editOpenForm ? (
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
          onTrashClick={onTrashClick}
          onStartClick={onStartClick}
          onStopClick={onStopClick}
          onEditClick={handleEditClick}
        />
      )}
    </div>
  );
}
