<template>
    <div class="card-container">
        <img :src="require(`@/assets/images/${card.image || 'fel.jpg'}`)" alt="fe" class="image">
    </div>
</template>

<script>
    export default {
        props: ['card']
    }
</script>

<style scoped>
    .card-container {
        width: 24%;
        height: 12.5rem;
        border-radius: 0.5rem;
        overflow: hidden;
        margin-bottom: 1.5rem;
        cursor: pointer;
    }
    .image {
        width: 100%;
        height: 100%
    }
    /* .card-container {
    width: 31.5%;
    height: 25rem;
    border: none;
    overflow: hidden;
    padding: 0;
    cursor: pointer;
    }
    .image {
        height: 65%;
        border-radius: 0.5rem;
    } */
</style>
