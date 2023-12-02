<script setup>

const { data } = await useFetch('/api/done?name=dona', {
    method: 'POST',
    body: { age: 20 }
});

</script>

<template>
    <h1>hello from 1 home</h1>
    <h1>{{ data.message }}</h1>
</template>

<style  scoped>
li .router-link-exact-active {
    color: red;
}
</style>