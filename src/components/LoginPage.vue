<template>
  <div class="container-fluid bg-color">
    <div class=" ">
      <img
        src="https://t4.ftcdn.net/jpg/02/75/14/61/240_F_275146146_7tREhrk6IIJv1tEmdEpro9vyLHeiOcEM.jpg"
        class="w-75 ms-2 img-1"
      />
    </div>
    <div>
      <form class="form-inf">
        <div class="form-outline w-100">
          <h4 class="text-white">
            <router-link class="text-decoration1 text-black" to="/firstpage"
              >Welcome to HR Project</router-link
            >
          </h4>
          <p class="text-white">Signin using your valid credentilas</p>

          <div class="form-group">
            <label class="text-white" for="exampleInputEmail1"
              >Email address:</label
            >
            <input
              type="email"
              class="form-control w-100"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="formData.userEmail"
              v-on:input="newfunction"
              :class="{ 'is-invalid': errors.userEmail }"
            />
            <div class="error text-danger" v-if="errors.userEmail">
              {{ errors.userEmail }}
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="text-white" for="exampleInputPassword1"
            >Password:</label
          >
          <input
            type="password"
            class="form-control w-100"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="formData.userPassword"
            v-on:input="oldfuction"
            :class="{ 'is-invalid ': errors.userPassword }"
          />
          <div class="error text-danger" v-if="errors.userPassword">
            {{ errors.userPassword }}
          </div>
        </div>

        <button
          @click="Viewfirstpage(loginpage)"
          type="submit"
          :disabled="!formData.userEmail || !formData.userPassword"
          class="btn btn-danger w-100 mt-4"
        >
          <!-- <router-link class="link" to="/firstpage"
                >SignIn</router-link -->
          SignIn
        </button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.bg-color {
  background-image: url("https://t3.ftcdn.net/jpg/06/25/07/86/240_F_625078650_O3LHxY82SS3UeLfBKXl71tlslWZNu5Zt.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: particles 10s infinite linear;
  opacity: 1;
  background-size: cover;
}
.form-inf {
  border: 1px solid white;
  padding: 20px 40px 20px 40px;
  border-radius: 10px;
  box-shadow: 2px 1px 2px 2px lightgrey;
}
.link {
  text-decoration-line: none;
  color: white;
}
.text-decoration1 {
  text-decoration-line: none !important;
  color: white !important;
}
input {
  width: 80vh;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

@media (min-width: 468px) and (max-width: 700px) {
  form {
    width: 100%;
  }
  .bg-color {
    height: 200vh;
  }
  .img-1 {
    width: 20%;
  }
}
.form-inf,
.bg-color {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
input:focus {
  border-color: #ff5733;
  transition: border-color 0.5s ease-in-out;
}
.btn:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
.error {
  opacity: 0;
  animation: slideIn 0.5s ease-in-out forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes particles {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      formData: {
        userEmail: null,
        userPassword: null,
      },
      errors: {
        userEmail: "",
        userPassword: "",
      },

      items: [],
    };
  },
  computed: {
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
  },
  methods: {
    newfunction() {
      if (!this.formData.userEmail) {
        this.errors.userEmail = "Email is required";
      } else if (!this.formData.userEmail.includes("@gmail.com")) {
        this.errors.userEmail = "email format is not correct";
      } else {
        delete this.errors.userEmail;
      }
    },
    oldfuction() {
      if (!this.formData.userPassword) {
        this.errors.userPassword = "Password is required";
      } else if (this.formData.userPassword.length < 8) {
        this.errors.userPassword = "Password must be at least 8 characters";
      } else {
        delete this.errors.userPassword;
      }
    },
    Viewfirstpage(id) {
      this.$router.push({
        path: "/shiftpage",
        query: {
          id: id,
          name: "",
        },
      });
    },
    submitForm() {
      // Check for errors before submitting
      if (this.hasErrors) {
        alert("Please fix the form errors.");
        return;
      }
      // Form data is valid, submit it
      alert("Form submitted successfully!");

      let user = {
        email: this.formData.userEmail,
        Password: this.formData.userPassword,
      };
      this.items = [user];
    },

    // this.details=[user]
  },
};
</script>  