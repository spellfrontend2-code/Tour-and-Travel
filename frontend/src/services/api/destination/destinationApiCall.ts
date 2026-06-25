import axiosInstance from "@/services/axios";

export const destinationApi=()=>{
    return{
    fetchDestinations: async () => {
      try {
        const response = await axiosInstance.get("/destinations");
      
        return response.data;
      } catch (error: any) {
        throw (
          new Error(error?.response?.data?.message) ||
          "Destination Fetch Failed"
        );
      }
    },
    createDestination:async(data:any)=>{
      try{
        const response = await axiosInstance.post("/admin/destinations", data);
        return response.data;
      }
      catch (error: any) {
        throw (error?.response?.data
           ||
          "Country add Failed"
        );
      }
    },
    deleteDestination:async(id:any)=>{
      try{
        const response = await axiosInstance.delete(`/admin/destinations/${id}`);
        return response.data;
      }catch(error:any){
        throw (
          new Error(error?.response?.data?.message) ||
          "Destination delete Failed"
        );
      }
    }
    }
}