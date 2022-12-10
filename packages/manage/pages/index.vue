<template>
    <div class="p-4 m-auto mt-20vh max-w-md">
        <n-card>
            <n-gradient-text
                :size="24"
                class="mb-4"
            >
                Admin Dashboard
            </n-gradient-text>
            <n-form>
                <n-form-item
                    label="Username"
                    required
                >
                    <n-input placeholder="Input username" />
                </n-form-item>
                <n-form-item
                    label="Password"
                    required
                >
                    <n-input
                        placeholder="Input password"
                        type="password"
                    />
                </n-form-item>
                <n-button type="primary">
                    Login
                </n-button>
            </n-form>
        </n-card>
    </div>
</template>
