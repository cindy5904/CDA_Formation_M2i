<script setup>
import { defineProps , ref} from 'vue';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true
  }
})
const clik = ref(false);
const updateUser = ref(props.user.name);
const updateEmail = ref(props.user.email)
function toggleClik() {
  clik = !clik;
}
function saveUser() { 
  $emit('update-user', props.index, updateUser.value, updateEmail.value);
  toggleClik();
}
</script>

<template>
  <!-- si je clique sur mon bouton update j'ai des input qui affiche a la place de User.name et user.email -->
  <div v-if="clik">
    <td class="border text-center p-3">
      <input type="text" class="form-control mx-2" v-model="updateUser.value">
    </td>
    <td class="border text-center p-3"><input type="email" v-model="updateEmail.value"></td>
  </div>
  <div v-else>
    <td class="border text-center p-4">
      {{ user.name }}
    </td>
    <td class="border text-center p-4">
      {{ user.email }}
    </td>
  </div>
  <td class="border text-center p-3">
    <button class="btn btn-danger mx-2" @click="$emit('remove-user', index)">Remove</button>
    <button v-if="!clik" class="btn btn-success mx-2" @click="toggleClik">Update</button>   
    <button v-else class="btn btn-primary mx-2" @click="saveUser">save</button>
  </td>
</template>
