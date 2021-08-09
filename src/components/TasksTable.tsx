import { useContext } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { FormContext } from "./FormContext";
import DataTable from "react-data-table-component";
import ExpandableComponent from "./ExpandableComponent";

interface Type {
  type: string;
}

const TasksTable = ({ type }: Type) => {
  const value = useContext<any>(FormContext);
  const { tasksIP, tasksC, moveToCompleted, editTask, revertToProgress } =
    value;

  const tableColumns = [
    {
      name: "ID",
      sortable: true,
      center: true,
      compact: true,
      cell: function id(row: any, id: any) {
        return <>{id + 1}</>;
      },
    },
    {
      name: "TASK NAME",
      selector: "taskName",
      sortable: true,
      grow: 2,
      center: true,
    },
    {
      name: "CREATED",
      selector: "createdDate",
      sortable: true,
      center: true,
    },
    {
      name: "DUE",
      selector: "dueDate",
      sortable: true,
      center: true,
    },
    {
      name: "ASSIGNEE",
      selector: "selectAssignee",
      sortable: true,
      grow: 1,
      center: true,
    },
    {
      name: "CATEGORY",
      selector: "selectCategory",
      sortable: true,
      grow: 1,
      center: true,
    },
    {
      name: "STATUS",
      selector: "selectStatus",
      sortable: true,
      grow: 1,
      center: true,
    },
    {
      name: "JIRA ID",
      selector: "jiraID",
      sortable: true,
      grow: 1,
      center: true,
    },
    {
      name: "MOCK-UP",
      selector: "mockUp",
      sortable: true,
      grow: 1,
      center: true,
    },
    {
      name: "NOTES",
      selector: "otherComments",
      sortable: true,
      grow: 3,
      center: true,
    },
    {
      name: "ACTIONS",
      button: true,
      grow: 4,
      center: true,
      cell: function buttons(row: any, id: any) {
        return (
          <>
            {type === "In Progress" ? (
              <>
                <Button size="sm" mr={2} onClick={() => editTask(row, id)}>
                  EDIT
                </Button>
                <Button size="sm" onClick={() => moveToCompleted(row, id)}>
                  DONE
                </Button>
              </>
            ) : (
              <Button size="sm" onClick={() => revertToProgress(row, id)}>
                REVERT
              </Button>
            )}
          </>
        );
      },
    },
    {
      name: "UNIQUE ID",
      selector: "uniqueID",
      omit: true,
    },
  ];

  return (
    <Box w="100%" p={5}>
      <DataTable
        title={<Text fontWeight="bold">Tasks {type}</Text>}
        columns={tableColumns}
        data={type === "In Progress" ? tasksIP : tasksC}
        pagination
        expandableRows
        expandableRowsComponent={ExpandableComponent}
      />
    </Box>
  );
};

export default TasksTable;
