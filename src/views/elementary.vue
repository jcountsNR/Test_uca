<template>
    <div>
        <div class="ucatitle">Elementary Enrichment</div>
        <v-card-text class="paragraph center mb-6" cols="6">Our K-7 UCA Elementary Enrichment Program will offer four phases:</v-card-text>
        <v-container>
            <v-card v-for="phase in phases" :key="phase.title" class="ma-4" cols="7">
                <v-card-title class="ucaheader1">{{phase.title}}</v-card-title>
                <v-divider class="mx-4 mb-1" />
                <v-card-text class="paragraph">{{phase.text}}</v-card-text>
            </v-card>    
        </v-container>
        <v-divider class="mx-2" />
        <v-container>
            <div class="ucaheader">About Elementary Enrichment</div>
            <v-card-text class="paragraph">
                The school day lasts about 4 hours for elementary students, including lunch.  Parents can stay to help out if and when they desire, but there is no obligation to stay onsite during the school day. Here are the expectations for 2021-2022:<br />
<br />
A)  The Elementary Enrichment Program will run on Thursdays.
<br />
<br />
B)  At the cooperative rate, the program will cost approximately $81 per month for the first student, plus a registration fee.  The second elementary student will cost roughly $66, and so on.  If you have students attending middle or high school, we will count them as participating students when figuring your elementary charges. See the tuition section for additional details.  5th - 7th grade students who are taking academic classes would be charged approximately $24 monthly for each academic class in addition to their cost for the enrichment program.
<br />
<br />
C)  The program will begin towards the end of August and run through the third Thursday in May.
<br />
<br />
Class space will be limited. To register, hit the registration button in the menu bar at the top of this web page, then fill out the information on the registration page.  Please note that if this is your first time registering with UCA, we will need to schedule an interview with your family that can be conducted after you register.  We will get in touch with you using the contact information that you put on the registration form.  
<br />
<br />
Please feel free to <a href="/contactus">contact us</a> if you need more information on this process.
            </v-card-text>
        </v-container>
    </div>
</template>

<script>
export default {
data() {
    return {
        phases: {
           academic: {
               title: "Academic Enrichment",
               text: "This section will last approximately 1 hour and will focus on a variety of academic enrichment subjects designed to enhance your child’s education regardless of what curriculum you use at home.  We hope to split the academic classes into four grade levels this year: one class for K - 1st grade, one class for 2nd - 3rd grade, and one class for 4th - 5th grade, and one class for 6th - 7th grade. Also, for 6th and 7th  graders, you can sign up for an optional science academic class. 7th graders can also sign up for the World Studies class which will use curriculum from Bob Jones University Press, middle school level. The history class will have homework assignments and will, in effect, become the curriculum that you use at home for Social Studies."
           },
           elective: {
               title: 'Elective Enrichment',
               text: 'This section of the program will last approximately 1 hour and will focus on various enrichment opportunities including such things as art, instrumentation, and creative writing.'
           },
           music: {
               title: 'Music',
               text: 'This section should last between 30 and 45 minutes per week.  It is intended to give general instruction in music, as well as prepare kids for various singing events throughout the year, most notably at Christmas and the last day of school program.  We plan to have an older elementary and a younger elementary choir this coming year.'
           },
           pe: {
               title: 'Physical Education',
               text: 'This section of the program is designed to enhance your child’s physical education and will include a variety of games and sports, played both indoors and outdoors.  This section of the program will last about 45 minutes.'
           }
    }
}
}
}
</script>
