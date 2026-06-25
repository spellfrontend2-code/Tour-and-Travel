import axiosInstance from "@/services/axios";

export const cityApi=()=>{
return{
    fetchCities:async()=>{
        try {
            const response = await axiosInstance.get("/cities");
            console.log("response",response)
            return response.data;
        } catch (error: any) {
            throw (
                new Error(error?.response?.data?.message) ||
                "City Fetch Failed"
            );
        }
    },
    singleCity:async(id:any)=>{
        try {
            const response = await axiosInstance.get(`/admin/cities/${id}`);
            return response.data;
        } catch (error: any) {
            throw (
                new Error(error?.response?.data?.message) ||
                "City Fetch Failed"
            );
        }
    },
    addCity:async(data:any)=>{
        try {
            const response = await axiosInstance.post("/admin/cities", data);
            return response.data;
        } catch (error: any) {
        throw (error?.response?.data
           ||
          "Country add Failed"
        );
      }
    },
    editCity:async(id:any,data:any)=>{
        try {
            console.log(id,data)
            const response = await axiosInstance.put(`/admin/cities/${id}`, data);
            return response.data;
        } catch (error: any) {
        throw (error?.response?.data
           ||
          "Country add Failed"
        );
      }
    },
    deleteCity:async(id:any)=>{
        try {
            const response = await axiosInstance.delete(`/admin/cities/${id}`);
            return response.data;
        } catch (error: any) {
            throw (
                new Error(error?.response?.data?.message) ||
                "City delete Failed"
            );
        }
    },
}
}