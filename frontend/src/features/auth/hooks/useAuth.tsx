import { authApi } from "@/services/api/auth/authApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const auth=authApi();
export const authHooks=()=>{
    const queryClient = useQueryClient();
    return {
        useAdminLogin:()=>{
            return useMutation({
                mutationFn:(data)=>auth.adminLogin(data),
                onSuccess:()=>{
                    queryClient.invalidateQueries(['admin'])
                } })
    },
    useCustomerLogin:()=>{
        return useMutation({
            mutationFn:(data)=>auth.customerLogin(data),
            onSuccess:()=>{
                queryClient.invalidateQueries(['customer'])
            } })
}
}}