<template>
    <navbar class="navbar">
        <h1>Twotter</h1>
        <span v-if="username">@{{username}}</span>
    </navbar>
</template>

<script>
export default {
    name: 'TwootNavbar',
    props: {
        username: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>

.navbar{
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: blueviolet;
    width: 100%;
    padding: 21px;

    h1{
        color: azure;
        font-weight: bold;
    }

    span{
        color: azure;
        font-weight: 600;
        font-size: 18px;
    }
}
 
</style>