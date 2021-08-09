import { useState, useEffect, createContext } from "react";

export const FormContext = createContext({});

const formElements = [
  {
    label: "Task Name",
    name: "taskName",
    responsive: {
      md: "6",
      lg: "5",
    },
    type: "text",
  },
  {
    label: "Select Category",
    name: "selectCategory",
    responsive: {
      md: "6",
      lg: "5",
    },
    options: ["NAP Bug Task", "NAP Dev", "New Project", "HP Update"],
    type: "select",
  },
  {
    label: "Jira ID",
    name: "jiraID",
    responsive: {
      lg: "2",
    },
    type: "text",
  },
  {
    label: "Select Assignee",
    name: "selectAssignee",
    responsive: {
      md: "6",
      lg: "3",
    },
    options: ["Bibhu", "Tanzil"],
    type: "select",
  },
  {
    label: "Select Status",
    name: "selectStatus",
    responsive: {
      md: "6",
      lg: "3",
    },
    options: ["In Progress", "On Hold", "In QC", "In Deployment", "Completed"],
    type: "select",
  },
  {
    label: "Created Date",
    name: "createdDate",
    responsive: {
      md: "6",
      lg: "3",
    },
    type: "date",
  },
  {
    label: "Due Date",
    name: "dueDate",
    responsive: {
      md: "6",
      lg: "3",
    },
    type: "date",
  },
  {
    label: "Mock Up",
    name: "mockUp",
    responsive: {
      lg: "12",
    },
    type: "text",
  },
  {
    label: "Other Comments",
    name: "otherComments",
    responsive: {
      lg: "12",
    },
    type: "textarea",
  },
];

const tasksInProgress = [
  {
    taskName: "Live Chat Responsive issue",
    selectCategory: "NAP Bug Task",
    jiraID: "NAPDI-111",
    selectAssignee: "Bibhu",
    selectStatus: "In QC",
    createdDate: "2021-08-08",
    dueDate: "2021-08-12",
    mockUp: "Link",
    otherComments: "NA",
    uniqueID: "xLm12We",
  },
  {
    taskName: "Live Chat Deployment",
    selectCategory: "NAP Dev",
    jiraID: "NAPDI-112",
    selectAssignee: "Tanzil",
    selectStatus: "In Deployment",
    createdDate: "2021-08-08",
    dueDate: "2021-08-13",
    mockUp: "Link",
    otherComments: "NA",
    uniqueID: "fY4Bd7e",
  },
  {
    taskName: "Updated 404 page NAP",
    selectCategory: "NAP Dev",
    jiraID: "NAPDI-113",
    selectAssignee: "Tanzil",
    selectStatus: "In QC",
    createdDate: "2021-08-08",
    dueDate: "2021-08-09",
    mockUp: "Link",
    otherComments: "QC Completed and Working on the QC",
    uniqueID: "wvT22YI",
  },
  {
    taskName: "Cooking Appliances",
    selectCategory: "New Project",
    jiraID: "NAPDI-114",
    selectAssignee: "Bibhu",
    selectStatus: "On Hold",
    createdDate: "2021-08-11",
    dueDate: "2021-08-15",
    mockUp: "Link",
    otherComments: "Project On Hold",
    uniqueID: "1v9rEdR",
  },
];

const tasksCompleted = [
  {
    taskName: "Alignment issue",
    selectCategory: "NAP Bug Task",
    jiraID: "NAPDI-115",
    selectAssignee: "Bibhu",
    selectStatus: "Completed",
    createdDate: "2021-08-05",
    dueDate: "2021-08-08",
    mockUp: "Link",
    otherComments: "Alignment issue",
    uniqueID: "QWv2E46",
  },
  {
    taskName: "Page popup update",
    selectCategory: "NAP Dev",
    jiraID: "NAPDI-116",
    selectAssignee: "Tanzil",
    selectStatus: "Completed",
    createdDate: "2021-08-06",
    dueDate: "2021-08-07",
    mockUp: "Link",
    otherComments: "Builder Page",
    uniqueID: "azW5eff",
  },
  {
    taskName: "Size of Live Chat",
    selectCategory: "NAP Dev",
    jiraID: "NAPDI-117",
    selectAssignee: "Tanzil",
    selectStatus: "Completed",
    createdDate: "2021-08-04",
    dueDate: "2021-08-06",
    mockUp: "Link",
    otherComments: "Live Chat size",
    uniqueID: "aa23WWf",
  },
  {
    taskName: "Remove HP Animation",
    selectCategory: "HP Update",
    jiraID: "NAPDI-118",
    selectAssignee: "Tanzil",
    selectStatus: "Completed",
    createdDate: "2021-08-03",
    dueDate: "2021-08-06",
    mockUp: "Link",
    otherComments: "remove animation",
    uniqueID: "t3Te4E7",
  },
];

let a = { value: "", valid: false };
const initialFormState = {
  taskName: a,
  selectCategory: a,
  jiraID: a,
  selectAssignee: a,
  selectStatus: a,
  createdDate: a,
  dueDate: a,
  mockUp: a,
  otherComments: a,
  uniqueID: { value: "", valid: true },
};
interface Children {
  children: any;
}

const FormContextProvider = ({ children }: Children) => {
  const [tasksIP, setTasksIP] = useState<Array<any>>(tasksInProgress);
  const [tasksC, setTasksC] = useState<Array<any>>(tasksCompleted);
  const [formState, setFormState] = useState<any>(initialFormState);
  const [formEdit, setFormEdit] = useState<boolean>(false);
  const [formEditID, setFormEditID] = useState<any>("");
  const [formEditRow, setFormEditRow] = useState<any>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    if (value !== "") {
      setFormState((prevProps: any) => ({
        ...prevProps,
        [name]: { value, valid: true },
      }));
    } else {
      setFormState((prevProps: any) => ({
        ...prevProps,
        [name]: { value, valid: false },
      }));
    }
  };

  const makeid = (length: any) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let { length } = Object.keys(formState).filter(
      (key: any) => formState[key].valid === false
    );

    if (length <= 0) {
      let data = Object.keys(formState)
        .map((field: any, i: any) => ({
          [field]: formState[field].value,
        }))
        .reduce((r, c) => Object.assign(r, c), {});

      if (formState.selectStatus.value !== "Completed") {
        setTasksIP((prevProps: any) => {
          return [...prevProps, { ...data, uniqueID: makeid(7) }];
        });
      } else {
        setTasksC((prevProps: any) => {
          return [...prevProps, { ...data, uniqueID: makeid(7) }];
        });
      }

      setFormEdit(false);
      setFormEditID("");
      setFormState(initialFormState);
    } else {
      alert();
    }
  };

  const handleUpdate = (e: any) => {
    e.preventDefault();

    let { length } = Object.keys(formState).filter(
      (key: any) => formState[key].valid === false
    );

    if (length <= 0) {
      let data = Object.keys(formState)
        .map((field: any, i: any) => ({
          [field]: formState[field].value,
        }))
        .reduce((r, c) => Object.assign(r, c), {});

      console.log(formState.selectStatus.value);

      if (formState.selectStatus.value !== "Completed") {
        setTasksIP((prevProps: any) =>
          prevProps.map((prevTask: any) => {
            return prevTask.uniqueID === formEditID
              ? { ...prevTask, ...data }
              : prevTask;
          })
        );
      } else {
        moveToCompleted(formEditRow, "id", () => {
          setTasksC((prevProps: any) =>
            prevProps.map((prevTask: any) => {
              return prevTask.uniqueID === formEditID
                ? { ...prevTask, ...data }
                : prevTask;
            })
          );
        });
      }

      setFormEdit(false);
      setFormEditID("");
      setFormEditRow({});
      setFormState(initialFormState);
    } else {
      alert();
    }
  };

  const moveToCompleted = (row: any, id: any, cb?: any): void => {
    row.selectStatus = "Completed";

    setTasksIP((prevProps: any) =>
      prevProps.filter((item: any) => item["uniqueID"] !== row["uniqueID"])
    );

    setTasksC((prevProps: any) => {
      return [...prevProps, row];
    });

    cb && cb();
  };

  const editTask = (row: any, id: any): void => {
    let newFormState = Object.keys(row)
      .map((key: any, i: any) => {
        return { [key]: { value: row[key], valid: true } };
      })
      .reduce((r, c) => Object.assign(r, c), {});

    setFormEditID(row.uniqueID);
    setFormEditRow(row);
    setFormEdit(true);
    setFormState(newFormState);
  };

  const revertToProgress = (row: any, id: any): void => {
    console.log(row, id);
    row.selectStatus = "In Progress";

    setTasksC((prevProps: any) =>
      prevProps.filter((item: any) => item["uniqueID"] !== row["uniqueID"])
    );

    setTasksIP((prevProps: any) => {
      return [...prevProps, row];
    });
  };

  const contextProps = {
    tasksIP,
    setTasksIP,
    tasksC,
    setTasksC,
    formState,
    setFormState,
    formEdit,
    setFormEdit,
    formEditID,
    setFormEditID,
    formEditRow,
    setFormEditRow,
    handleInputChange,
    handleSubmit,
    handleUpdate,
    moveToCompleted,
    editTask,
    revertToProgress,
    formElements,
  };

  useEffect(() => {
    console.log(formState, tasksIP, tasksC);
  }, [formState, tasksIP, tasksC]);

  return (
    <FormContext.Provider value={contextProps}>{children}</FormContext.Provider>
  );
};

export default FormContextProvider;
