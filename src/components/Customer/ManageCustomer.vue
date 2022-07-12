
<template>
<div>
  <v-card>
    <v-card-title>
      Manage Customer Info
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="detail"
      :search="search"
    >
      <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item.id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item.id)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
      >
        Reset
      </v-btn>
    </template>
    </v-data-table>
  </v-card>
</div>
</template>
<script>
// import DataService from "../components/services/DataService ";
  export default {
    data () {
      return {
        search: '',
        detail: [
            {
                firstName: "Alemu",
                lastName: "Taddse",
                phoneNumber: "0934567812",
                email: "Alex@gmail.com",
                address: "Adama"
            },
            {
                firstName: "Belay",
                lastName: "Mamo",
                phoneNumber: "0934567812",
                email: "BelayMAmo@gmail.com",
                address: "Hawasa"
            },
            {
                firstName: "Abebe",
                lastName: "Kebede",
                phoneNumber: "0934567812",
                email: "Abebe@gmail.com",
                address: "Addis Ababa"
            },
        ],
        headers: [
          {
            text: 'Customer Firstname',
            align: 'start',
            sortable: true,
            value: 'firstName',
          },
          { text: 'Customer Lastname', value: 'lastName' },
          { text: 'Phone Number', value: 'phoneNumber' },
          { text: 'Email', value: 'email' },
          { text: 'Address', value: 'address' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        vehicles: [],
      }
    },
    
  }
</script>