<template>
    <div class="p-4 m-auto mt-20vh max-w-md">
        <n-card>
            <n-gradient-text
                :size="24"
                class="mb-4"
            >
                Admin Dashboard
            </n-gradient-text>
            <n-form
                ref="formReference"
                :model="formValue"
                :rules="rules"
            >
                <n-form-item
                    label="Username"
                    path="username"
                >
                    <n-input
                        v-model:value="formValue.username"
                        placeholder="Input username"
                    />
                </n-form-item>
                <n-form-item
                    label="Password"
                    path="password"
                >
                    <n-input
                        v-model:value="formValue.password"
                        placeholder="Input password"
                        type="password"
                    />
                </n-form-item>
                <n-button
                    type="primary"
                    @click.prevent="handleClick"
                >
                    Login
                </n-button>
            </n-form>
        </n-card>
    </div>
</template>

<script setup lang="ts">
import {FormInst, FormRules, useMessage} from 'naive-ui';

const formReference = ref<FormInst | null>(null);
const formValue = ref({
    username: '',
    password: ''
});
const rules: FormRules = {
    username: [{
        required: true,
        trigger: ['blur'],
        min: 5,
        max: 30,
        message: 'Please input correct username'
    }],
    password: [{
        required: true,
        trigger: ['blur'],
        min: 5,
        max: 30,
        message: 'Please input correct password'
    }]
};
const message = useMessage();
const handleClick = () => {
    formReference.value?.validate(error => {
        if (error) {
            message.warning('Something error');
        }
    });
};
</script>
