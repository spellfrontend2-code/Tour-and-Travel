import { destinationApi } from '@/services/api/destination/destinationApiCall';
import {   useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
const destination=destinationApi();


export const destinationHooks=()=>{
  const queryClient=useQueryClient();
  return {
     useFetchDestinations:()=> {
      return useQuery({
        queryKey: ['destination'],
        queryFn:()=>destination.fetchDestinations()
      });
    },
    useCreateDestination:()=> {
      return useMutation({
        mutationFn:(data)=>destination.createDestination(data),
        onSuccess:()=>{queryClient.invalidateQueries(['destination'])}
      });
    },
    useDeleteDestination:()=>{
      return useMutation({
        mutationFn:(id)=>destination.deleteDestination(id),
        onSuccess:()=>{queryClient.invalidateQueries(['destination'])}
      })
    }

  }}