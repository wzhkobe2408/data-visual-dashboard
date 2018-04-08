<template>
<div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{{ title }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <slot name="main"></slot>
      </div>
      <div class="modal-footer">
        <slot name="cancel"></slot>
        <slot name="confirm"></slot>
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
    'title'
  ],
  data() {
      return {
      }
    },
    methods: {
    }
}
</script>
<style scoped>
    .modal-footer .btn {
        margin-right: 10px;
    }
    #addData {
        background: none;
        box-shadow: none;
        overflow-y: hidden;
    }
</style>