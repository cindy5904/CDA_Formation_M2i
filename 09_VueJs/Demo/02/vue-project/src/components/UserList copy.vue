<script setup>
import {ref} from 'vue';
import AddUser from './AddUser.vue';
import UserItem from './UserItem.vue';

const users = ref([]);

const addUser = newUser => {
 users.value.push(newUser)
 console.log(users.value);
}

const removeUser = index => {
  users.value.splice(index,1)
}

const updateUser = (index) => {
  const newUser = prompt('Entrer votre nom', users.value[index].name)
  const newUser1 = prompt('Entrer votre email', users.value[index].email)
  users.value.splice(index, 1, {name : newUser, email : newUser1});
  console.log(newUser);
}
</script>

<template>
 <AddUser @add-user="addUser" />
  <h3 v-if="users.length" class="mt-4"> Liste des users : </h3>
  <table class="mt-3">
    <tr class=" my-3">
    <UserItem v-for="(user,index) in users"
    :key="index"
    :user="user"
    :index="index"
    :text="text"
    @remove-user="removeUser"
    @update-user="updateUser"/>
  </tr>
  </table>
</template>

<style scoped>

</style>
