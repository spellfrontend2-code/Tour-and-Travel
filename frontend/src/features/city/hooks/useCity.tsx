import { cityApi } from "@/services/api/city/cityApiCall";
import { useQuery } from "@tanstack/react-query";
const city=cityApi()
export const cityHooks = () => {
    return {
        useFetchCities:()=>{
            return useQuery({
                queryFn:()=>city.fetchCities(),
                queryKey:['cities']
            })
        }
    }
}
