<template>
    <model-obj
        :rotation="rotation"
        :backgroundColor="bgColor"
        @on-load="onLoad()"
        src="static/models/obj/earth.obj"
		mtl="static/models/obj/earth.mtl"></model-obj>
</template>

<script>
    import { ModelObj } from 'vue-3d-model'

    export default {
		props:['speed'],
		components: {
            ModelObj
        },
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
            rotate (speed) {
                this.rotation.y += 0.01;
                requestAnimationFrame( this.rotate );
            }
        }
    }
</script>
