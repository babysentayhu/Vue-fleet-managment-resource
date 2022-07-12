
<template>
<div>
  <v-card>
    <v-card-title>
      Manage Fule
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
  export default {
    data () {
      return {
        search: '',
        detail: [
            {
                vehicleName: "Sino",
                fuleType: "Gasoline",
                fuleQuantity: "50",
                odometerReading: "12",
                fulePrice: "50",
                totalPrice: "700"
            },
            {
                vehicleName: "ISUZU",
                fuleType: "Gasoline",
                fuleQuantity: "50",
                odometerReading: "12",
                fulePrice: "50",
                totalPrice: "700"
            },
             {
                vehicleName: "FSR",
                fuleType: "Gasoline",
                fuleQuantity: "50",
                odometerReading: "12",
                fulePrice: "50",
                totalPrice: "700"
            },
        ],
        headers: [
          {
            text: 'Vehcile',
            align: 'start',
            sortable: true,
            value: 'vehicleName',
          },
          { text: 'Fule Type', value: 'fuleType' },
          { text: 'Fule Quantity (Lit)', value: 'fuleQuantity' },
          { text: 'Odo Meter Reading', value: 'odometerReading' },
          { text: 'Fule Price /(Lit)', value: 'fulePrice' },
          { text: 'Total Price', value: 'totalPrice' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        vehicles: [],
      }
    },
    
  }
</script>