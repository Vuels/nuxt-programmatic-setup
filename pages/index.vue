<template>
  <div
    class="test-user"
    v-if="user !== null">
    <img 
        class="test-user__profile"
        :src="user.picture.large" />
    <h2
        class="test-user__name"
        v-html="getName()"></h2>
</div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                user: null
            }
        },
        methods: {
            getName() {
                return `${this.user.name.first} ${this.user.name.last}`
            }
        },
        mounted() {
            fetch('/api/user')
                .then(data => data.json())
                .then(response => { 
                    this.user = response.results[0] 
                    console.log(this.user)
                })
        }
    }
</script>

<style lang="scss" scoped>
    .test-user {
        margin: 20px auto;
        padding: 20px;
        width: 400px;
        min-height: 200px;
        border: 1px solid #efefef;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

        .test-user__profile {
            display: block;
            margin: 10px auto;
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
        .test-user__name {
            margin: 10 auto;
            text-align: center;
        }
    }
</style>


