/* eslint-disable no-shadow */
import {MenuOption, NIcon} from 'naive-ui';
import {Component} from 'vue';
import {HomeOutline} from '@vicons/ionicons5';
import {RouterLink} from 'vue-router';

function icon(icon: Component) {
    return () => h(NIcon, null, {default: () => h(icon)});
}

function link(title: string, path: string) {
    return () => h(RouterLink, {to: path}, {default: () => title});
}

export default [
    {
        label: link('home', '/home'),
        key: 'home',
        icon: icon(HomeOutline)
    }
] as MenuOption[];
