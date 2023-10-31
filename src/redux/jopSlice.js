import { createSlice } from "@reduxjs/toolkit";
import { sortOptions } from "../constants/constant";

const initialState = {
    mainJop:[],
    jops :[],
    initialized :false,
    isError:false,
    isShowFilter:false
}

const jopSilece = createSlice({
        name:'jops',
        initialState,
        reducers : {
            setJop: (state,action) => {
                state.jops = action.payload;
                state.mainJop = action.payload;
                state.initialized=true;
            },
            setError:(state) => {
                state.isError = true;
                state.initialized =true;
            },
            filterBySearch:(state,action) => {
                const query = action.payload.toLowerCase()

                //arama terimini içeren işleri filtreleme
                const filtered = state.mainJop.filter((jop)=>jop.company.toLowerCase().includes(query));

                state.jops = filtered;

            },
            filterByStatus:(state,action) => {
                const filtered = state.mainJop.filter((jop)=> jop.status===action.payload)

                state.jops=filtered

            }, 
            filterByType:(state,action) => {
                const filtered = state.mainJop.filter((jop)=> jop.type===action.payload)

                state.jops=filtered
            },
            sortJops:(state,action) => {
                switch(action.payload) {
                    case sortOptions[0]: // a-z

                        state.jops.sort((a,b)=>
                        a.company.localeCompare(b.company)) // localCompare yerel dile göre sıralar
                    break;
                    case sortOptions[1]: //z-a
                    state.jops.sort((a,b)=>
                    b.company.localeCompare(a.company)) // localCompare yerel dile göre sıralar
                    break;
                    case sortOptions[2]: //en yeni

                    state.jops.sort((a,b)=> new Date(b.date)- new Date(a.date))
                    
                    break;
                    case sortOptions[3]: //en eski
                    state.jops.sort((a,b)=> new Date(a.date)- new Date(b.date))
                    break;
                }

            },
            clearFilters:(state) => {
                state.jops=state.mainJop;

            },
            showFilter:(state) => {
                state.isShowFilter=!state.isShowFilter;
            }
        }
})

//aksiyonları export etme
export const  {setJop,setError,filterBySearch,filterByStatus,filterByType,sortJops,clearFilters,showFilter} = jopSilece.actions; //onject destraction


//createSlice in oluşturduğu reducer i export etme 
export default jopSilece.reducer;
