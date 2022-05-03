<template>
  <the-card>
    <div class="row">
      <div class="col d-flex gap-3 justify-content-center">
        <base-button @click="setSelectedTab('stored-resources')"
        :customStyle='isStoredSelected'
          >Stored Resources</base-button
        >
        <base-button @click="setSelectedTab('add-resource')"
        :customStyle='isAddSelected'
          >Add Resource</base-button
        >
      </div>
    </div>
  </the-card>
  <keep-alive>
    <component :is="selectedTab"> </component>
  </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "vue-guide",
          title: "Vue Official Guide",
          description: "The official vue documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google Search",
          description: "Gotta google too!",
          link: "https://google.com",
        },
      ],
    };
  },
  components: {
    StoredResources,
    AddResource,
  },
  provide() {
      return{
          resources: this.storedResources,
          addResource: this.addResource,
          removeResource: this.removeResource
      }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title , description , link){
      let item = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link
        }
        this.storedResources.unshift(item);
        this.selectedTab = 'stored-resources'
    },
    removeResource(resId){
      let resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex , 1);
    }
    
  },
  computed: {
      isStoredSelected () {
           return this.selectedTab == 'stored-resources' ? 'defaultButton' : 'minimal';
      },
      isAddSelected () {
           return this.selectedTab == 'add-resource' ? 'defaultButton' : 'minimal';
      }
  }
};
</script>
