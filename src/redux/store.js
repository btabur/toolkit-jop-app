import { configureStore } from "@reduxjs/toolkit";
import jopSlice from "./jopSlice";



export default configureStore({reducer:jopSlice}); // bir kaç tane olsaydı obje içerisinde yazılırdı