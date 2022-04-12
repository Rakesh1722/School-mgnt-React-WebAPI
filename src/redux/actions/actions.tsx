export const AddUser = (values:any) => (dispatch: (arg0: { type: string; payload: any[]; }) => void, getState: () => { Login: { userinfo: any; }; }) => {
  const {
    Login: { userinfo },
  } = getState();

  const hasTodo = userinfo.find((i: any[]) => i.values === values);

  if (!hasTodo && values !== "") {
    dispatch({
      type: "ADD_USER",
      payload: [{ details: values }, ...userinfo],
    });
  }
};
  


