<template>
  <v-card>
      <v-card-title>Income and Expense Report</v-card-title>
      <v-divider></v-divider>
      <v-card-text> 
        <v-tabs
          align-with-title
        >
        <v-tabs-slider color="black"></v-tabs-slider>

        <v-tab>
            <v-icon left>
            mdi-file-document-multiple
            </v-icon>
            General Report
        </v-tab>
        <v-tab>
            <v-icon left>
            mdi-rv-truck
            </v-icon>
            Per Vehicle
        </v-tab>
        <v-tab>
            <v-icon left>
            mdi-account-hard-hat
            </v-icon>
            Per Driver
        </v-tab>
        <v-tab>
            <v-icon left>
            mdi-account-cash
            </v-icon>
            Per Cusotmer
        </v-tab>

        <v-tab-item>
        <v-card flat>
          <v-card-text>
                <general-income-expense-report />
          </v-card-text>
        </v-card>
        </v-tab-item>
        <v-tab-item>
            <v-card flat>
            <v-card-text>
                <per-vehicle-report />
            </v-card-text>
            </v-card>
        </v-tab-item>
        <v-tab-item>
            <v-card flat>
            <v-card-text>
                <per-driver-report />
            </v-card-text>
            </v-card>
        </v-tab-item>
        <v-tab-item>
            <v-card flat>
            <v-card-text>
                <per-customer-report />
            </v-card-text>
            </v-card>
        </v-tab-item>
        </v-tabs>
      </v-card-text>
  </v-card>
</template>
<script>
import PerVehicleReport from "./PerVehicleReport.vue"
import PerDriverReport from "./PerDriverReport.vue"
import PerCustomerReport from "./PerCustomerReport.vue"
import GeneralIncomeExpenseReport from "./GeneralIncomeExpenseReport.vue"
  export default {
    components: {
        PerVehicleReport,
        PerDriverReport,
        PerCustomerReport,
        GeneralIncomeExpenseReport
    },
    data () {
      return {
        
        
      }
    },
  }
</script>