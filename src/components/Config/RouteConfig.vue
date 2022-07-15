<template>
    <div>
        <v-card 
        >
            <v-card-title>
                Route with Kilometter Config Panel
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
            <v-card>
                <v-card-title>
                <span class="text-h5">Route with Kilometter Config</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                <v-container>
                    <v-row>
                    <v-col cols="12">
                        <v-text-field
                        label="Starting Point"
                        v-model="value.startPoint"
                        outlined
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="End Point"
                        v-model="value.endPoint"
                        outlined
                        required
                        ></v-text-field>
                    </v-col>
                  <v-col cols="12">
                        <v-text-field
                        label="Total Killo Metter"
                        v-model="value.killoMetter"
                        outlined
                        required
                        ></v-text-field>
                    </v-col>
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
                        From
                    </th>
                    <th class="text-left">
                        To
                    </th>
                    <th class="text-left">
                        Kilo-Metter (km)
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in driverLicneseExpDate"
                    :key="item.name"
                    >
                    <td>{{ item.startPoint }}</td>
                    <td>{{ item.endPoint }}</td>
                    <td>{{ item.killoMetter }}</td>
                    </tr>
                </tbody>
                </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data () {
      return {
        dialog: false,
        value: {
                startPoint: '',
                endPoint:'',
                killoMetter: ''    
            },
        driverLicneseExpDate: [
          {
            startPoint: 'Addis Ababa',
            endPoint:'Adama',
            killoMetter: '60 Km',
          },
          {
            startPoint: 'Addis Ababa',
            endPoint:'Hawasa',
            killoMetter: '270 Km',
          },
          {
            startPoint: 'Addis Ababa',
            endPoint:'Mekelle',
            killoMetter: '780 Km',
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