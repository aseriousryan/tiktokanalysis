<script setup lang="ts">
import {productPerformance} from '@/data/dashboard/dashboardData';
</script>
<template>
    <v-card elevation="10" class="">
        <v-card-item class="pa-6">
        <v-card-title class="text-h5 pt-sm-2 pb-7">Recent Transactions</v-card-title>
        <v-table class="month-table">
            <thead>
                <tr>
                    <th class="text-subtitle-1 font-weight-bold">URL</th>
                    <th class="text-subtitle-1 font-weight-bold">View Count</th>
                    <th class="text-subtitle-1 font-weight-bold">Likes Count</th>
                    <th class="text-subtitle-1 font-weight-bold">Comment Count</th>
                    <th class="text-subtitle-1 font-weight-bold text-right">Share Count</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in productPerformance" :key="item.url" class="month-item">
                    <td>
                        <a :href="item.url">
                            <p class="text-15 font-weight-bold">{{ item.url }}</p>
                        </a>
                    </td>
                    <td>
                        <div class="">
                                <h6 class="text-subtitle-1 text-muted">{{ item.likes }}</h6>
                                <!-- <div class="text-13 mt-1 text-muted">{{ item.post }}</div> -->
                        </div>
                    </td>
                    <td>
                        <h6 class="text-body-1 text-muted">{{ item.comment }}</h6>
                    </td>
                    <td>
                        <h6 class="text-body-1 text-muted">{{ item.bookmark }}</h6>
                        <!-- <v-chip  :class="'text-body-1 bg-' + item.statuscolor " color="white"  size="small" >{{
                            item.status
                        }}</v-chip> -->
                    </td>
                    <td>
                        <h6 class="text-body-1 text-muted">{{ item.share }}</h6>
                    </td>
                </tr>
            </tbody>
        </v-table>
        </v-card-item>
    </v-card>
</template>
