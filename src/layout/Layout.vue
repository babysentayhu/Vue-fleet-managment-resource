<template>
   <div>
    <v-list-item >
        <v-list-item-content color="primary" >
          <v-list-item-title class="text-h6">
            Fleet Managment
          </v-list-item-title>
          <v-list-item-subtitle>
             Fleet Managment Admin Panel
          </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>

    <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in dash"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>

    <v-list  
        dense
        nav
      >
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :to="child.to"
            link
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
    </v-list>

    <v-list
        dense
        nav
      >
      <v-list-item
          v-for="item in password"
          :key="item.title"
          :to="item.to"
          v-model="item.active"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
   </div>
</template>
<script>
export default {
    props: ['items','dash','password'],
    data(){
        return {
            val: this.items 
        }
        
    }
    
}
</script>