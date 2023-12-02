<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products');  // the response is cached by default, to disable it, use the option { cache: false }
</script>

<template>
    <Head>
        <Title>Products</Title>
        <Meta name="description" content="Products page" />
    </Head>
    <h1>products</h1>
    <section class=" grid grid-cols-4 gap-5">
        <div v-for="prod in products" :key="prod.id">
            <ProductCard :product="prod" />
        </div>
    </section>
</template>

