<script setup>
defineProps(['error']);

const handleClearError = () => {
    return clearError({ redirect: '/' });
}

</script>

<template>
    <div>
        <p class="mt-7 text-7xl text-red-700">{{ error.statusCode }}</p>
        <p class="mt-7 text-7xl text-red-700">{{ error.message }}</p>
    </div>
    <div>
        <button @click="handleClearError"
            class="block m-10 rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
            Go Home...
        </button>
    </div>
</template>
