<template>
    <form class="createTwoot" @submit.prevent="createNewTwoot">

        <label for="newTwoot"><strong>New Twoot</strong> ({{newTwootCharacterCount}}/180)</label>
        <textarea 
            name="newTwoot" id="newTwoot" rows="8"
            v-model="state.newTwootContent"
            maxlength="180"
            :class="{ 'limit': newTwootCharacterCount === 180}"
        ></textarea>

        <article>

            <label for="newTwootType">Type: </label>

            <select name="newTwootType" id="newTwootType" v-model="state.selectedTwootType">
                <option 
                    :value="option.value" 
                    v-for="(option, index) in state.twootTypes" :key="index"
                >
                    {{option.name}}
                </option>
            </select>

        </article>

        <button>Twoot!</button>

    </form>
</template>

<script>
import {reactive, computed} from 'vue'

export default {
    name: 'CreateTwoot',
    setup(props, context){
        const state = reactive({
            newTwootContent: '',
            selectedTwootType: 'instant',
            twootTypes: [
                {value: 'draft', name: 'Draft'},
                {value: 'instant', name: 'Instant Twoot'}
            ],
        })

        const newTwootCharacterCount = computed(() => state.newTwootContent.length)

        const createNewTwoot = () => {      
            if(state.newTwootContent && state.selectedTwootType !== 'draft'){
                context.emit('add-twoot', state.newTwootContent)
                state.newTwootContent = ''
            }
        }

        return {
            state,
            newTwootCharacterCount,
            createNewTwoot
        }
    }   
}
</script>

<style lang="scss" scoped>
.createTwoot{
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  min-height: 240px;
  justify-content: space-around;
}

.createTwoot button{
  font-size: 14px;
  padding: 5px;
  background-color: rgb(131, 52, 168);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  transition: all .2s;
  width: 80%;
  align-self: center;

    &:hover{
      filter: brightness(110%);
      cursor: pointer;
    }
}

.limit{
  border: 2px solid green;
  color: rgb(80, 67, 50);
  border-radius: 5px;
}

.createTwoot article > label{
  font-weight: 600;
}
</style>