<template>
  <div>
    <v-card
    max-width="2000"
  >
    <v-card-title>Add USer</v-card-title>
<v-divider></v-divider>
    <v-card-text>

  <v-form ref="form" lazy-validation>
    <v-container>
      <v-row>
        <v-col
          cols="4"
         
        >
          <v-text-field
            label="Name"
            placeholder="Enter Name"
            :rules="[(v) => !!v || 'Name is required']"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="4"
         
        >
          <v-text-field
            label="Email"
            placeholder="Enter Email"
            :rules="[(v) => !!v || 'Email is required']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
         
        >
          <v-text-field
            label="User Name"
            placeholder="Enter User Name"
            :rules="[(v) => !!v || 'User Name is required']"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="4"
         
        >
          <v-text-field
            label="Password"
            placeholder="Enter Password"
            :rules="[(v) => !!v || 'Password is required']"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    <v-btn
      color="primary"
      class="mr-4"
      @click="saveVehicle"
    >
      Add User
    </v-btn>
    <v-btn >
      Clear
    </v-btn>
    
    </v-container>
  </v-form>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

   
  </v-card>
  
  </div>
</template>

