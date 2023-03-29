<template>
    <div class="elevation-3 rounded bg-light border border-1 border-dark">
        <img :src="house.imgUrl" :alt="house.bedrooms" class="img-fluid rounded-top">
        <div class="text-center p-3">
            <h1 class="fs-2">{{ 'Bedrooms: ' + house.bedrooms + ' | Bathrooms: ' + house.bathrooms }}</h1>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { House } from '../models/House.js';
import { useRoute } from 'vue-router';

export default {

    props: {
        house: {
            type: House,
            required: true
        }
    },


    setup(props) {
        const route = useRoute();
        return {
            route,
        }
    }
};
</script>


<style lang="scss" scoped></style>