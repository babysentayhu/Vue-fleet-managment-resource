<template>
  <div>
    <v-card
    max-width="2000"
  >
    <v-card-title>Change Password</v-card-title>
    <v-divider></v-divider>
    <v-card-text>

  <v-form ref="form" lazy-validation>
    <v-container>
      <v-row align="center" justify="center" >
        <v-col
          cols="12"
         
        >
          <v-text-field
            label="New Password"
            placeholder="Enter New Password"
            :rules="[(v) => !!v || 'Password is required']"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
         
        >
          <v-text-field
            label="Comfirm Password"
            placeholder="Confirm Password"
            :rules="[(v) => !!v || 'Confirm Password is required']"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    <v-btn
      color="primary"
      class="mr-4"
      @click="saveVehicle"
    >
      Change Password
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

