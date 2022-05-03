<template>
  <div class="row">
    <div class="col-8 offset-2 d-flex justify-content-center">
      <div class="card" style="width: 35rem">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card{
  box-shadow: 1px 2px 10px 1px rgb(165, 165, 165);
  padding: .5rem;
  border-radius: 20px;
  margin-bottom: 40px;
}
</style>
