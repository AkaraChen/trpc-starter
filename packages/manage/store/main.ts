import {defineStore} from 'pinia';

export default defineStore('main', {
    state() {
        return {
            count: 0
        };
    },
    actions: {
        increment() {
            this.count++;
        }
    }
});
