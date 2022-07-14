<template>
  <div>
    <!-- <h1>Add Vehicle</h1> -->
    <v-card
    max-width="2000"
  >
    <v-card-title>Add Dispatch</v-card-title>
    <v-divider></v-divider>
    <v-card-text>  
    <v-form ref="form" lazy-validation>
    <v-container>
      <v-card-subtitle><h3>ጠቅላላ የተሽከርካሪ የአሽከርካሪ አና የጉዞ መረጃ!</h3></v-card-subtitle>
      <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
          <v-select
            :items="names"
            label="የሹፌር ስም"
            :rules="[(v) => !!v || 'የሹፌር ስም ያስፈልጋል']"
            outlined
            
          ></v-select>
          </v-col>
           <v-col
            cols="12"
            sm="6"
            md="3"
          >
          <v-select
            :items="vehcile"
            label="ተሽከርካሪ"
            :rules="[(v) => !!v || 'ተሽከርካሪ ያስፈልጋል']"
            outlined
            
          ></v-select>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="ሰሌዳ ቁጥር"
              placeholder="ሰሌዳ ቁጥር"
            
              :rules="[(v) => !!v || 'ሰሌዳ ቁጥር ያስፈልጋል']"
              outlined
            ></v-text-field>
          </v-col>
          
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="መነሻ ቀን"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="መነሻ ቦታ"
              placeholder="መነሻ ቦታ"
            
              :rules="[(v) => !!v || 'መነሻ ቦታ ያስፈልጋል']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >  
            <v-text-field
              label="መድረሻ ቦታ"
              placeholder="መድረሻ ቦታ"
            
              :rules="[(v) => !!v || 'መድረሻ ቦታ ያስፈልጋል']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="ርቀት (ኪ.ሜ) በጭነት"
              placeholder="ርቀት (ኪ.ሜ) በጭነት"
          
              :rules="[(v) => !!v || 'ርቀት (ኪ.ሜ) በጭነት ያስፈልጋል']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="መድረሻ ቀን"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
          <v-select
            :items="tripStatus"
            label="የጉዞ ሁኔታ"
            :rules="[(v) => !!v || 'የጉዞ ሁኔታ ያስፈልጋል']"
            outlined
            
          ></v-select>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
          <v-select
            :items="['Single Trip','Round Trip']"
            label="የጉዞ አይነት"
            :rules="[(v) => !!v || 'የጉዞ አይነት ያስፈልጋል']"
            outlined
            
          ></v-select>
          </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-card-subtitle><h3>የስራው አይነት ፣ ስራው የተሰራለት እና የክፍያ ሁኔታ!</h3></v-card-subtitle>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-select
            :items="customer"
            label="አስጫኝ ድርጅት"
            :rules="[(v) => !!v || 'አስጫኝ ድርጅት ያስፈልጋል']"
            outlined
            
          ></v-select>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="የጭነት ዓይነት"
            placeholder="የጭነት ዓይነት"
           
            :rules="[(v) => !!v || 'የጭነት ዓይነት ያስፈልጋል']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="ጭነት መጠን"
            placeholder="ጭነት መጠን"
        
            :rules="[(v) => !!v || 'ጭነት መጠን ያስፈልጋል']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >  
          <v-text-field
            label="ታሪፍ"
            placeholder="ታሪፍ"
           
            :rules="[(v) => !!v || 'ታሪፍ ያስፈልጋል']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="ትሪፕ ኮድ "
            placeholder="ትሪፕ ኮድ "
            :rules="[(v) => !!v || 'ትሪፕ ኮድ ያስፈልጋል']"
            
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="ገቢ ብር "
            placeholder="ገቢ ብር "
            disabled
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="ቀብድ ክፍያ"
            placeholder="ቀብድ ክፍያ"
            
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
        <v-select
          :items="paymentStatus"
          label="ተከፍሏል / አለተከፈለም"
          :rules="[(v) => !!v || 'ተከፍሏል / አለተከፈለም']"
          outlined
          
        ></v-select>
        </v-col>
        
      </v-row>
      <v-divider></v-divider>
      <v-card-subtitle><h3>የኦፕሬሽን የወጪ ዝርዝር!</h3></v-card-subtitle>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="ነዳጅ"
            placeholder="ነዳጅ"
           
            :rules="[(v) => !!v || 'ነዳጅ ያስፈልጋል']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="አበል"
            placeholder="አበል"
           
            :rules="[(v) => !!v || 'አበል ያስፈልጋል']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="አጋዥ/ ስጫንና ስራገፍ"
            placeholder="አጋዥ/ ስጫንና ስራገፍ"
        
            :rules="[(v) => !!v || 'አጋዥ/ ስጫንና ስራገፍ ያስፈልጋል']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >  
          <v-text-field
            label="ጎማ ጥገና ከመነዳሪ የተገዛ"
            placeholder="ጎማ ጥገና ከመነዳሪ የተገዛ"
           
            :rules="[(v) => !!v || 'ጎማ ጥገና ከመነዳሪ የተገዛ ያስፈልጋል']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="የመኪና ጥበቃ "
            placeholder="የመኪና ጥበቃ"
            :rules="[(v) => !!v || 'የመኪና ጥበቃ ያስፈልጋል']"
            
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="ደላላ"
            placeholder="ደላላ"
            :rules="[(v) => !!v || 'ደላላ ያስፈልጋል']"
            
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="እጥበት"
            placeholder="እጥበት"
            :rules="[(v) => !!v || 'እጥበት ያስፈልጋል']"
            
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="ሚዛን፤ ኮቴና የተለያዩ"
            placeholder="ሚዛን፤ ኮቴና የተለያዩ"
            :rules="[(v) => !!v || 'ሚዛን፤ ኮቴና የተለያዩ ያስፈልጋል']"
            
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="የሥራ ማስኬጃ ድምር"
            placeholder="የሥራ ማስኬጃ ድምር"
            disabled
            outlined
          ></v-text-field>
        </v-col>
         <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="ጠቅላላ የኦፕሬሽን ወጪ"
            placeholder="ጠቅላላ የኦፕሬሽን ወጪ"
            disabled
            outlined
          ></v-text-field>
        </v-col>       
      </v-row>
      <v-divider></v-divider>
      <v-card-subtitle><h3>ተጨማሪ መረጃ!</h3></v-card-subtitle>
      <v-row>
     
       
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="በቅድምያ ለሹፌር የተላከ"
            placeholder="በቅድምያ ለሹፌር የተላከ"
           
            :rules="[(v) => !!v || 'በቅድምያ ለሹፌር የተላከ ያስፈልጋል']"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="ወር"
            placeholder="ወር"
           
            :rules="[(v) => !!v || 'ወር ያስፈልጋል']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="CPV"
            placeholder="CPV"
        
            :rules="[(v) => !!v || 'CPV ያስፈልጋል']"
            outlined
          ></v-text-field>
          </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >  
          <v-text-field
            label="Document"
            placeholder="Document"
           
            :rules="[(v) => !!v || 'Document ያስፈልጋል']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="ምርመራ"
            placeholder="ምርመራ"
            :rules="[(v) => !!v || 'ምርመራ ያስፈልጋል']"
            
            outlined
          ></v-text-field>
        </v-col>
       
      </v-row>
    <v-btn
      color="primary"
      class="mr-4"
      @click="saveVehicle"
    >
      Add Order
    </v-btn>
    <v-btn >
      clear
    </v-btn>
    
    </v-container>
  </v-form>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

   
  </v-card>
  
  </div>
</template>


<script>
  export default {
    data () {
      return {
      tripStatus: ['Yet to start', 'Running', 'Delivered'],
      names: ['Abebe','Beyene','Zelalem'],
      vehcile: ['ISUZU','Sino Truck','FSR'],
      customer:['Customer 1','Customer 2','Customer 3'],
      paymentStatus:['Paid', 'Not Fully Paid', 'Not Paid'],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      }
    },
  }
</script>