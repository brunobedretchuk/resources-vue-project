<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close='okayError'> 
  <template #default>
      <p>At least one input is invalid.</p>
      <p>Please check all inputs to make sure none of them is empty.</p>
  </template>
  <template #actions>
      <base-button @click="okayError">Okay</base-button>
  </template>
  
  </base-dialog>
  <the-card>
    <div class="row">
      <div class="col text-center">
        <h3>Insert Resource's Data</h3>
        <form @submit.prevent="submitData">
          <div class="form-group">
            <label for="title">Title</label>
            <input
              name="title"
              id="title"
              type="text"
              class="form-control"
              ref="inputTitle"
            />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              name="description"
              id="description"
              type="text"
              class="form-control"
              ref="inputDesc"
            >
            </textarea>
          </div>
          <div class="form-group">
            <label for="link">Link</label>
            <input
              name="link"
              id="link"
              type="url"
              class="form-control"
              ref="inputLink"
            />
          </div>
          <base-button class="mt-3">Submit</base-button>
        </form>
      </div>
    </div>
  </the-card>
</template>

<script>
export default {
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredInputs = [
        this.$refs.inputTitle.value,
        this.$refs.inputDesc.value,
        this.$refs.inputLink.value,
      ];

      for (let input of enteredInputs) {
        if (input.trim() === "") {
          this.inputIsInvalid = true;
          return;
        }
      }

      this.addResource(enteredInputs[0], enteredInputs[1], enteredInputs[2]);
      this.$refs.inputTitle.value = "";
      this.$refs.inputDesc.value = "";
      this.$refs.inputLink.value = "";
    },
    okayError(){
        this.inputIsInvalid = false
    }
  },
  inject: ["addResource"],
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
