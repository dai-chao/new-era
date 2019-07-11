

import { createStore } from "redux";

import  RootReducer  from "../reducer/index"
let store = createStore( RootReducer );    //  全局只有一个store

export default store

