import { cityApi } from "@/services/api/city/cityApiCall";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const city=cityApi()
export const cityHooks = () => {
    const queryClient=useQueryClient();
    return {
        useFetchCities:()=>{
            return useQuery({
                queryFn:()=>city.fetchCities(),
                queryKey:['cities']
            })
        },
        useAddCity:()=>{
            return useMutation({
                mutationFn:(data)=>city.addCity(data),
                onSuccess:()=>{
                    queryClient.invalidateQueries(['cities'])
                }
            })
        },
        useDeleteCity:()=>{
            return useMutation({
                mutationFn:(id)=>city.deleteCity(id),
                onSuccess:()=>{
                    queryClient.invalidateQueries(['cities'])
                }
            })
        },
        useEditCity:()=>{
            return useMutation({
                mutationFn:({data,id})=>city.editCity(id,data),
                onSuccess:()=>{
                    queryClient.invalidateQueries(['cities'])
                }
            })
        }
    }
}
