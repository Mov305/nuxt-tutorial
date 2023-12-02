<template>
    <div>
        this is the done page for don
    </div>
    <div class=" flex items-center justify-center">
        <slot />
    </div>
    <header>
        <nav>
            <ul class="flex items-center justify-between p-8 max-w-3xl">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Done</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
