<template>
  <div class="position2">
    <SideBar />
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2">
        <div class="bg-black position1">
          <SideNavbar />
        </div>
      </div>
      <div class="col-lg-10 col-md-9 col-sm-12">
        <!-- v-for="(employee, index) in employeeSummary"
        :key="index" -->
        <div class="d-flex justify-content-between mt-1 position4">
          <div class="d-flex gap-2">
            <router-link class="m-1 bg-black mt-1" to="employeesummary">
              <i class="bi bi-arrow-left-square-fill"></i
            ></router-link>

            <i
              style="margin-top: 7px"
              class="bi bi-arrow-right-square-fill"
            ></i>

            <h6 class="mt-2 text-nowrap">View employee</h6>
            <input
              type=" search"
              class="rounded-1 border-1 bg-light w-75 widthatview padding"
              placeholder="Search information"
            />
          </div>
          <div class="d-flex gap-2">
            <button type="button" class="btn border-1 rounded-1 bg-light">
              Export
            </button>
            <button type="button" class="btn border-1 rounded-1 bg-light">
              Filter
            </button>

            <button type="button" class="btn btn-primary rounded-3">+</button>
          </div>
        </div>
        <div class="card mt-2">
          <div class="d-flex justify-content-between bg-color text-white">
            <div class="d-flex align-items-center gap-2 ps-2">
              <div><i class="bi bi-person-square"></i></div>
              <div v-if="employee && employee.employee_name" class="">
                <p id="name">{{ employee.employee_name }}</p>
                <label class="" for="name">Name:</label>
              </div>
            </div>
            <div class="d-flex align-items-center gap-2">
              <div><i class="bi bi-envelope"></i></div>
              <div class="">
                <p id="email">{{ employee.prefered_email }}</p>
                <label class="" for="email">Email:</label>
              </div>
            </div>
            <div class="d-flex align-items-center gap-2">
              <div><i class="bi bi-telephone"></i></div>
              <div class="">
                <p id="mobileno">{{ employee.emergency_phone_number }}</p>
                <label class="" for="mobileno">Mobileno:</label>
              </div>
            </div>
            <div class="d-flex align-items-center gap-2">
              <div><i class="bi bi-person-plus"></i></div>
              <div class="">
                <p id="desigination">{{ employee.designation }}</p>
                <label class="" for="desigination">Desigination:</label>
              </div>
            </div>

            <div class="pe-3 d-flex align-items-center">
              <!-- <p id="Status" class="pe-3">Status</p> -->
              <button
                style="font-size: 15px"
                class="btn btn- bg-success border-0 rounded-3 text-white mt-2"
                v-if="employee.status == 'Active'"
              >
                {{ employee.status }}
              </button>
              <button
                style="font-size: 15px"
                class="btn btn- bg-danger border-0 rounded-3 text-white mt-2"
                v-if="employee.status !== 'Active'"
              >
                {{ employee.status }}
              </button>
            </div>
          </div>
        </div>
        <!-- navpills -->
        <ul class="nav nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              >Personal</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              >Attendence</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
              >Job-details</a
            >
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div class="row">
              <!-- v-for="(employee,index) in data" :key="index" -->
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <div class="d-flex justify-content-between ps-2">
                      <div class="d-flex gap-2">
                        <i class="bi bi-person-circle"></i>
                        <p>PrimaryDetails</p>
                      </div>

                      <i class="bi bi-pencil"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div v-if="employee && employee.employee_name" class="">
                        <p id="name">{{ employee.employee_name }}</p>

                        <label class="text-muted" for="name">Name:</label>
                      </div>
                      <div class=" ">
                        <!-- <p id="email">{{ employee.prefered_contact_email }}</p> -->

                        <label class="text-muted" for="email">Email:</label>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                      <div class="">
                        <p id="name">{{ employee.first_name }}</p>

                        <label class="text-muted" for="name">FirstName:</label>
                      </div>
                      <div class="">
                        <p id="email">{{ employee.last_name }}</p>

                        <label class="text-muted" for="email">LastName:</label>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                      <div class="">
                        <p id="name">{{ employee.salutation }}</p>

                        <label class="text-muted" for="name">Salutation:</label>
                      </div>
                      <div class="">
                        <p id="email">{{ employee.date_of_birth }}</p>

                        <label class="text-muted" for="email">DOB:</label>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                      <div class="">
                        <p id="name">{{ employee.blood_group }}</p>

                        <label class="text-muted" for="name"
                          >Blood-group:</label
                        >
                      </div>
                      <div class="">
                        <p id="email">Yes</p>
                        <label class="text-muted" for="email"
                          >MartialStatus:</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mt-3">
                  <div class="card-header">
                    <div class="d-flex justify-content-between ps-2">
                      <div class="d-flex gap-2">
                        <i class="bi bi-people-fill"></i>
                        <p>FamilyDetails</p>
                      </div>
                      <i class="bi bi-pencil"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <p></p>
                  </div>
                </div>
                <div class="card mt-3 mb-3">
                  <div class="card-header">
                    <div class="d-flex justify-content-between ps-2">
                      <div class="d-flex gap-2">
                        <i class="bi bi-people-fill"></i>
                        <p>ContactDetails</p>
                      </div>
                      <i class="bi bi-pencil"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between ps-2">
                      <div class="">
                        <p id="name">{{ employee.emergency_phone_number }}</p>

                        <label class="text-muted" for="name">Mobileno:</label>
                      </div>
                      <div class="">
                        <p id="email">{{ employee.emergency_phone_number }}</p>

                        <label class="text-muted" for="email"
                          >EmergencyMobileno:</label
                        >
                      </div>
                    </div>
                    <div class="d-flex justify-content-between ps-2 mt-2">
                      <div class="">
                        <p id="name"></p>
                        <!-- {{ employee.personal_email }} -->
                        <label class="text-muted" for="name">Mailid:</label>
                      </div>
                      <div class="">
                        <p id="email"></p>
                        <!-- {{ employee.company_email }} -->
                        <label class="text-muted" for="email"
                          >Office mail-id:</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="card mt-1">
                  <div class="card-header">
                    <div class="d-flex justify-content-between ps-2">
                      <div class="d-flex gap-2">
                        <i class="bi bi-geo-alt-fill"></i>
                        <p>Bio/Coverletter</p>
                      </div>

                      <i class="bi bi-pencil"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="text-muted">{{ employee.bio }}</p>
                  </div>
                </div>
                <div class="card mt-5">
                  <div class="card-header">
                    <div class="d-flex justify-content-between ps-2">
                      <div class="d-flex gap-2">
                        <i class="bi bi-geo-alt-fill"></i>
                        <p>Address</p>
                      </div>
                      <i class="bi bi-pencil"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <label for="cuurentAddress">Current Address:</label><br />
                      <p></p>
                      <label for="cuurentAddress">Permanent Address:</label
                      ><br />
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="card mt-5">
                  <div class="card-header">
                    <div class="d-flex justify-content-between ps-2">
                      <div class="d-flex gap-2">
                        <i class="bi bi-building"></i>
                        <p>Education</p>
                      </div>

                      <i class="bi bi-pencil"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <div class="d-flex justify-content-between ps-2">
                      <p>Approvers</p>
                      <i class="bi bi-pencil"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p>narenreddy</p>
                        <label class="text-muted" for="leave"
                          >Expense Approver</label
                        >
                      </div>
                      <div>
                        <p>narenreddy</p>
                        <label class="text-muted" for="leave"
                          >Leave Approver</label
                        >
                      </div>
                      <div>
                        <p>narenreddy</p>
                        <label class="text-muted" for="leave"
                          >Shift Approver</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mt-3">
                  <div class="card-header">
                    <div class="d-flex justify-content-between ps-2">
                      <p>Attendence Information</p>
                      <i class="bi bi-pencil"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p>Biometric</p>
                        <label class="text-muted" for="leave">Device</label>
                      </div>
                      <div>
                        <p>2023-2024 holidays</p>
                        <label class="text-muted" for="leave"
                          >Holiday list</label
                        >
                      </div>
                      <div>
                        <p>{{ employee.default_shift }}</p>

                        <label class="text-muted" for="leave"
                          >Defualt Shift</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SideBar from "./SideBar.vue";
import SideNavbar from "./SideNavbar.vue";
export default {
  components: {
    SideBar,
    SideNavbar,
  },
  data() {
    return {
      data: [],
      employeeSummary: [],
      currentEmployee: [],
    };
  },

  mounted() {
    // const employeeDetails = this.$route.params.employee;
    // console.log(employeeDetails);
    this.fetchData();
  },
  methods: {
    fetchData(name) {
      axios
        .get(
          "http://192.168.1.194:8000/api/method/life_slimming.events.employee_details"
        )
        .then((response) => {
          this.employeeSummary = response.data.message;
          this.employeeSummary.filter((employee) => {
            if (employee.name == name) {
              this.currentEmployee = employee;
            }
          });
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
};
</script>
<style scoped>
.position2 {
  position: sticky;
  top: 0px;
  z-index: 100;
  background: white;
}
thead .position1 {
  position: sticky;
  top: 20px;
  z-index: 1;

  background: white;
}
.bg-color {
  background: #5b76ff;
  border-radius: 5px;
  font-size: 14px;
  height: 100px;
}
.nav-pills .nav-link.active {
  background-color: transparent !important;
  color: #5b76ff !important;
  border-bottom: 4px solid #5b76ff !important;
}
.nav-pills .nav-link {
  color: black;
}
.card {
  font-size: 13px;
}
.padding {
  padding: 5px 20px 5px 20px;
}
p {
  margin-bottom: 0px !important;
}
.bi-arrow-left-square-fill::before {
  content: "\f12d";
  color: black;
  margin-top: 9px;
}
.position1 {
  position: sticky;
  top: 20px;
  z-index: 10;

  background: white;
}
</style>
