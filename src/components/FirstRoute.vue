<template>
    <div class="Hello">
        <h1>{{msg}}</h1>
        Hello {{ $route.params.name}}
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'FirstRoute',
        data () {
            return {
                msg: 'FirstRoute'
            }
        }
    }
</script>