<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    import { store, mutations } from '@/store.js'

    export default {
        methods: {
            closeSidebarPanel: mutations.toggleNav
        },
        computed: {
            isPanelOpen() {
                return store.isNavOpen
            }
        }
    }
</script>
<style>
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateZ(-100%);
        transition: all 150ms ease-in 0s
    }

    /* .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        position: fixed;
        left: 0;
        cursor: pointer;
    } */

    .sidebar-panel {
        overflow-y: visible;
        background-color: #0D0D0D;
        position: fixed;
        left: 0;
        top: 14vh;
        height: 18vh;
        z-index: 999;
        padding-top: 3vh;
        padding-right: 5vw;
        width: 100vw;
    }
    
</style>