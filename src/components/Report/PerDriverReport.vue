<template>
    <div>
        <v-btn @click="printDriver">
        <v-icon small
        class="mr-2">
        mdi-printer</v-icon>Print
        </v-btn>
        <v-simple-table id="printDriver">
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">
                Driver
            </th>
            <th class="text-left">
                Mobile Number
            </th>
            <th class="text-left">
                Number of Trips
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
            v-for="item in perVehicleReport"
            :key="item.name"
            >
            <td>{{ item.name }}</td>
            <td>{{ item.mobileNo }}</td>
            <td>{{ item.totalTrip }}</td>
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
            perVehicleReport: [
                {
                    name: 'Abebe',
                    mobileNo:'0912345678',
                    totalTrip: '23',
                    totalIncome:'67893 ETB',
                    totalExpense:'45678 ETB',
                },
                {
                    name: 'Ayele',
                    mobileNo:'0934561200',
                    totalTrip: '40',
                    totalIncome:'234567 ETB',
                    totalExpense:'34657 ETB',
                },
                {
                    name: 'Solomon',
                    mobileNo:'0967892311',
                    totalTrip: '13',
                    totalIncome:'3456 ETB',
                    totalExpense:'1238 ETB',
                },
            ],
        }
    },
     methods:{ 
        async printDriver () {
        // Pass the element id here
        await this.$htmlToPaper('printDriver');
        }
    }
}
</script>