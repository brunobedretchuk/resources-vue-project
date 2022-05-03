<template>
  <ul>
    <resource-item
      v-for="el in resources"
      :key="el.id"
      :title="el.title"
      :description="el.description"
      :link="el.link"
    >
    </resource-item>
  </ul>
</template>

<script>
import ResourceItem from "./ResourceItem.vue";

export default {
    name: 'ResourcesUl',
    props:{
        storedResources: Array
    },
    components: {
      ResourceItem
    },
    inject: ['resources']


};
</script>

<style scoped>
ul{
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;

}
</style>