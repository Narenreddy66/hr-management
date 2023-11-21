<template>
  <div class="position2">
    <SideBar />
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 col-md-3">
        <div class="bg-black position1">
          <SideNavbar />
        </div>
      </div>
      <div class="col-lg-10 col-md-9 col-sm-12">
        <div class="d-flex justify-content-between mt-1 position4">
          <div class="d-flex gap-2">
            <i @click="backMove()" class="bi bi-arrow-left-square-fill"></i>
            <i class="bi bi-arrow-right-square-fill"></i>

            <h6 class="mt-2 text-nowrap">Add Employee</h6>
            <input
              style="width: 300px"
              type=" search"
              class="rounded-1 border-1 bg-light w-75 widthatview padding"
              placeholder="Search information"
              v-model="searchQuery"
            />
          </div>
          <div class="d-flex gap-2">
            <button type="button" class="btn border-1 rounded-1 bg-light">
              Export
            </button>
            <button type="button" class="btn border-1 rounded-1 bg-light">
              Filter
            </button>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary rounded-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Employee+
            </button>

            <!-- Modal -->
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">
                  Employyee details
                </h6>
                <button
                  type="button"
                  class="close btn-primary border-0 rounded-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="saveData">
                  <div class="">
                    <ul
                      class="nav nav-pills mb-3 pe-5"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Employee Profile
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Documents
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Job details
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="">
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div>
                          <div class="card bg-color1 ps-1">
                            <h6>Primary Details:</h6>

                            <div class="input-group mb-3 gap-5">
                              <div>
                                <label for="username">Enter UserName:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Username"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  v-model="myData.first_name"
                                />
                              </div>
                              <div>
                                <label for="username">Enter Mail id:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Mail id"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  v-model="myData.personal_email"
                                />
                              </div>
                            </div>

                            <div
                              class="input-group mb-3 d-flex justify-content-between"
                            >
                              <div>
                                <label for="dob">Enter Date.OF.Birth:*</label>
                                <input
                                  style="width: 200px"
                                  type="date"
                                  class="form-control"
                                  placeholder="Enter D.O.B"
                                  v-model="myData.date_of_birth"
                                />
                              </div>
                              <div>
                                <label for="bloodgroup"
                                  >Enter your BloodGroup:</label
                                >
                                <div>
                                  <select
                                    class="form-select"
                                    style="width: 200px"
                                    aria-label="Default select example"
                                    v-model="myData.blood_group"
                                  >
                                    <option selected>Select</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="O">0</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div
                              class="input-group mb-3 d-flex justify-content-between"
                            >
                              <div>
                                <label for="gender">Enter Gender:</label><br />
                                <select
                                  class="form-select"
                                  style="width: 200px"
                                  aria-label="Default select example"
                                  v-model="myData.gender"
                                >
                                  <option selected>Select</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="transgender">
                                    Transgender
                                  </option>
                                  <option value="Neither say">
                                    Neither say
                                  </option>
                                </select>
                              </div>
                              <div>
                                <label for="physiacllyhandled"
                                  >Physically Handicaped:</label
                                ><br />
                                <select
                                  class="form-select"
                                  style="width: 200px"
                                  aria-label="Default select example"
                                >
                                  <option selected>Select</option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>

                                  <option value="Neither say">
                                    Neither say
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div
                              class="input-group d-flex justify-content-between mb-2"
                            >
                              <div>
                                <label for="martial"
                                  >Enter your MartialStatus:</label
                                >
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                  v-model="myData.marital_status"
                                >
                                  <option selected>select</option>
                                  <option value="Married">Married</option>
                                  <option value="UnMarried">UnMarried</option>
                                  <option value="Not intrested to say">
                                    Not intrested to say
                                  </option>
                                </select>
                              </div>
                              <div>
                                <label for="dateofjoing">Date of Joining</label
                                ><br />
                                <input
                                  type="date"
                                  class="form-control"
                                  placeholder="enter date of joing"
                                  v-model="myData.date_of_joining"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card bg-color1 mt-2 ps-1">
                          <h6>Contact details:</h6>
                          <div class="input-group mb-3 gap-5">
                            <div>
                              <label for="username">Enter Mobileno:</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Mobile number"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                v-model="myData.emergency_phone_number"
                              />
                            </div>
                            <div>
                              <label for="username"
                                >Enter Emergency Mobileno:</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Emergency number"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                v-model="myData.emergency_phone_number"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="card bg-color1 mt-2 ps-1">
                          <h6>Job detials</h6>
                          <div class="input-group mb-3 gap-5">
                            <div>
                              <label for="username">Enter desgintion:</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter desgination"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                v-model="myData.designation"
                              />
                            </div>
                            <div>
                              <label for="username">Enter Department:</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="department"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                v-model="myData.department"
                              />
                            </div>
                          </div>

                          <div class="input-group mb-3 gap-5">
                            <div>
                              <label for="dob">Enter shift:</label>
                              <input
                                type=" date"
                                class="form-control"
                                placeholder="Enter State"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                v-model="myData.default_shift"
                              />
                            </div>
                            <div>
                              <label for="bloodgroup">Enter Pincode:</label>
                              <input
                                type=" date"
                                class="form-control"
                                placeholder="Enter Pincode"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
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
                        ...
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        ...
                      </div>

                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type=" submit" class="btn btn-primary">
                          Save
                        </button>
                        <!-- @click="saveData()" -->
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <table
          v-if="show"
          class="table table-striped table-responsive-lg table-responsive-md table-responsive-sm mt-3"
        >
          <thead>
            <tr class="sticky2">
              <th scope="col">S.no</th>
              <th scope="col">Id</th>
              <th scope="col">EmployeeName</th>
              <th scope="col">Department</th>
              <th scope="col">Desigination</th>
              <th scope="col">Shift type</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, index) in filteredData" :key="index">
              <td>{{ index + 1 }}</td>
              <td class="text-nowrap">{{ employee.name }}</td>
              <td>{{ employee.employee_name }}</td>
              <td>{{ employee.department }}</td>
              <td>{{ employee.designation }}</td>
              <td>{{ employee.default_shift }}</td>
              <td v-if="employee.status == 'Active'">
                <button
                  style="font-size: 12px"
                  class="btn btn-success border-0 rounded-3 text-white"
                >
                  {{ employee.status }}
                </button>
              </td>

              <td v-if="employee.status !== 'Active'">
                <button
                  style="font-size: 12px"
                  class="btn btn-danger border-0 rounded-3 text-white"
                >
                  {{ employee.status }}
                </button>
              </td>
              <td class="  ">
                <div class="d-flex gap-2">
                  <i
                    @click="detailsPage(employee.name)"
                    class="bi bi-pencil"
                  ></i
                  ><i class="bi bi-exclamation-circle"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="!show">
          <div class="card mt-2">
            <div class="d-flex justify-content-between bg-color text-white">
              <!-- <div>
                <img src=''
              </div> -->
              <div class="d-flex align-items-center gap-2 ps-2">
                <div><i class="bi bi-person-square"></i></div>
                <div class="">
                  <p id="name">{{ currentEmployee.employee_name }}</p>
                  <label class="" for="name">Name:</label>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <div><i class="bi bi-envelope"></i></div>
                <div class="">
                  <p id="email">{{ currentEmployee.personal_email }}</p>
                  <label class="" for="email">Email:</label>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <div><i class="bi bi-telephone"></i></div>
                <div class="">
                  <p id="mobileno">
                    {{ currentEmployee.emergency_phone_number }}
                  </p>
                  <label class="" for="mobileno">Mobileno:</label>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <div><i class="bi bi-person-plus"></i></div>
                <div class="">
                  <p id="desigination">{{ currentEmployee.designation }}</p>
                  <label class="" for="desigination">Desigination:</label>
                </div>
              </div>

              <div class="pe-3 d-flex align-items-center">
                <!-- <p id="Status" class="pe-3">Status</p> -->
                <button
                  style="font-size: 15px"
                  class="btn btn- bg-success border-0 rounded-3 text-white mt-2"
                  v-if="currentEmployee.status == 'Active'"
                >
                  {{ currentEmployee.status }}
                </button>
                <button
                  style="font-size: 15px"
                  class="btn btn- bg-danger border-0 rounded-3 text-white mt-2"
                  v-if="currentEmployee.status !== 'Active'"
                >
                  {{ currentEmployee.status }}
                </button>
              </div>
            </div>
          </div>

          <ul class="nav nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-home-tab1"
                data-bs-toggle="pill"
                href="#pills-home1"
                role="tab"
                aria-controls="pills-home1"
                aria-selected="true"
                >Personal</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-profile-tab1"
                data-bs-toggle="pill"
                href="#pills-profile1"
                role="tab"
                aria-controls="pills-profile1"
                aria-selected="false"
                >Attendence</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-contact-tab1"
                data-bs-toggle="pill"
                href="#pills-contact1"
                role="tab"
                aria-controls="pills-contact1"
                aria-selected="false"
                >Job-details</a
              >
            </li>
          </ul>

          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home1"
              role="tabpanel"
              aria-labelledby="pills-home-tab1"
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
                        <div class=" ">
                          <p id="name">{{ currentEmployee.employee_name }}</p>

                          <label class="text-muted" for="name">Name:</label>
                        </div>
                        <div class="text-end">
                          <p id="email">
                            {{ currentEmployee.prefered_contact_email }}
                          </p>

                          <label class="text-muted" for="email">Email:</label>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between mt-2">
                        <div class="">
                          <p id="name">{{ currentEmployee.first_name }}</p>

                          <label class="text-muted" for="name"
                            >FirstName:</label
                          >
                        </div>
                        <div class="text-end">
                          <p id="email">{{ currentEmployee.last_name }}</p>

                          <label class="text-muted" for="email"
                            >LastName:</label
                          >
                        </div>
                      </div>
                      <div class="d-flex justify-content-between mt-2">
                        <div class="">
                          <p id="name">{{ currentEmployee.salutation }}</p>

                          <label class="text-muted" for="name"
                            >Salutation:</label
                          >
                        </div>
                        <div class="text-end">
                          <p id="email">{{ currentEmployee.date_of_birth }}</p>

                          <label class="text-muted" for="email">DOB:</label>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between mt-2">
                        <div class="">
                          <p id="name">{{ currentEmployee.blood_group }}</p>

                          <label class="text-muted" for="name"
                            >Blood-group:</label
                          >
                        </div>
                        <div class="text-end">
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
                      <div class="d-flex justify-content-between">
                        <div>
                          <label class="text-muted" for="fname"
                            >FatherName:</label
                          ><br />
                          <p>Lorem ipsum</p>
                        </div>
                        <div>
                          <label class="text-muted" for="mname"
                            >MotherName:</label
                          ><br />
                          <p>Lorem, ipsum.</p>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between">
                        <div>
                          <label class="text-muted" for="fname"
                            >GaurdianName:</label
                          ><br />
                          <p>Lorem, ipsum.</p>
                        </div>
                        <div>
                          <label class="text-muted" for="fname"
                            >GaurdianName:</label
                          ><br />
                          <p>Lorem, ipsum.</p>
                        </div>
                      </div>
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
                      <div class="d-flex justify-content-between">
                        <div class="">
                          <p id="name">
                            {{ currentEmployee.emergency_phone_number }}
                          </p>

                          <label class="text-muted" for="name">Mobileno:</label>
                        </div>
                        <div class="text-end">
                          <p id="email">
                            {{ currentEmployee.emergency_phone_number }}
                          </p>

                          <label class="text-muted" for="email"
                            >EmergencyMobileno:</label
                          >
                        </div>
                      </div>
                      <div class="d-flex justify-content-between mt-2">
                        <div class="">
                          <p id="name">{{ currentEmployee.personal_email }}</p>

                          <label class="text-muted" for="name">Mailid:</label>
                        </div>
                        <div class="text-end">
                          <p id="email">{{ currentEmployee.company_email }}</p>

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
                      <p class="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure ad autem officia numquam rem voluptate, voluptates,
                        eveniet maxime voluptas et accusantium atque
                        perspiciatis exercitationem quae totam consectetur fugit
                        quibusdam nemo illum.
                      </p>
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
                        <div>
                          <label for="cuurentAddress">Current Address:</label
                          ><br />
                          <p>{{ currentEmployee.current_address }}</p>
                        </div>
                        <div>
                          <label for="cuurentAddress">Permanent Address:</label
                          ><br />
                          <p>{{ currentEmployee.permanent_address }}</p>
                          <br />
                        </div>
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
                      <div class="d-flex justify-content-between">
                        <div>
                          <p>MallaReddy institue of tech</p>
                          <label class="text-muted" for="clge"
                            >Enter Collge:</label
                          >
                        </div>
                        <div class="text-end">
                          <p>MallaReddy institue of tech</p>
                          <label class="text-muted text-end" for="clge"
                            >Enter Collge:</label
                          >
                        </div>
                      </div>
                      <div class="d-flex justify-content-between">
                        <div>
                          <p>MallaReddy institue of tech</p>
                          <label class="text-muted" for="clge"
                            >Enter Collge:</label
                          >
                        </div>
                        <div class="text-end">
                          <p>MallaReddy institue of tech</p>
                          <label class="text-muted text-end" for="clge"
                            >Enter Collge:</label
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
              id="pills-profile1"
              role="tabpanel"
              aria-labelledby="pills-profile-tab1"
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
                        <i @input="changeData()" class="bi bi-pencil"></i>
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
                          <p>{{ currentEmployee.default_shift }}</p>

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
              id="pills-contact1"
              role="tabpanel"
              aria-labelledby="pills-contact-tab1"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SideNavbar from "./SideNavbar.vue";
import SideBar from "./SideBar.vue";

export default {
  name: "EmployeeSummary",
  components: { SideNavbar, SideBar },

  data() {
    return {
      loading: false,
      data: [],
      searchQuery: "",
      employeeSummary: [],
      myData: {},
      currentEmployee: [],
      show: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    filteredData() {
      return this.employeeSummary.filter((item) => {
        return Object.values(item).some((value) => {
          return String(value)
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      });
    },
  },

  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get(
          "http://192.168.1.194:8000/api/method/life_slimming.events.employee_details"
        )
        .then((response) => {
          this.employeeSummary = response.data.message;
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    detailsPage(name) {
      this.show = false;
      this.employeeSummary.filter((employee) => {
        if (employee.name == name) {
          this.currentEmployee = employee;
        }
      });
    },
    changeData() {},
    backMove() {
      if (this.show == false) this.$router.back();
    },
    saveData() {
      this.loading = true;
      console.log(this.myData);
      axios
        .post("http://192.168.1.194:8000/api/resource/Employee", this.myData)
        .then((res) => {
          this.fetchData();
          this.myData = {};
          console.log(res);

          // this.myDetails.push(res);
        })
        .catch((error) => {
          console.log("Error i =n posting Customer Data", error);
          alert("Error in saving data. Please try again.");
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped>
/* .overflow{
    overflow-x: hidden !important;
} */
.bg-color1 {
  background: #f5f6ff;
}
.position2 {
  position: sticky;
  top: 0px;
  z-index: 100;
  background: white;
}
th {
  background-color: #dee0ff;
  color: black;
  text-align: center;
  white-space: nowrap;
  font-size: 13px;
}
.text-size {
  font-size: 12px;
}
td {
  text-align: center;
  font-size: 12px;
}
tr:hover {
  background: #9da8e1;
  color: white;
}

.position4 {
  position: sticky;
  top: 50px;
  z-index: 100;
  background: white;
}

/* .table-bordered>:not(caption) {
   border-width: 0px;
} */
.position1 {
  position: sticky;
  top: 20px;
  z-index: 1;
  /* overflow-y: scroll; */
  background: white;
}
.padding {
  padding: 5px 20px 5px 20px;
}
thead {
  position: sticky;
  top: 88px;
  z-index: 500;
  background: white;
}
.bg-color {
  background: #5b76ff;
  border-radius: 5px;
  font-size: 14px;
  height: 100px;
}
.position2 {
  position: sticky;
  top: 0px;
  z-index: 100;
  background: white;
}
thead .position1 {
  position: sticky;
  top: 30px;
  z-index: 100;

  background: white;
}
.bg-color {
  background: #5b76ff;
  border-radius: 5px;
  font-size: 14px;
  height: 70px;
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
  font-size: 14px;
  box-shadow: 0px 2px 4px 1px lightgray;
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
}
.position1 {
  position: sticky;
  top: 20px;
  z-index: 10;

  background: white;
}
</style>