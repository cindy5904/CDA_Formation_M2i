<script setup>

</script>

<template>
<div class="container">
    <div class="img-filter">
        <img src="../assets/filt.png" alt="icone filtre">
    </div>
    <form action="">
        <input type="text" placeholder="Search by Name..." class="search-input">
    </form>
</div>
</template>

<style scoped>
.container {
    margin-top: 25px;
    text-align: center;
}
img {
    width: 50px;
}
.search-input {
    border-radius: 10px;
    padding: 12px;
    width: 350px;
}
.search-input:focus {
    outline: none;
}

</style>