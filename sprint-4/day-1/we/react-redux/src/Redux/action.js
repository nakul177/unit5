export const ADD_COUNT = "ADD_COUNT";
export const SUB_COUNT = "SUB_COUNT";
export const ADD_TODO = "ADD_TODO"

export const addcount = (payload) => ({type : ADD_COUNT , payload});
export const subcount = (payload) => ({type: SUB_COUNT , payload});
export const addtodo = (todo) => ({type:ADD_TODO , payload:todo})