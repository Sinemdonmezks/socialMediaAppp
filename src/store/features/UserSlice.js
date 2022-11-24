import { LineAxisOutlined } from "@mui/icons-material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../config/UserService";

const initialStateUser= {
token: "",
userProfile: {},
userProfileList: [],
error: {
    code: "",
    message: "",
    fields: [],
  },
};


export const findByTokenAxios = createAsyncThunk(
    "user/getuser",
    async(payload)=> {
        try{
            const response = await axios.post(userService.findbytoken , payload)
            return response.data;
        }catch(error){
            return error.response.data;
        }
    }
)
const userSlice = createSlice({
    name: "user",
    initialState: initialStateUser,
    
    reducers : {},

    extraReducers: (build) => {
        build.addCase(findByTokenAxios.fulfilled,(state,action)=>{
            state.error=action.payload;
            state.isLoading=
        })
    },
})

export default userService.reducer
