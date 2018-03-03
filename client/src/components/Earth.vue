<template>
    <model-collada
        :rotation="rotation"
        :backgroundColor="bgColor"
        @on-load="onLoad"
        src="static/models/obj/earth.dae"></model-collada>
</template>

<script>
    import { ModelCollada } from 'vue-3d-model'

    export default {
        data(){ 
            return {
                rotation: {
                    x: -Math.PI / 2,
                    y: 0,
                    z: 0
                },
                bgColor: '#1b1b1b'
            }
        },
        methods: {
            onLoad () {
                this.rotate();
            },
            rotate () {
                this.rotation.z += 0.01;
                requestAnimationFrame( this.rotate );
            }
        },
        components: {
            ModelCollada
        }
    }
</script>
