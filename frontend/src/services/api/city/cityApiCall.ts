import axiosInstance from "@/services/axios";

export const cityApi=()=>{
return{
    fetchCities:async()=>{
        try {
            const response = await axiosInstance.get("/cities");
            return response.data;
        } catch (error: any) {
            throw (
                new Error(error?.response?.data?.message) ||
                "City Fetch Failed"
            );
        }
    }
}
}