<template>
    <div>
        <v-card 
        >
            <v-card-title>
                Fule In Litter Config Panel
              <v-spacer></v-spacer>
            <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                >
                Add
                </v-btn>
            </template>
            <!-- <FuelAddFormVue  v-on:close-modal="closeModal" /> -->
            <v-card>
                <v-card-title>
                <span class="text-h5">Add Fuel in Litter Config</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                <v-container>
                    <v-row>
                    <v-col cols="12">
                        <v-text-field
                        label="Fuel Type"
                        v-model="value.fuelType"
                        outlined
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Price in Litter"
                        v-model="value.price"
                        type="number"
                        outlined
                        required
                        ></v-text-field>
                    </v-col>
                  <input type="hidden" v-model="value.date">
                    </v-row>
                </v-container>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                    Close
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="save()"
                >
                    Save
                </v-btn>
                </v-card-actions>
        </v-card>
            </v-dialog>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Fuel Type
                    </th>
                    <th class="text-left">
                        Price in Litter
                    </th>
                    <th class="text-left">
                        Date
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in driverLicneseExpDate"
                    :key="item.name"
                    >
                    <td>{{ item.fuelType }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.date }}</td>
                    </tr>
                </tbody>
                </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import FuelAddFormVue from './FuelAddForm.vue'
export default {
    components:{
        FuelAddFormVue
    },
    data () {
      return {
        dialog: false,
        value: {
                fuelType: '',
                price:'',
                date: '8/12/2014'    
            },
        driverLicneseExpDate: [
          {
            fuelType: 'Gasonline',
            price:'34',
            date: '2/7/2022',
          },
          {
            fuelType: 'Diesel',
            price:'49',
            date: '12/10/2022',
          },
          {
            fuelType: 'Ethanol',
            price:'52',
            date: '11/12/2022',
          },
        ],
      }
    },
    methods:{
        closeModal(command){
            console.log("yesss")
        },
        save(){
            console.log(this.value)
            this.driverLicneseExpDate.push(this.value)
            console.log(this.driverLicneseExpDate)
            this.dialog = false
            
        }
    }
  }
</script>