<template>
    <div><v-btn @click="printVehicle">
        <v-icon small
        class="mr-2">
        mdi-printer</v-icon>Print
        </v-btn>
        <v-simple-table id="printVehicle">
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
            <td>{{ item.palteNo }}</td>
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
                    name: 'ISUZU',
                    palteNo:'AA-A23456',
                    totalTrip: '23',
                    totalIncome:'67893 ETB',
                    totalExpense:'45678 ETB',
                },
                {
                    name: 'SINO',
                    palteNo:'AA-A20006',
                    totalTrip: '40',
                    totalIncome:'234567 ETB',
                    totalExpense:'34657 ETB',
                },
                {
                    name: 'FSR',
                    palteNo:'OR-A13056',
                    totalTrip: '13',
                    totalIncome:'3456 ETB',
                    totalExpense:'1238 ETB',
                },
            ],
        }
    },
     methods:{ 
        async printVehicle () {
        // Pass the element id here
        await this.$htmlToPaper('printVehicle');
        }
    }
}
</script>