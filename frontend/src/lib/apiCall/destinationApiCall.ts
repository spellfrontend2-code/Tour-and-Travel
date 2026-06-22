import axiosInstance from "../axios";

export const destinationApi=()=>{
    return{
    fetchDestinations: async () => {
      try {
        const response = await axiosInstance.get("/destinations");
      
        return response.data;
      } catch (error: any) {
        throw (
          new Error(error?.response?.data?.message) ||
          "Contact Message Fetch Failed"
        );
      }
    },
    }
}