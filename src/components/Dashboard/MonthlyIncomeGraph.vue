<template>
<v-row>
    <v-col cols="6">
        <v-card>
            <v-card-text>
                <Bar
                    :chart-options="chartOptions"
                    :chart-data="chartData"
                    :chart-id="chartId"
                    :dataset-id-key="datasetIdKey"
                    :plugins="plugins"
                    :css-classes="cssClasses"
                    :styles="styles"
                    :width="width"
                    :height="height"
                />
            </v-card-text>
            <v-divider></v-divider>

             <v-card-actions class="justify-center">
            <div class="text-h6 font-weight-bold">
                Income in the Last Month
            </div>
            </v-card-actions>
        </v-card>
       
    </v-col>
    <v-col cols="6">
    <v-card
    class="mx-auto text-center"
    color="blue lighten-4"
    dark
    max-width="1000"
    >
    <v-card-text>
      <WeeklyIncomePieChartVue />
    </v-card-text>
    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <div class="text-h6 font-weight-bold" color="#00838F">
        Income in the Last Week
      </div>
    </v-card-actions>
    </v-card>
    </v-col>
</v-row>
 
</template>
<script>
import { Bar } from 'vue-chartjs/legacy'
import WeeklyIncomePieChartVue from './WeeklyIncomePieChart.vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    components: {
        Bar,
        WeeklyIncomePieChartVue
    },
    props: {
        chartId: {
        type: String,
        default: 'bar-chart'
        },
        datasetIdKey: {
        type: String,
        default: 'label'
        },
        width: {
        type: Number,
        default: 400
        },
        height: {
        type: Number,
        default: 400
        },
        cssClasses: {
        default: '',
        type: String
        },
        styles: {
        type: Object,
        default: () => {}
        },
        plugins: {
        type: Array,
        default: () => []
        }
    },
    data(){
        return {
           
            chartData: {
                labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
                ],
                datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#1976d2',
                    data: [4000, 2000, 1200, 3900, 1000, 4000, 3900, 8000, 4000, 2000, 1200, 1100]
                }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
            }
        }
    }
    
</script>