<template>
    <div>
        <v-card>
                <v-card-title>
                <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        label="Legal first name*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        label="Legal middle name"
                        hint="example of helper text only on focus"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        label="Legal last name*"
                        hint="example of persistent helper text"
                        persistent-hint
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Email*"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Password*"
                        type="password"
                        required
                        ></v-text-field>
                    </v-col>
                    
                    
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="close()"
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
        }
    },
    methods:{
        close(){
             this.$emit('close-modal',"dialog = false")
        }
    }
}
</script>