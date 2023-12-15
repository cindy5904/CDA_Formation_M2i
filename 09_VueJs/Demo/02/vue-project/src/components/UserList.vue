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

const updateUser = (index, updateUser, updateEmail) => {
  users.value[index].name = uptadeUser;
  users.value[index].email = uptadeEmail;
}
</script>

<template>
 <AddUser @add-user="addUser" />
  <h3 v-if="users.length" class="mt-4">Liste des users : </h3>
  <table class="mt-3">
    <tr class=" my-3">
    <UserItem v-for="(user,index) in users"
    :key="index"
    :name="user.name"
    :email="user.email"
    :index="index"
    :text="text"
    @remove-user="removeUser"
    @update-user="updateUser"/>
    </tr>
  </table>
</template>

<style scoped>

</style>
