<template>
<div class="modal fade" :id="id" tabindex="-1" role="dialog"                   aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{{ title }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" @click="submitChange" class="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div> 
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props:[
    'id',
    'title',
    'label',
    'data'
  ],
  data() {
      return {
      }
    },
    methods: {
      submitChange() {
        console.log('This is the test')
        console.log(this.props)
      }
    }
}
</script>
<style scoped>
</style>