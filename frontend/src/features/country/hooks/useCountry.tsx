import {countryApi} from "@/services/api/country/countryApiCall"
import {   useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
const country=countryApi();

export const countryHooks=()=>{
  const queryClient=useQueryClient();
  return {
     useFetchCountries:()=> {
      return useQuery({
        queryKey: ['country'],
        queryFn:()=>country.fetchCountries()
      });
    },
    useAddCountry:()=>{
        return useMutation({
            mutationFn:(data)=>country.addCountry(data),
            onSuccess:()=>{
                queryClient.invalidateQueries(['countries'])
            }
        })
    },
    useEditCountry:()=>{
        return useMutation({
            mutationFn:({data,id})=>country.editCountry(id,data),
            onSuccess:()=>{
                queryClient.invalidateQueries(['countries'])
            }
        })
    },
    useFetchSingleCountry:()=>{
        return useQuery({
            queryKey: ['countries'],
            queryFn:()=>country.fetchSingleCountry()
          });
    },
    useDeleteCountry:()=>{
        return useMutation({
            mutationFn:(id)=>country.deleteCountry(id),
            onSuccess:()=>{
                queryClient.invalidateQueries(['countries'])
            }
        })
    }

}}