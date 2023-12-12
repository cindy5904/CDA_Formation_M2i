<script setup>
import {defineProps} from 'vue';

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

</script>

<template>
  
  <td class="border text-cente p-3">
    {{ user.name }}
  </td>
  <td class="border text-center p-3">
    {{ user.email }}
  </td>
  <td class="border text-center p-3">
    <button class="btn btn-danger mx-2" @click="$emit('remove-user', index)">Remove</button>
    <button class="btn btn-success mx-2" @click="$emit('update-user', index)">Update</button>
  </td>

</template>
