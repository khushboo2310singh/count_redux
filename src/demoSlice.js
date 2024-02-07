import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
};
const demoSlice=createSlice({
    name:"demo",
    initialState,
    reducers:{
        inc:(state)=>{
            //console.log("from inc");
            state.count+=1;
        },
        dec:(state)=>{
            //console.log("from dec");
            state.count-=1;
        },
        incByVal:(state,action)=>{
            //console.log(action);
            state.count+=action.payload;
        }
    }
})
export const{inc,dec, incByVal}= demoSlice.actions;
export default demoSlice.reducer;