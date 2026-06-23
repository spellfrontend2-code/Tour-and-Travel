import axiosInstance from "@/services/axios";

export const authApi=() => {
    return {
        adminLogin: async (data: any) => {
            try {
                const response = await axiosInstance.post("/login/admin", data);
               console.log(response)
                return response.data;
            } catch (error: any) {
                throw (
                    new Error(error?.response?.data?.message) ||
                    "Login Failed"
                );
            }
        },
        customerLogin: async (data: any) => {
        try {
            const response = await axiosInstance.post("/login/customer", data);
            return response.data;
        } catch (error: any) {
            throw (
                new Error(error?.response?.data?.message) ||
                "Login Failed"
            );
        }
    },
    };
    
}