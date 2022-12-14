<template>
    <div class="flex">
        <n-layout has-sider>
            <sidebar />
            <n-layout-content content-style="padding: 24px">
                <slot />
            </n-layout-content>
        </n-layout>
    </div>
</template>
