import { Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

const ExpandableComponent = ({ data }: any) => {
  const row: any = {
    taskName: "Task Name",
    createdDate: "Created Date",
    dueDate: "Due Date",
    selectAssignee: "Assignee",
    selectCategory: "Category",
    selectStatus: "Status",
    jiraID: "Jira ID",
    mockUp: "Mock Up",
    otherComments: "Notes",
  };

  return (
    <List spacing={3}>
      {Object.keys(row).map((key: any, i: any) => (
        <ListItem key={i}>
          {data["selectStatus"] !== "Completed" ? (
            <ListIcon as={WarningIcon} color="yellow.500" />
          ) : (
            <ListIcon as={CheckCircleIcon} color="green.500" />
          )}
          <Text display="inline-block" fontWeight="bold">
            {row[key]}
          </Text>
          : {data[key]}
        </ListItem>
      ))}
    </List>
  );
};

export default ExpandableComponent;
