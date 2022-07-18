<template>
    <div>
        <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">
                Customer
            </th>
            <th class="text-left">
                Mobile No
            </th>
            <th class="text-left">
                Number of Trips
            </th>
            <th class="text-left">
                Paid Income
            </th>
            <th class="text-left">
                Un Paid 
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
                    name: 'Teshome',
                    mobileNo:'0900452367',
                    totalTrip: '23',
                    totalIncome:'67893 ETB',
                    totalExpense:'45678 ETB',
                },
                {
                    name: 'Kisadael',
                    mobileNo:'0923124567',
                    totalTrip: '40',
                    totalIncome:'234567 ETB',
                    totalExpense:'34657 ETB',
                },
                {
                    name: 'AAWSA',
                    mobileNo:'0978123456',
                    totalTrip: '13',
                    totalIncome:'3456 ETB',
                    totalExpense:'1238 ETB',
                },
            ],
        }
    }
}
</script>