<template>
  <div class="position2">
    <SideBar />
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 col-md-3">
        <div class="position1">
          <SideNavbar />
        </div>
      </div>
      <div class="col-lg-10 col-md-9 col-sm-12">
        <div class="d-flex justify-content-between mt-1 position4">
          <div class="d-flex gap-2">
            <div class="d-flex gap-2 mt-1">
              <i @click="backMove()" class="bi bi-arrow-left-square-fill"></i>
              <i class="bi bi-arrow-right-square-fill"></i>
            </div>

            <h6 class="mt-2 text-nowrap">Add Employee</h6>
            <div class="position-relative">
              <input
                type="search"
                class="rounded-1 border-1 bg-light widthatview padding"
                placeholder=" Search information"
                v-model="searchQuery"
              />
              <i class="bi bi-search"></i>
            </div>
          </div>
          <div class="d-flex gap-2">
            <button type="button" class="btn border-1 rounded-1 bg-light">
              Export
            </button>
            <button type="button" class="btn border-1 rounded-1 bg-light">
              <div class="d-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  class="mt-2"
                >
                  <path
                    d="M0.4375 0.28125H13.5625V1.59375H0.4375V0.28125ZM2.625 3.34375H11.375V4.65625H2.625V3.34375ZM5.25 6.40625H8.75V7.71875H5.25V6.40625Z"
                    fill="#1C1B1F"
                  />
                </svg>
                <p>Filter</p>
              </div>
            </button>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary rounded-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              +
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
                            <h6 class="mt-1">Primary Details:</h6>

                            <div
                              class="input-group d-flex justify-content-between pe-1"
                            >
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
                              class="input-group mt-3 d-flex justify-content-between pe-1"
                            >
                              <div>
                                <label for="dob">Enter Date.OF.Birth:*</label>
                                <input
                                  style="width: 220px"
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
                                    style="width: 220px"
                                    aria-label="Default select example"
                                    v-model="myData.blood_group"
                                  >
                                    <option selected>Select</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div
                              class="input-group mt-3 d-flex justify-content-between pe-1"
                            >
                              <div>
                                <label for="gender">Enter Gender:</label><br />
                                <select
                                  class="form-select"
                                  style="width: 220px"
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
                                  style="width: 220px"
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
                              class="input-group d-flex justify-content-between mt-3 mb-3 pe-1"
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
                                  <option value="UnMarried">Unmarried</option>
                                  <option value="Not intrested to say">
                                    Not intrested to say
                                  </option>
                                </select>
                              </div>
                              <div>
                                <label for="dateofjoing">Date of Joining</label
                                ><br />
                                <input
                                  style="width: 220px"
                                  type="date"
                                  class="form-control pe-2"
                                  placeholder="enter date of joing"
                                  v-model="myData.date_of_joining"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card bg-color1 mt-2 ps-1">
                          <h6 class="mt-1">Contact details:</h6>
                          <div
                            class="input-group d-flex justify-content-between pe-1 mb-2"
                          >
                            <div>
                              <label for="username">Enter Mobileno:</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Mobile number"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                            <!-- v-model="myData.emergency_phone_number" -->
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
                              />
                              <!-- v-model="myData.per_phone_number" -->
                            </div>
                          </div>
                        </div>
                        <div class="card bg-color1 mt-2 ps-1">
                          <h6 class="mt-1">Job detials</h6>
                          <div
                            class="input-group d-flex justify-content-between pe-1 mt-2"
                          >
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

                          <div
                            class="input-group mb-2 d-flex justify-content-between pe-1"
                          >
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
        
        <div v-if="show">
        <table
          
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
              <td v-if="!employee.department">--</td>
              <td v-if="employee.department">
                {{ employee.department }}
              </td>
              <td v-if="employee.designation">{{ employee.designation }}</td>
              <td v-if="!employee.designation">--</td>
              <td v-if="!employee.default_shift">--</td>
              <td v-if="employee.default_shift">{{ employee.default_shift }}</td>
              <td class="text-center" v-if="employee.status == 'Active'">
                <div class="d-flex gap-2 justify-content-center">
                  <i class="bi bi-circle active-icon"></i>
                  <p>Active</p>
                </div>
              </td>

              <td class="text-center" v-if="employee.status == 'Inactive'">
                <div class="d-flex gap-2 justify-content-center">
                  <i class="bi bi-circle inactive"></i>
                  <p>Inactive</p>
                </div>
              </td>
              <td class="  ">
                <div class="d-flex gap-3 justify-content-center">
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
        <!-- <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div> -->
        <!-- <paginate :perPage="15" :total="filteredData.length" @paginate="handlePageChange"></paginate> -->
      </div>
  
        <div v-if="!show">
          <div class="card mt-2">
            <div class="d-flex justify-content-between bg-color text-white">
              <!-- <div>
                <img src=''
              </div> -->
              <div>
                <img
                  class="ps-1 mt-1"
                  style="width: 90px; height: 90px; border-radius: 4px"
                  src="../assets/images/Rectangle 145 - Copy.jpg"
                />
              </div>
              <div class="d-flex align-items-center gap-2 ps-2">
                <div><i class="bi bi-person-square"></i></div>
                <div class="">
                  <p id="name">{{ currentEmployee.employee_name }}</p>
                  <label class="font" style="font-size: " for="name"
                    >Name:</label
                  >
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <div><i class="bi bi-envelope"></i></div>
                <div class="">
                  <p id="email">{{ currentEmployee.personal_email }}</p>
                  <label class="font" style="font-size: " for="email"
                    >Email:</label
                  >
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <div><i class="bi bi-telephone"></i></div>
                <div class="">
                  <p id="mobileno">
                    {{ currentEmployee.emergency_phone_number }}
                  </p>
                  <label class="font" style="font-size: " for="mobileno"
                    >Mobileno:</label
                  >
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <div><i class="bi bi-person-plus"></i></div>
                <div class="">
                  <p id="desigination">{{ currentEmployee.designation }}</p>
                  <label class="font" style="font-size: " for="desigination"
                    >Desigination:</label
                  >
                </div>
              </div>

              <div class="pe-3 d-flex align-items-center">
                <!-- <p id="Status" class="pe-3">Status</p> -->
                
                <div v-if="currentEmployee.status == 'Active'" class="d-flex gap-2 align-items-center">
                  <i class="bi bi-circle active-icon"></i>
                  <p>{{ currentEmployee.status }}</p>
                </div>
             

          
                <div v-if="currentEmployee.status == 'Inactive'" class="d-flex gap-2 align-items-center">
                  <i class="bi bi-circle inactive"></i>
                  <p>{{ currentEmployee.status }}</p>
                </div>
           
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
                        <!-- modal -->
                        <!-- Button trigger modal -->
                        <button
                          type="button"
                          class="btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal123"
                        >
                          <i class="bi bi-pencil"></i>
                        </button>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <div class=" ">
                          <p id="name">{{ currentEmployee.employee_name }}</p>

                          <label class="text-muted font" for="name"
                            >Name:</label
                          >
                        </div>
                        <div class="text-end">
                          <p id="email">
                            {{ currentEmployee.prefered_contact_email }}
                          </p>

                          <label class="text-muted font" for="email"
                            >Email:</label
                          >
                        </div>
                      </div>
                      <div class="d-flex justify-content-between mt-2">
                        <div class="">
                          <p id="name">{{ currentEmployee.first_name }}</p>

                          <label class="text-muted font" for="name"
                            >FirstName:</label
                          >
                        </div>
                        <div class="text-end">
                          <p id="email">{{ currentEmployee.last_name }}</p>

                          <label class="text-muted font" for="email"
                            >LastName:</label
                          >
                        </div>
                      </div>
                      <div class="d-flex justify-content-between mt-2">
                        <div class="">
                          <p id="name">{{ currentEmployee.salutation }}</p>

                          <label class="text-muted font" for="name"
                            >Salutation:</label
                          >
                        </div>
                        <div class="text-end">
                          <p id="email">{{ currentEmployee.date_of_birth }}</p>

                          <label class="text-muted font" for="email"
                            >DOB:</label
                          >
                        </div>
                      </div>
                      <div class="d-flex justify-content-between mt-2">
                        <div class="">
                          <p id="name">{{ currentEmployee.blood_group }}</p>

                          <label class="text-muted font" for="name"
                            >Blood-group:</label
                          >
                        </div>
                        <div class="text-end">
                          <p id="email">Yes</p>
                          <label class="text-muted font" for="email"
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
                        <!-- modal3 -->
                        <!-- Button trigger modal -->
                        <button
                          type="button"
                          class="btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1234"
                        >
                          <i class="bi bi-pencil"></i>
                        </button>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <div>
                          <label class="text-muted font" for="fname"
                            >FatherName:</label
                          ><br />
                          <p>Lorem ipsum</p>
                        </div>
                        <div>
                          <label class="text-muted font" for="mname"
                            >MotherName:</label
                          ><br />
                          <p>Lorem, ipsum.</p>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between">
                        <div>
                          <label class="text-muted font" for="fname"
                            >GaurdianName:</label
                          ><br />
                          <p>Lorem, ipsum.</p>
                        </div>
                        <div>
                          <label class="text-muted font" for="fname"
                            >GaurdianNo:</label
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
                        <!-- modal3 -->
                        <!-- Button trigger modal -->
                        <button
                          type="button"
                          class="btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal12345"
                        >
                          <i class="bi bi-pencil"></i>
                        </button>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <div class="">
                          <p id="name">
                            {{ currentEmployee.emergency_phone_number }}
                          </p>

                          <label class="text-muted font" for="name"
                            >Mobileno:</label
                          >
                        </div>
                        <div class="text-end">
                          <p id="email">
                            {{ currentEmployee.emergency_phone_number }}
                          </p>

                          <label class="text-muted font" for="email"
                            >EmergencyMobileno:</label
                          >
                        </div>
                      </div>
                      <div class="d-flex justify-content-between mt-2">
                        <div class="">
                          <p id="name">{{ currentEmployee.personal_email }}</p>

                          <label class="text-muted font" for="name"
                            >Mailid:</label
                          >
                        </div>
                        <div class="text-end">
                          <p id="email">{{ currentEmployee.company_email }}</p>

                          <label class="text-muted font" for="email"
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
                        <div class="d-flex gap-2 align-items-center">
                          <i class="bi bi-geo-alt-fill"></i>
                          <p>Bio/Coverletter</p>
                        </div>
                        <!-- modal5 -->
                        <button
                          type="button"
                          class="btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal123456"
                        >
                          <i class="bi bi-pencil"></i>
                        </button>
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
                          <label class="text-muted font" for="clge"
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
                          <label class="text-muted font" for="clge"
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
                          <label class="text-muted font" for="clge"
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
                          <label class="text-muted font" for="leave"
                            >Expense Approver</label
                          >
                        </div>
                        <div>
                          <p>narenreddy</p>
                          <label class="text-muted font" for="leave"
                            >Leave Approver</label
                          >
                        </div>
                        <div>
                          <p>narenreddy</p>
                          <label class="text-muted font" for="leave"
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
                          <label class="text-muted font" for="leave"
                            >Device</label
                          >
                        </div>
                        <div>
                          <p>2023-2024 holidays</p>
                          <label class="text-muted font" for="leave"
                            >Holiday list</label
                          >
                        </div>
                        <div>
                          <p>{{ currentEmployee.default_shift }}</p>

                          <label class="text-muted font" for="leave"
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
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal123"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Personal Details
                  </h5>
                  <button
                    type="button"
                    class="close btn-primary border-0 rounded-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="input-group d-flex justify-content-between pe-1">
                    <div>
                      <label for="username">Enter FullName:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.first_name"
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
                        v-model="currentEmployee.personal_email"
                      />
                    </div>
                  </div>
                  <div class="input-group d-flex justify-content-between pe-1">
                    <div>
                      <label for="username">Enter FirstName:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Firstname"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.first_name"
                      />
                    </div>
                    <div>
                      <label for="username">Enter Lastname:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Mail id"
                        aria-label="Lastname"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.last_name"
                      />
                    </div>
                  </div>
                  <div class="input-group d-flex justify-content-between pe-1">
                    <div>
                      <label for="martial">Enter Salutation:</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="currentEmployee.salutation"
                      >
                        <option selected>select</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                      </select>
                    </div>
                    <div>
                      <label for="username">Enter Dob:</label>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Enter DOB"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.date_of_birth"
                      />
                    </div>
                  </div>
                  <div class="input-group d-flex justify-content-between pe-1">
                    <div>
                      <label for="bloodgroup">Enter your BloodGroup:</label>
                      <div>
                        <select
                          class="form-select"
                          style="width: 220px"
                          aria-label="Default select example"
                          v-model="currentEmployee.blood_group"
                        >
                          <option selected>Select</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label for="physiacllyhandled"
                        >Physically Handicaped:</label
                      ><br />
                      <select
                        class="form-select"
                        style="width: 220px"
                        aria-label="Default select example"
                      >
                        <option selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>

                        <option value="Neither say">Neither say</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- modal2 -->
          <div
            class="modal fade"
            id="exampleModal1234"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Family Details
                  </h5>
                  <button
                    type="button"
                    class="close btn-primary border-0 rounded-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <!-- 2 modal -->
                <div class="modal-body">
                  <div class="input-group d-flex justify-content-between pe-1">
                    <div>
                      <label for="username">Enter FatherName:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Fathername"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.first_name"
                      />
                    </div>
                    <div>
                      <label for="username">Enter MotherName:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="MotherName"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.personal_email"
                      />
                    </div>
                  </div>
                  <div class="input-group d-flex justify-content-between pe-1">
                    <div>
                      <label for="username">Enter Gaurdian:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Gaurdian"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.first_name"
                      />
                    </div>
                    <div>
                      <label for="username">Enter mobileno:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="MobileNo"
                        aria-label="Lastname"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.emergency_phone_number"
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- modal3 -->
          <div
            class="modal fade"
            id="exampleModal12345"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Contact Details
                  </h5>
                  <button
                    type="button"
                    class="close btn-primary border-0 rounded-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body">
                  <div class="input-group d-flex justify-content-between pe-1">
                    <div>
                      <label for="username">Enter mobileno:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="mobileno"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.emergency_phone_number"
                      />
                    </div>
                    <div>
                      <label for="username">Enter EmergencyNo:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Emergencyno"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.emergency_phone_number"
                      />
                    </div>
                  </div>
                  <div class="input-group d-flex justify-content-between pe-1">
                    <div>
                      <label for="username">Enter mailid:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Mailid"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.personal_email"
                      />
                    </div>
                    <div>
                      <label for="username">Enter Office mail-id:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Office Mail id"
                        aria-label="Lastname"
                        aria-describedby="basic-addon1"
                        v-model="currentEmployee.company_email"
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- modal4 -->
          <div
            class="modal fade"
            id="exampleModal123456"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Bio</h5>
                  <button
                    type="button"
                    class="close btn-primary border-0 rounded-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body">
                  <div class="card">
                    <div class="input-group ps-1 mt-3 mb-3">
                      <div>
                        <label for="username">Enter Bio:</label>
                        <input
                          type="text"
                          class="form-control w-100"
                          placeholder="Enter Bio"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          v-model="currentEmployee.bio"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
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
// import Paginate from "vuejs-paginate-next";


export default {
  name: "EmployeeSummary",
  components: { SideNavbar, SideBar, },

  data() {
    return {
      loading: false,
      data: [],
      searchQuery: "",
      employeeSummary: [],
      myData: {},
      currentEmployee: [],
      show: true,
      itemsPerPage:15,
      currentPage: 1,
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * 15;
      const endIndex = startIndex + 15;
      return this.filteredData.slice(startIndex, endIndex);
    },
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
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // handlePageChange(page) {
    //   this.currentPage = page;
    // },
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
.padding + i {
  position: absolute;
  left: 15px;
  top: 7px;
  font-size: 14px;
}
.bg-color1 {
  background: #f5f6ff;
}
.active-icon::before {
  content: "\f28a";
  background: #10e20b;
  color: white;
  border-radius: 12px;
}
.inactive::before {
  content: "\f28a";
  background: #e20b0b;
  color: white;
  border-radius: 12px;
}
.font {
  color: #fafafa;

  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
tr {
  text-align: center;
}
td {
  text-align: center;
  font-size: 12px;

  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
  padding: 5px 20px 5px 40px !important;
}
thead {
  position: sticky;
  top: 88px;
  z-index: 0;
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
  border-radius: 6px;
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
  color: black;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  box-shadow: 0px 2px 4px 1px lightgray;
}
.padding {
  padding: 5px 20px 5px 20px;
  position: relative;
}
.padding::before {
  content: "\61442";
  font-family: "Arial", sans-serif;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
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
input {
  width: 220px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #dddee2;
  background: #fff;
}
select {
  width: 220px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #dddee2;
}
.bi-arrow-right-square-fill::before {
  content: "\f136";
  opacity: 0.3;
}
</style>