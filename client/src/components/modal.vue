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
        <table class="table table-striped" v-if="id == 'editData'">
          <thead>
            <tr>
              <th>Categories</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            This is the contnent
          </tbody>
        </table>
        <div v-else>
            This is the another case
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> 
</template>
<script>
export default {
  props:[
    'id',
    'title',
    'content'
  ]
}
</script>
<style scoped>

</style>
