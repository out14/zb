import axios from "axios";

class ArmoriesApi{
    async view ({characterName}:{characterName:string}){
        const response = axios.get(`armories/characters/${characterName}`)
        return response
    }

    async moreView (
        {characterName,detail}:{characterName:string,detail:string}
    ){
        const response = axios.get(`armories/characters/${characterName}?filters=${detail}`)
        return response
    }

}

export const armoriesApi = new ArmoriesApi()