<template>
    <div>
        <NuxtWelcome />
    </div>
</template>

<script lang="ts" setup>
const {$client} = useNuxtApp();

await $client.greet.create.query('akara');
</script>
