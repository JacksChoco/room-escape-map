<template>
    <div>
        <img :src="room.thumbnailUrl" alt="">
        {{room.title}}
    </div>
</template>

<script>
    export default {
        name: 'room',
        props: ['room']
    };
</script>

<style lang="css">
</style>