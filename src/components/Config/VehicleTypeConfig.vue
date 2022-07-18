<template>
    <div>
        <v-card 
        >
            <v-card-title>
                Vehicle Type Config Panel
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
                <span class="text-h5">Vehicle Type Config</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                <v-container>
                    <v-row>
                    <v-col cols="12">
                        <v-text-field
                        label="Vehicle Type"
                        v-model="value.vehicleType"
                        outlined
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Addtional Description"
                        v-model="value.description"
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
                        Vehicle Type
                    </th>
                    <th class="text-left">
                        Description
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in vehicleTypeConfig"
                    :key="item.vehicleType"
                    >
                    <td>{{ item.vehicleType }}</td>
                    <td>{{ item.description }}</td>
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
                vehicleType: '',
                description:''    
            },
        vehicleTypeConfig: [
          {
            vehicleType: 'SINO',
            description:'New 2022 Model'
          },
          {
            vehicleType: 'ISUZU',
            description:'ISUZU VAN'
          },
          {
            vehicleType: 'FSR',
            description:'New Model of FSR'
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
            this.vehicleTypeConfig.push(this.value)
            console.log(this.vehicleTypeConfig)
            this.dialog = false
            
        }
    }
  }
</script>