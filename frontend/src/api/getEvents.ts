import axiosEventsClient from "./axiosEventsClient";

export const getEvents = async () => {
    try{
        const response = await axiosEventsClient.get("/api/getCIBRSCodes", {params: {id}});
        return response.data;
    }
    catch(error){
        throw error;
    }
};

export default getEvents;

