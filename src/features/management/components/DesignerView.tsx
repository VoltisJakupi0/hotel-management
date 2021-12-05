import React from "react";
import { CreateTaskForm } from "../../../components/Forms";
import { MyTasks } from "../../../components/Tables";

export default () => {
  return (
    <>
      <CreateTaskForm />

      <h5>My Finished Tasks</h5>
      <MyTasks />
    </>
  );
};
