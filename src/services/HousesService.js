import { api } from "./AxiosService.js"
import { House } from "../models/House.js"
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"



class HousesService{

    async getHouses() {
        const res = await api.get('auth/api/houses')
        // logger.log('getting houses', res.data)
        AppState.houses = res.data.map(h => new House(h))
        logger.log('appstate houses', AppState.houses)
    }

    async createHouse(houseData) {
        const res = await api.post('auth/api/houses', houseData)
        logger.log('create house', res.data)
    }

}

export const housesService = new HousesService()