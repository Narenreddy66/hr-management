<template>
  <div class=" ">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="d-flex gap-2">
        <i class="bi bi-bezier"></i>
        <h6 class="text-dashboard">Dashboard</h6>
      </div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_146_333)">
                  <path
                    d="M18 11.2498V17.9998H9V11.2498H11.25V8.99979H15.75V11.2498H18ZM12.375 11.2498H14.625V10.1248H12.375V11.2498ZM16.875 14.6248H15.75V15.7498H14.625V14.6248H12.375V15.7498H11.25V14.6248H10.125V16.8748H16.875V14.6248ZM16.875 12.3748H10.125V13.4998H16.875V12.3748ZM13.7549 7.87479C13.4385 7.51736 13.0635 7.24197 12.6299 7.04861C12.1963 6.85526 11.7363 6.75565 11.25 6.74979C10.7812 6.74979 10.3447 6.83768 9.94043 7.01346C9.53613 7.18924 9.17871 7.42947 8.86816 7.73416C8.55762 8.03885 8.31445 8.3992 8.13867 8.81522C7.96289 9.23123 7.875 9.66776 7.875 10.1248C7.875 10.6638 7.75488 11.1707 7.51465 11.6453C7.27441 12.1199 6.93457 12.5183 6.49512 12.8406C6.75879 12.9754 7.00488 13.1306 7.2334 13.3064C7.46191 13.4822 7.67578 13.6814 7.875 13.9041V16.8748C7.875 16.4119 7.78711 15.9754 7.61133 15.5652C7.43555 15.1551 7.19531 14.7976 6.89062 14.493C6.58594 14.1883 6.22559 13.9451 5.80957 13.7635C5.39355 13.5818 4.95703 13.4939 4.5 13.4998C4.03125 13.4998 3.59473 13.5877 3.19043 13.7635C2.78613 13.9392 2.42871 14.1795 2.11816 14.4842C1.80762 14.7888 1.56445 15.1492 1.38867 15.5652C1.21289 15.9812 1.125 16.4178 1.125 16.8748H0C0 16.4471 0.0585938 16.034 0.175781 15.6355C0.292969 15.2371 0.459961 14.8592 0.676758 14.5017C0.893555 14.1443 1.15723 13.8279 1.46777 13.5525C1.77832 13.2771 2.12402 13.0398 2.50488 12.8406C2.07129 12.5242 1.73438 12.1287 1.49414 11.6541C1.25391 11.1795 1.13086 10.6697 1.125 10.1248C1.125 9.6619 1.21289 9.22537 1.38867 8.81522C1.56445 8.40506 1.80469 8.04764 2.10938 7.74295C2.41406 7.43826 2.77148 7.1951 3.18164 7.01346C3.5918 6.83182 4.03125 6.74393 4.5 6.74979C5.03906 6.74979 5.5459 6.8699 6.02051 7.11014C6.49512 7.35037 6.89355 7.69022 7.21582 8.12967C7.43848 7.69022 7.72266 7.29764 8.06836 6.95193C8.41406 6.60623 8.80957 6.31912 9.25488 6.09061C8.82129 5.7742 8.48438 5.37869 8.24414 4.90408C8.00391 4.42947 7.88086 3.91971 7.875 3.37479C7.875 2.9119 7.96289 2.47537 8.13867 2.06522C8.31445 1.65506 8.55469 1.29764 8.85938 0.99295C9.16406 0.688263 9.52148 0.445099 9.93164 0.263458C10.3418 0.0818176 10.7812 -0.006073 11.25 -0.000213623C11.7129 -0.000213623 12.1494 0.087677 12.5596 0.263458C12.9697 0.43924 13.3271 0.679474 13.6318 0.984161C13.9365 1.28885 14.1797 1.6492 14.3613 2.06522C14.543 2.48123 14.6309 2.91776 14.625 3.37479C14.625 3.91385 14.5049 4.42068 14.2646 4.89529C14.0244 5.3699 13.6846 5.76834 13.2451 6.09061C13.6436 6.28983 14.0039 6.53885 14.3262 6.83768C14.6484 7.13651 14.9209 7.48221 15.1436 7.87479H13.7549ZM4.5 12.3748C4.81055 12.3748 5.10059 12.3162 5.37012 12.199C5.63965 12.0818 5.87988 11.9207 6.09082 11.7156C6.30176 11.5105 6.46289 11.2732 6.57422 11.0037C6.68555 10.7342 6.74414 10.4412 6.75 10.1248C6.75 9.81424 6.69141 9.5242 6.57422 9.25467C6.45703 8.98514 6.2959 8.7449 6.09082 8.53397C5.88574 8.32303 5.64844 8.1619 5.37891 8.05057C5.10938 7.93924 4.81641 7.88065 4.5 7.87479C4.18945 7.87479 3.89941 7.93338 3.62988 8.05057C3.36035 8.16776 3.12012 8.32889 2.90918 8.53397C2.69824 8.73904 2.53711 8.97635 2.42578 9.24588C2.31445 9.51541 2.25586 9.80838 2.25 10.1248C2.25 10.4353 2.30859 10.7254 2.42578 10.9949C2.54297 11.2644 2.7041 11.5047 2.90918 11.7156C3.11426 11.9265 3.35156 12.0877 3.62109 12.199C3.89062 12.3103 4.18359 12.3689 4.5 12.3748ZM9 3.37479C9 3.68533 9.05859 3.97537 9.17578 4.2449C9.29297 4.51443 9.4541 4.75467 9.65918 4.96561C9.86426 5.17654 10.1016 5.33768 10.3711 5.44901C10.6406 5.56033 10.9336 5.61893 11.25 5.62479C11.5605 5.62479 11.8506 5.56619 12.1201 5.44901C12.3896 5.33182 12.6299 5.17068 12.8408 4.96561C13.0518 4.76053 13.2129 4.52322 13.3242 4.25369C13.4355 3.98416 13.4941 3.69119 13.5 3.37479C13.5 3.06424 13.4414 2.7742 13.3242 2.50467C13.207 2.23514 13.0459 1.9949 12.8408 1.78397C12.6357 1.57303 12.3984 1.4119 12.1289 1.30057C11.8594 1.18924 11.5664 1.13065 11.25 1.12479C10.9395 1.12479 10.6494 1.18338 10.3799 1.30057C10.1104 1.41776 9.87012 1.57889 9.65918 1.78397C9.44824 1.98904 9.28711 2.22635 9.17578 2.49588C9.06445 2.76541 9.00586 3.05838 9 3.37479Z"
                    fill="#444444"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_146_333">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Recuritment
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M5.25 15.75C4.8375 15.75 4.48425 15.603 4.19025 15.309C3.89625 15.015 3.7495 14.662 3.75 14.25V6C3.75 5.5875 3.897 5.23425 4.191 4.94025C4.485 4.64625 4.838 4.4995 5.25 4.5H6.75V2.625C6.75 2.3125 6.8595 2.04675 7.0785 1.82775C7.2975 1.60875 7.563 1.4995 7.875 1.5H10.125C10.4375 1.5 10.7033 1.6095 10.9223 1.8285C11.1413 2.0475 11.2505 2.313 11.25 2.625V4.5H12.75C13.1625 4.5 13.5158 4.647 13.8098 4.941C14.1038 5.235 14.2505 5.588 14.25 6V14.25C14.25 14.6625 14.103 15.0158 13.809 15.3098C13.515 15.6038 13.162 15.7505 12.75 15.75C12.75 15.9625 12.678 16.1408 12.534 16.2848C12.39 16.4288 12.212 16.5005 12 16.5C11.7875 16.5 11.6093 16.428 11.4653 16.284C11.3213 16.14 11.2495 15.962 11.25 15.75H6.75C6.75 15.9625 6.678 16.1408 6.534 16.2848C6.39 16.4288 6.212 16.5005 6 16.5C5.7875 16.5 5.60925 16.428 5.46525 16.284C5.32125 16.14 5.2495 15.962 5.25 15.75ZM6 13.5H7.125V6.75H6V13.5ZM8.4375 13.5H9.5625V6.75H8.4375V13.5ZM10.875 13.5H12V6.75H10.875V13.5ZM7.875 4.5H10.125V2.625H7.875V4.5Z"
                  fill="#444444"
                />
              </svg>
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
/* .accordion-button:not(.collapsed)::after {
  /* background-image: none; */
/* } */
.accordion-button:not(.collapsed) {
  color: black;
  background-color: white !important;
  box-shadow: none;
  /* box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125); */
  padding: 10px 10px 10px 10px;
  font-size: 15px;
  border-radius: 6px;
}
ul {
  padding-left: 15px;
}
.bi-bezier::before {
  content: "\f18b";
  padding-left: 10px;
}
.text-dashboard{
  opacity: 0.8;
  color: #000000;
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