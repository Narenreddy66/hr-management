<template>
  <nav> <div class="d-flex justify-content-between position2">
    <div class="d-flex gap-2">
      <img
        style="width: 100px; height: 20px"
        class="ps-2 mt-3"
        src="../assets/images/download.png"
      />
      <button class="btn border-0" style="width: 337px">
        <select class="form-select" aria-label="Default select example">
          <option selected>Caratred Technoligies</option>
          <option value="Caratred technologies">Caratred technologies</option>
          <option value="Tech mahindra">Tech mahindra</option>
          <option value="Tcs">Tcs</option>
        </select>
      </button>
    </div>

    <div class="mt-2">
      <button
        @click="logOut()"
        type="button"
        class="btn btn-primary"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="bottom"
        data-bs-content="Logout"
      >
        Logout
      </button>
    </div>
  </div>
  <hr class="m-0" /></nav>
 
</template>
<style scoped>
@media (min-width: 468px) and (max-width: 768px) {
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    logOut() {
      this.$router.push("/");
    },
  },
};
</script>
