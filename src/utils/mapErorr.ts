import { ErrorFiled } from "../generated/generated-frontend";
export const mapErorr = (err : ErrorFiled[])=>{
    const errorMap : Record<string , string> ={};
err.forEach(({field , message})=>{
    errorMap[field]=message;
})
return errorMap
}    
