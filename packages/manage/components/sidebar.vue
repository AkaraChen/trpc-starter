<template>
    <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="isCollapsed"
        :on-collapse="() => isCollapsed = true"
        :on-expand="() => isCollapsed = false"
        show-trigger
        class="h-screen"
    >
        <n-gradient-text
            v-if="!isCollapsed"
            :size="!isCollapsed ? 24 : 14"
            class="flex items-center justify-center py-4"
        >
            Manage
        </n-gradient-text>
        <n-menu
            :options="routes"
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :collapsed="isCollapsed"
            :on-collapse="() => isCollapsed = true"
            :on-expand="() => isCollapsed = false"
        />
    </n-layout-sider>
</template>

<script lang="ts" setup>
import routes from '../router/index';
import {useMediaQuery} from '@vueuse/core';
const isLargeScreen = useMediaQuery('(min-width: 960px)');
const isCollapsed = ref(!isLargeScreen.value);

watch(isLargeScreen, () => {
    isCollapsed.value = !isLargeScreen.value;
});
</script>
