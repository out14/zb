import axios from "axios";

class ContentApi{

    async cad(){
        const res = await axios.get(`/abyss`)

        return res?.data.data
    }

    async cgr(){
        const res = await axios.get(`/guardian`)

        return res?.data.data
    }

    async calendar(){
        //const res = await  axios.get(`/calendar`)
        const res = await  axios.get(`/gamecontents/calendar`)
        
        return res?.data.data
    }

}

export const contentApi = new ContentApi()