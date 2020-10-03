<template>
    <section class="twoot">
        <article class="twootUser">
            <span>@{{username}}</span>
        </article>

        <article class="twootContent">
            <span>{{twoot.content}}</span>
        </article>
    </section>
</template>

<script>

export default {
    name: 'TwootItem',
    props: {
        username: {
            type: String,
            required: true
        },
        twoot: {
            type: Object,
            required: true
        }
    },
    setup(){
        
    }
}

</script>

<style scoped>

.twoot{
    background-color: white;
    border: 1px solid #dfe3e8;
    border-radius: 3px;
    min-height: 80px;
    padding: 20px;
    transition: all .2s;
    box-shadow: 0 1px 10px rgba(0,0,0, 0.1);
}

.twoot:hover{
    transform: scale(1.02);
    cursor: pointer;
}

.twoot:not(:last-child){
    margin-bottom: 20px;
}

.twoot .twootUser{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}

</style>