import axios from 'axios'


export interface CharacterType{
    ServerName: string,
    CharacterName: string,
    CharacterLevel: 0,
    CharacterClassName: string,
    ItemAvgLevel: string,
    ItemMaxLevel: string
}


//armory?name=홍백스테이
class CharacterApi{
    async view({characterName,filters}:{characterName:string,filters:string}){
        const response = await axios.get(`status?name=${characterName}&filters=${filters}`)

        return response?.data.data
    }

    async armory({characterName}:{characterName:string}){
        return axios.get(`armory?name=${characterName}`)
    }
    async profile({characterName}:{characterName:string}){
        return axios.get(`profile?name=${characterName}`)
    }
    async avatars({characterName}:{characterName:string}){
        return axios.get(`avatars?name=${characterName}`)
    }
    async skills({characterName}:{characterName:string}){
        return axios.get(`skills?name=${characterName}`)
    }
    //각인정보 500 error
    async engravings({characterName}:{characterName:string}){
        return axios.get(`engravings?name=${characterName}`)
    }
    async cards({characterName}:{characterName:string}){
        return axios.get(`cards?name=${characterName}`)
    }

    
}

export const characterApi = new CharacterApi()

