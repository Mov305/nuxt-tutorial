
<script setup>
definePageMeta({
    layout: 'products',
});

const { id } = useRoute().params;

const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`, { cache: 'force-cache' });  // the response is cached by default, to disable it, use the option { cache: false }
if (!product.value) {
    throw createError({ statusCode: 404, message: 'product not found', fatal: true });

}

useHead({
    title: product.value.title,
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: product.value.description,
        },
    ]
});
</script>

<template>
    <section class=" flex flex-col gap-2">
        <div>
            <h1>done</h1>
            <p> id:{{ id }}</p>
        </div>
        <div class=" flex items-center justify-center bg-slate-100 rounded-md border p-4 gap-2">
            <h2>{{ product.title }}:</h2>
            <p>{{ product.price }} $</p>
        </div>
    </section>
</template>



<style lang="scss" scoped></style>