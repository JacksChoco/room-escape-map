<template>
    <div>
        <room v-for="room in rooms" :room="room"></room>
    </div>
</template>

<script>
    import Room from './Room';

    export default {
        name: 'room-list',
        components: {
            Room
        },
        data () {

            return {
                rooms: []
            }
        },
        mounted() {
            const url = 'http://localhost:3000/rooms';
            this.$http.get(url).then(response => {
                this.rooms = response.body
            });
        }
    };
</script>