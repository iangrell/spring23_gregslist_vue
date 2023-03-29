<template>
    <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Craete House</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <form @submit.prevent="createHouse()">

        <div class="modal-body">
          <div class="mb-3">
            <label for="bedrooms" class="form-label">Bedrooms</label>
            <input type="number" required class="form-control" id="bedrooms">
          </div>
          <div class="mb-3">
            <label for="bathrooms" class="form-label">Bathrooms</label>
            <input type="number" required class="form-control" id="bathrooms">
          </div>
          <div class="mb-3">
            <label for="levels" class="form-label">Levels</label>
            <input type="number" required class="form-control" id="levels">
          </div>
          <div class="mb-3">
            <label for="imgUrl" class="form-label">ImgUrl</label>
            <input type="url" required class="form-control" id="imgUrl">
          </div>
          <div class="mb-3">
            <label for="year" class="form-label">Year</label>
            <input type="number" required class="form-control" id="year">
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="number" required class="form-control" id="price">
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <input type="text" required class="form-control" id="description">
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Create Car</button>
        </div>
    </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { House } from '../models/House.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';

export default {
    props: {
        house: {
            type: House,
            default: {}
        }
    },

    setup(props){
        
        
    return { 

        async createHouse() {
            try {
                const houseData = editable.value
                const house = await housesService.createHouse(houseData)
            } catch (error) {
                logger.error(error)
                Pop.error(error.message)
            }
        },


     }
    }
};
</script>


<style lang="scss" scoped>

</style>