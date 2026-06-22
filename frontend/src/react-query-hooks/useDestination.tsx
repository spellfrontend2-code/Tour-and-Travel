import { destinationApi } from '@/lib/apiCall/destinationApiCall';
import {   useQuery, useQueryClient } from '@tanstack/react-query';
const destination=destinationApi();


export const destinationHooks=()=>{
//   const queryClient=useQueryClient();
  return {
     useFetchDestinations:()=> {
      return useQuery({
        queryKey: ['destination'],
        queryFn:()=>destination.fetchDestinations()
      });
    }}}