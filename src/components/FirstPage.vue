<template>
  <div class="  ">
    <div class="position-sticky top-0 bg-white" style="z-index: 100">
      <SideBar />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <SideNavbar />
        </div>
        <div class="col-10">
          <div class="d-flex justify-content-between mt-1">
            <div class="d-flex gap-2">
              <i
                style="margin-top: 7px"
                class="bi bi-arrow-left-square-fill"
              ></i>
              <i
                style="margin-top: 7px"
                class="bi bi-arrow-right-square-fill"
              ></i>

              <h5 class="mt-2 text-nowrap" style="max-width: 100%">
                Add Shift
              </h5>
              <input
                type=" search"
                class="rounded-1 border-1 bg-light w-50 widthatview"
                placeholder="Search information"
                style="max-width: 100%"
              />
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn border-1 rounded-1 bg-light">
                Export
              </button>
              <button type="button" class="btn border-1 rounded-1 bg-light">
                Filter
              </button>
              <button
                type="button"
                class="btn border-1 rounded-3 bg-primary text-white"
              >
                Add shift+
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <div>
              <img src="../assets/images/Group 381.jpg" class="img-fluid" />
              <div class="d-flex justify-content-center mb-5">
                <button class="btn btn-primary border-0 rounded-2">
                  Create Shift+
                </button>
              </div>
            </div>
          </div>
          <!-- <div >
    <router-link to="/sidebar"><button class=" btn btn-primary  text -white border-0 "> + Create Shift</button></router-link>
  </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideNavbar from "./SideNavbar.vue";
import SideBar from "./SideBar.vue";
export default {
  name: "FirstPage",
  components: { SideNavbar, SideBar },

  data() {
    return {};
  },
};
</script>
