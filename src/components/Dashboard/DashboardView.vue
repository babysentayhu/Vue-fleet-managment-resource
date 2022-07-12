<template>
<div>
     <v-breadcrumbs>
    <h2>Dashboard</h2></v-breadcrumbs>
    <v-card
    elevation="17"
    >
        <v-row>
            <v-col cols="4">
                <v-card
                max-width="344"
                outlined
                >
        <v-list-item three-line>
            <v-list-item-content>
            <div class="text-overline mb-4">
                <v-list-item-title class="text-h5 mb-1">
                Total Vehicles
            </v-list-item-title>
            </div>
            <!-- <v-list-item-title class="text-h5 mb-1">
                Total Vehicle
            </v-list-item-title> -->
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
            color="primary"
            size="110"
            > <v-icon dark x-large>
            mdi-car-estate
            </v-icon>
            </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
            <v-btn
            outlined
            rounded
            text
            >
            View
            </v-btn>
        </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card
                max-width="344"
                outlined
                >
        <v-list-item three-line>
            <v-list-item-content>
            <div class="text-overline mb-4">
                <v-list-item-title class="text-h5 mb-1">
                Total Driver
            </v-list-item-title>
            </div>
            <!-- <v-list-item-title class="text-h5 mb-1">
                Total Vehicle
            </v-list-item-title> -->
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
            color="primary"
            size="110"
            > <v-icon dark x-large>
            mdi-account-hard-hat
            </v-icon>
            </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
            <v-btn
            outlined
            rounded
            text
            >
            View
            </v-btn>
        </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card
        max-width="344"
        outlined
        >
        <v-list-item three-line>
            <v-list-item-content>
            <div class="text-overline mb-4">
                <v-list-item-title class="text-h5 mb-1">
                Total Customer
            </v-list-item-title>
            </div>
            <!-- <v-list-item-title class="text-h5 mb-1">
                Total Vehicle
            </v-list-item-title> -->
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
            color="primary"
            size="110"
            > <v-icon dark x-large>
            mdi-account-cash
            </v-icon>
            </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
            <v-btn
            outlined
            rounded
            text
            >
            View
            </v-btn>
        </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
    <br/><br/><br/><br/>
    <v-card
    elevation="10"
    >
        <v-row>
            <v-col cols="6">
                <v-card>
                    <v-card-title>Today Dispatch</v-card-title>
                    <v-card-text>
                        <v-simple-table>
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Calories
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="item in desserts"
                            :key="item.name"
                            >
                            <td>{{ item.name }}</td>
                            <td>{{ item.calories }}</td>
                            </tr>
                        </tbody>
                        </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-card-title>Weakly Income</v-card-title>
                    <v-card-text>
                        <v-simple-table>
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Calories
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="item in desserts"
                            :key="item.name"
                            >
                            <td>{{ item.name }}</td>
                            <td>{{ item.calories }}</td>
                            </tr>
                        </tbody>
                        </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>