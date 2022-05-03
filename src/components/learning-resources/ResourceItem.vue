<template>
  <li class="">
    <the-card>
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">{{ title }}</h5>
        <base-button @click="removeResource(id)"
        >Delete</base-button>
      </div>
      <p class="card-text">
        {{ description }}
      </p>
    </div>

    <div class="card-body">
      <a :href="link" class="card-link">View Resource</a>
    </div>

    
</the-card>
  </li>
</template>

<script>

export default {
  name: "ResourceItem",
  props: {
    id: String,
    title: String,
    description: String,
    link: String,
  },
  inject: ['removeResource']
  
};
</script>

<style scoped>
li {
  list-style: none;
}

a {
  color: gray;
  text-decoration: none;
  transition: 0.2s;
}

a:hover {
  color: orange;
}

button {
  font-size: 0.8rem;
}
</style>
