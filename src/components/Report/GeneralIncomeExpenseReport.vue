<template>
    <div>
        <v-btn @click="print">
        <v-icon small
        class="mr-2">
        mdi-printer</v-icon>Print
        </v-btn>
            <v-simple-table id="printMe">
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Vehicle
                </th>
                <th class="text-left">
                    Plate Number
                </th>
                <th class="text-left">
                    Driver
                </th>
                <th class="text-left">
                Mobile Number
                </th>
                <th class="text-left">
                    Trip StartUp Location
                </th>
                <th class="text-left">
                    Trip DropOff Location
                </th>
                <th class="text-left">
                    Total Income
                </th>
                <th class="text-left">
                    Total Expense
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in generalReport"
                :key="item.vehicleName"
                >
                <td>{{ item.vehicleName }}</td>
                <td>{{ item.palteNo }}</td>
                <td>{{ item.driver }}</td>
                <td>{{ item.mobileNo }}</td>
                <td>{{ item.tripStartupLocation }}</td>
                <td>{{ item.tripDropoffLocation }}</td>
                <td>{{ item.totalIncome }}</td>
                <td>{{ item.totalExpense }}</td>
                </tr>
            </tbody>
            </template>
            </v-simple-table>  
    </div>
</template>
<script>

export default {
    data() {
        return {
            generalReport: [
                {
                    vehicleName: 'ISUZU',
                    palteNo:'AA-A23456',
                    driver: 'Solomon',
                    mobileNo:'0900677890',
                    tripStartupLocation: 'Metema',
                    tripDropoffLocation: 'Mekelle',
                    totalIncome:'67893 ETB',
                    totalExpense:'45678 ETB',
                },
                {
                    vehicleName: 'SINO',
                    palteNo:'AA-A20006',
                    driver: 'Abebe',
                    mobileNo:'0911507890',
                    tripStartupLocation: 'Jimma',
                    tripDropoffLocation: 'Adama',
                    totalIncome:'234567 ETB',
                    totalExpense:'34657 ETB',
                },
                {
                    vehicleName: 'FSR',
                    palteNo:'OR-A13056',
                    driver: 'Ayele',
                    mobileNo:'0912567890',
                    tripStartupLocation: 'Addis Ababa',
                    tripDropoffLocation: 'Gondor',
                    totalIncome:'3456 ETB',
                    totalExpense:'1238 ETB',
                },
            ],
        }
    },
    methods:{ 
        async print () {
        // Pass the element id here
        await this.$htmlToPaper('printMe');
        }
    }
}
</script>