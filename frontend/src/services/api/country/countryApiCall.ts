import axiosInstance from "@/services/axios";

export const countryApi=()=>{
    return{
    fetchCountries: async () => {
      try {
        const response = await axiosInstance.get("/countries");
      
        return response.data;
      } catch (error: any) {
        throw (
          new Error(error?.response?.data?.message) ||
          "Country Fetch Failed"
        );
      }
    },
    addCountry: async (data: any) => {
      try {
        const response = await axiosInstance.post("/admin/countries", data);
      console.log(response)
        return response.data;
      } catch (error: any) {
        throw (error?.response?.data
           ||
          "Country add Failed"
        );
      }
    },
    editCountry: async (id: any, data: any) => {
      try {
        const response = await axiosInstance.put(`/admin/countries/${id}`, data);
        return response.data;
      } catch (error: any) {
        throw (error?.response?.data
           ||
          "Country edit Failed"
        );
      }
    },
    fetchSingleCountry: async (id: any) => {
      try {
        const response = await axiosInstance.get(`/admin/countries/${id}`);
        return response.data;
      } catch (error: any) {
        throw (error?.response?.data
           ||
          "Country Fetch Failed"
        );
      }
    },
    deleteCountry: async (id: any) => {
      try {
        const response = await axiosInstance.delete(`/admin/countries/${id}`);
        return response.data;
      } catch (error: any) {
        throw (error?.response?.data
           ||
          "Country delete Failed"
        );
      }
    },
}}