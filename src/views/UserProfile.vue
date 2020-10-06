<template>
  <TwootNavbar :username="state.user.username" />
    <section class="userProfile">

      <sidebar class="sideContent">

        <article class="userPanel">

          <div>

            <span>@{{state.user.username}}</span>
            <details class="userDetails">
                <summary>User Details</summary>
                <strong>Followers: </strong> {{state.followers}}
               
            </details>
            <em class="adminBadge" v-if="state.user.isAdmin">Admin</em>

          </div>

        </article>

        <CreateTwoot @add-twoot="addTwoot"/>

      </sidebar>

        <article v-if="state.user.twoots[0]" class="twootsWrapper">

            <TwootItem 
              :key="twoot.id"
              :username="state.user.username"
              :twoot="twoot"
              v-for="twoot in state.user.twoots" 
            />
    
        </article>

        <article v-else><h3>Nothing here.</h3></article>

    </section>
</template>

<script>

import TwootNavbar from '../components/TwootNavbar'
import TwootItem from '../components/TwootItem'
import CreateTwoot from '../components/CreateTwoot'

import {usersJson} from '../assets/users'

import {useRoute} from 'vue-router'
import {reactive, computed} from 'vue'

export default {
  name: 'UserProfile',
  components: {TwootItem, TwootNavbar, CreateTwoot},

  setup(){
    const route = useRoute()
    const userId = computed(() => route.params.id)
    
    const state = reactive({
      user: usersJson[userId.value -1] || usersJson[0]
    })

    const addTwoot = (twoot) => {
      state.user.twoots.unshift({id: state.user.twoots.length +1, content: twoot})
    }
   
    return {
      state,
      addTwoot,
      userId
    }
  },
}

</script>

<style lang="scss" scoped>

.userProfile{
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 3fr;
    padding: 50px 5%;
}

.userProfile .userPanel{
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    min-width: 220px;
    align-self: flex-start;
}

.userProfile .userPanel span{
    font-size: 22px;
    font-weight: bold;
}

.userProfile .userDetails {
    margin: 10px 0;
}

.userProfile .userPanel .adminBadge{
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: rgb(131, 52, 168);
    border-radius: 5px;
    align-self: flex-start;
    padding: 3px;
}

.userProfile .twootsWrapper{
    display: flex;
    flex-direction: column;    
}

@media (max-width: 800px) {
  .userProfile{
    display: flex;
    flex-direction: column;
  }
}
</style>
