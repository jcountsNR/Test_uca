<template>
<div>
    <title class="ucatitle">
        Job Listings
    </title>
    <div v-for="job in jobs" :key="job.name">
    <v-card
        elevation="2" 
        outlined
        cols="12"
        class="mb-2"
        v-if="!job.taken"
        v-bind:value="job">
        <v-row>
            <v-col cols="10">
                <v-card-title class="ucaheader1">{{job.name}}</v-card-title>
            </v-col>
            <v-col cols="2">
                <v-btn class="button mt-4 mr-6" elevation="8" color="green darken-3" @click="updateSelected(job)">sign up</v-btn>
            </v-col>
        </v-row> 
        <v-container>
                <v-card-text class="paragraph center">
                    {{job.description}}
                </v-card-text>
                <v-card-subtitle v-if="job.time">
                  <span class="date"> When: </span> <span class="dates"> {{job.time}} </span>
                </v-card-subtitle>
        </v-container>
    </v-card> 
    </div>
     
</div>
    
</template>

<script>
//const selected = null;  
export default {
    emits:['selected'],
    data: () => ({
      jobs: [
        {
        name: 'Study Hall Supervisor',
        description: 'The job of a study hall supervisor is to watch a group of kids during one class period (usually around an hour to an hour and twenty minutes long) and keep the kids focused on studying. The first study hall will pay out 25% off of tuition, while each additional study hall will carry with it an additional payout. The study hall jobs will be listed in four groupings Tuesday and Thursday "AM" listings mean before lunch, and Tuesday and Thursday "PM" listings mean after lunch.',
        taken: false,
        time: 'Tue. , Thu. - AM or PM'
      },{
        name: 'Sports Coach/assistant',
        description: 'There are often between one and three teams available each year for all three particular sports. If you think that you or your spouse would make a good coach or assistant coach for a sport, you can list that as a possible cooperative job. Head coaches will usually get a stipend for the season and all coaches get the cooperative rates and sports fee discounts for their kids playing.',
        taken: false,
        time: 'Sporting events and practices'
      },{
        name: 'Gate-keeping Coordinator',
        description: 'The board felt that the jobs listed last year under this heading should be consolidated. Therefore we will only have one sports gate-keeping coordinator for all three sports. This person makes a schedule for and manages the gatekeepers for the three UCA sports. Basically the coordinator makes sure that someone is scheduled for every sports home game and communicates with the gatekeepers to make sure they remember when it is their turn to keep the gate. They do not need to attend the home games, just schedule gatekeepers for all the home games.',
        taken: false,
        time: 'Sporting events'
      },{
        name: 'Sports Email Coordinator ',
        description: 'The board felt that the jobs listed last year under this heading should be consolidated. Therefore we will only have one sports email coordinator for all three sports. This person keeps a calendar of our home games and communicates with schools and athletic directors about upcoming games to make sure that everyone agrees on the time and location of each game. The confirmations should be done and an email sent out within a few days of any upcoming home game. ',
        taken: false,
      },{
        name: 'Soccer Field Engineer',
        description: 'This person is responsible for setting up the soccer field for the season, and then once it is set up, they are responsible for painting the lines and having it ready for each soccer home game. There are usually about 6 to 8 home games a year. ',
        taken: false,
        time: 'Before soccer games'
      },{
        name: 'Clean-up Crew',
        description: 'Tuesday or Thursday - this person is responsible for helping clean up after each school day. The church asks us to put up tables, sweep floors, and generally leave the church the way we found it. Often the people who help out are students and that is fine if students do the work to help reduce their tuition.',
        taken: false,
        time: 'Tuesday or Thursday'
      },{
        name: 'Clean-up Manager',
        description: 'This person manages the clean up crew and must be an adult as opposed to a student. This person would show up at the end of a work day and make sure that all of the clean up jobs got done by the clean up crew and make adjustments, if necessary, to make sure all jobs are getting done to satisfaction. This person can also make sure the doors are locked. ',
        taken: false,
        time: 'Tuesday & Thursday'
      },{
        name: 'Hospitality Director ',
        description: 'The person doing this job sets up for and cleans up after the three main open house type events hosted by UCA each year. We do a last day of school before Christmas break event, a Convention Performance Night event, and a last day of school  before summer event each year. ',
        taken: false,
        time: 'Open House Events'
      },{
        name: 'Thursday Hall Monitor',
        description: 'The person doing this job watches a one hour class period on Thursdays and makes sure that the doors are locked and that no suspicious person enters the building during school hours on Thursday while our elementary children are there. You will be able to request for your slotted gap to be either between 8 and 10 am on Thursdays or between 10 am and 12 pm on Thursdays.',
        taken: false,
        time: 'Thursdays'
      },{
        name: 'Drama Coach',
        description: 'The drama department will ask parent coaches to help students prepare for one act plays and other dramatic events. If you are interested in being a parent helping out in this department, you can sign up for this job.',
        taken: false,
        time: 'Thursdays'
      },{
        name: 'Elementary Teaching Ast.',
        description: 'Some of our elementary classes and choirs work best with helpers in the class to help the teacher. If you are willing to help out in one of our elementary classes, this would be a good cooperative job.',
        taken: false,
        time: 'Thursdays'
      },{
        name: 'Elementary PE Teaching Ast.',
        description: 'If you are willing to help out with one of our PE classes for elementary, please sign up for this option. ',
        taken: false,
        time: 'Thursdays'
      },{
        name: 'Clothier',
        description: 'This person oversees the selecting and ordering of apparel for the whole school in the fall and spring, and for both of our choirs leading up to their conventions.',
        taken: false,
      },{
        name: 'Middle - High Teacher',
        description: 'Middle-High English, Math, Science, Social Studies, Spanish, and Electives Depts - If you have any interest in teaching a particular subject matter, you may make us aware by selecting this option.',
        taken: false,
        time: 'Tuesdays or Thursdays'
      },{
        name: 'Thursday Substitute Teacher',
        description: 'This person makes themselves available on each Thursdays to be ready to cover any particular teacher or teachers who may have to call out sick on a Thursday. They are paid a small stipend each time they are called into action.',
        taken: false,
        time: 'Thursdays on-call'
      },{
        name: 'Thursday Lunch Monitor',
        description: 'This person oversees one of the lunch periods on Thursday to make sure our kids are monitored well during this period.',
        taken: false,
        time: 'Thursdays - lunch time'
      },    
      ],
      selectedJob: {},
    })
  ,
    methods: {
        updatedSelected (selectedItem) {
            this.selectedJob = selectedItem;
            console.log('selected Job: '+selectedItem)
        }
    },
  }
</script>

<style lang="scss" scoped>
    .ucaheader1 {
        float: left !important;
        margin-left: 1.7em;
        font-weight: bold;
    }
    .date {
        font-weight: bold;
        font-size: 1.8em;
        font-family: 'Courier New', Courier, monospace;
    }
    .dates {
        font-size: 1.4em;
    }

</style>