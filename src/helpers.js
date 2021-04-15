export const storeLocalStorage = (list) => {
  localStorage.setItem("tasks", JSON.stringify(list));
};
