import FormContextProvider from "./FormContext";
import Form from "./Form";
import TasksTable from "./TasksTable";

const Section6 = () => {
  return (
    <FormContextProvider>
      <Form />
      <TasksTable type="In Progress" />
      <TasksTable type="Completed" />
    </FormContextProvider>
  );
};

export default Section6;
