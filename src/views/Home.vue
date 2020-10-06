<template>
  <TwootNavbar />
  <div class="home">
    <h1>Home Page</h1>

    <section class="usersList">
      <router-link 
        v-for="user in usersJson" 
        :to="{name: 'UserProfile', params: {id: user.id}}"
        :key="user.id"
      >
        <span>{{user.username}}</span>
      </router-link>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import {usersJson} from '../assets/users'

import TwootNavbar from '../components/TwootNavbar'

export default {
  name: 'Home',
  components: {TwootNavbar},

  setup(){

    return {
      usersJson
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  padding: 30px;
  display: flex;
  flex-direction: column;
}

.usersList{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 20vh;
  margin: 30px 0;
}

.home .usersList a{
  padding: 15px;
  font-size: 19px;
  color: rgb(252, 248, 255);
  font-weight: 500;
  background-color: rgb(42,60,78);
  border-radius: 5px;
  transition: all .2s;

    &:hover{
      background-color: rgb(252, 248, 255);
      color: rgb(42,60,78);
      font-weight: 600;
      //border: 1px solid rgb(42,60,78);
      box-shadow: 1px 1px 8px rgba(42,60,78, .5);
    }
}
</style>
