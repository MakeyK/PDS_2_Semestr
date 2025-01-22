import React from "react"; 
import {Routes, Route, Navigate} from 'react-router-dom'  
import {publicRoutes } from "../routes"; 
import { GETALL_ROUTE, MAIN_ROUTE, MASTER_ROUTE} from "../utils/consts"; 

const AppRouter = () => { 
    return( 
    <Routes> 
        {publicRoutes.map(({path, Component}) => 
            <Route key = {path} path ={path} element = {<Component/>} exact/> 
    )} 
        <Route path="*" element = {<Navigate to={MAIN_ROUTE} />} replace />  
        <Route path="*" element = {<Navigate to={MASTER_ROUTE} />} replace />
        <Route path="*" element = {<Navigate to={GETALL_ROUTE} />} replace />
    </Routes> 
    ) 
};
export default AppRouter;