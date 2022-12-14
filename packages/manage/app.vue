<template>
    <n-message-provider>
        <NuxtLayout>
            <router-view />
        </NuxtLayout>
    </n-message-provider>
</template>

<script lang="ts" setup>
const router = useRouter();
router.beforeEach(to => {
    console.log(to.fullPath);
});
</script>
