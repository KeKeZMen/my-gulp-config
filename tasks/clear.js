import { deleteAsync } from "del";

const clear = () => {
  return deleteAsync("./public");
};

export default clear;
