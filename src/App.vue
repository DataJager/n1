<template>
    <div class="wrapper">
                <app-listing></app-listing>
    </div>
</template>

<script>
    import Listing from './Listing.vue';

    export default {
        components: {
            'app-listing': Listing
        }
    }
</script>

<style>


div.component {
        border: 1px solid black;
    }
div.wrapper{
    width: 720px;
    height: 960px;
    border: 1px solid black;
    border-radius: 25px;
    }
</style>
