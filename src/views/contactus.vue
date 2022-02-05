<template>
    <div>
        <title class="ucatitle">
            Contact Us
        </title>
            <v-divider />
            <v-container cols="12">
                <v-card 
                    elevation="2" 
                    outlined 
                    v-for="(item, i) in items"
                    :key="i"
                    cols="12"
                    >
                    <v-list-item>
                        
                        <v-list-item-content>
                            <div class="text-overline mb-4" v-if="item.description">{{item.description}} </div>
                            <v-list-item-title class="ucaheader1">
                                {{item.name}}
                            </v-list-item-title>
                          
                            <v-card-text class="text">
                                <v-row>
                                <v-col cols="3">
                                    <span style="font-weight:bold"> Phone number: </span>
                                </v-col> 
                                <v-col class="mr-auto"> {{item.phone}} </v-col>                          
                                </v-row>
                            </v-card-text>
                            <v-card-text class="text">
                                <v-row>
                                <v-col cols="3">
                                    <span style="font-weight:bold"> Address: </span>
                                </v-col> 
                                <v-col class="mr-auto"> {{item.line1}} <br /> {{item.line2}}  </v-col>                          
                                </v-row>
                            </v-card-text>
                            <v-card-text class="text" v-if="item.email">
                                <v-row>
                                <v-col cols="3">
                                    <span style="font-weight:bold"> Email: </span>
                                </v-col> 
                                <v-col class="mr-auto"> {{item.email}}</v-col>                          
                                </v-row>
                            </v-card-text>

                        </v-list-item-content>
                        
                    </v-list-item>
                </v-card>
            </v-container>


    </div>
</template>

<script>
export default {
  data() {
    return {
        items:{
        school: {
            name: 'United Christian Academy',
            phone: '615-485-2116',
            line1: '773 McMurry Blvd',
            line2: 'Hartsville TN, 37074'
        },
        principal: {
            name: 'School Principal',
            description: 'Jeremy Counts',
            phone: '615-388-9732',
            line1: '1509 Park Circle',
            line2: 'Lafayette, TN  37083',
            email: 'joseph.counts@jcuconsulting.org'            
        },
        volleyball: {
            name: 'Gallatin Civic Center',
            description: 'Volleyball Gym (Home)',
            line1: '210 Albert Gallatin Rd.',
            line2: 'Gallatin TN, 37066'
                   },
        basketball: {
            name: 'Pleasant Shade Community Center',
            description: 'Basketball Gym (Home)',
            line1: '743 Pleasant Shade Hwy',
            line2: 'leasant Shade, TN   37145'
            
        }
        }
        } 
        
    }
}
</script>