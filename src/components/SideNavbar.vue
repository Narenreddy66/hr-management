<template>
  <div>
    <div class="d-flex gap-2">
      <i class="bi bi-bezier"></i>
      <h6 class="ps-2">Dashboard</h6>
    </div>

    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            <div class="d-flex gap-2">
              <i class="bi bi-gear-wide"></i> Recuritment
            </div>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Posting</li>
              <li>Interviews</li>
              <li>Appointment</li>
              <li>Requistion</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            <div class="d-flex gap-2">
              <i class="bi bi-backpack-fill"></i>
              Engagement
            </div>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Leave request</li>
              <li>Attendence</li>
              <li class @click="shiftPage()">Shift</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button
            class="accordion-button text-nowrap"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseThree"
          >
            <div class="d-flex gap-2">
              <i class="bi bi-people"></i>
              Employee Details
            </div>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li class="active text-nowrap ps-2" @click="employeeSummary()">
                Employee summary
              </li>
              <li>Onboarding</li>
              <li>Journey</li>
              <li>Greaivance</li>
              <li>Training</li>
              <li>Exit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion" id="accordionPanelsStayOpenExample1">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne1">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne1"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne1"
          >
            <div class="d-flex gap-2">
              <i class="bi bi-star"></i>
              Performance
            </div>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne1"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne1"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Approsals</li>
              <li>Promotions</li>
              <li>Ratings</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo2">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo2"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseTwo2"
          >
            <div class="d-flex gap-2">
              <i class="bi bi-wallet-fill"></i>
              Expenses
            </div>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo2"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingTwo2"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Claims</li>
              <li>Advances</li>
              <li>Fleets</li>
              <li>Travels</li>
              <li>Liabilites</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
li.active {
  color: white !important;
  white-space: nowrap;
  font-size: 12px;
  font-family: "Poppins", sans-serif;

  background: #5b76ff;
  border-radius: 5px;

  line-height: 10px;
}
li {
  font-size: 14px;
  line-height: 30px !important;
}
.padding {
  padding: 10px 33px 10px 25px;
}
.accordion-item {
  border: none !important;
}
.accordion-button:not(.collapsed)::after {
  background-image: none;
}
.accordion-button:not(.collapsed) {
  color: white;
  background-color: crimson;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
  padding: 10px 10px 10px 10px;
  font-size: 15px;
  border-radius: 6px;
}
</style>
<script>
export default {
  data() {
    return {
      activeListItem: null,
    };
  },
  methods: {
    employeeSummary(clickedId) {
      this.activeListItem = clickedId;
      this.$router.push({
        path: "/employeesummary",
        query: {
          id: clickedId,
          name: "employeedetails",
        },
      });
    },
    // shiftPage(clickedId) {
    //   this.activeListItem = clickedId;
    //   this.$router.push({
    //     path: "/shiftpage",
    //     query: {
    //       id: clickedId,
    //       name: "shiftpage",
    //     },
    //   });
    // },
  },
};
</script>