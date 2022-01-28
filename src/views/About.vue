<template>
  <div class="about">
    <v-container>
      <title class="title">
        Welcome to UCA Website!
      </title>
      <v-card-text>
        {{statement}}
      </v-card-text>
    </v-container>
    <v-divider />
    <v-container>
      <title class="title">
        About Us
      </title>
      <v-card-text>
        {{about}}
      </v-card-text>
    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
    statement: 'If you are not yet familiar with us, our UCA homeschool tutorial is conveniently located in Hartsville, Tennessee, at the First Baptist Church.  For more than ten years we have served the local homeschooling community (with students from Macon, Trousdale, Smith, Wilson, and Sumner counties) by offering academic and elective enrichment for grades K-12.  UCA students compete and participate regularly in academics, sports, art, drama, as well as music.  Thanks for visiting our site!',
    about: "The first thing to understand about UCA is that we are a homeschool cooperative tutorial and NOT a homeschool umbrella.  Every student that attends UCA is a homeschool student and is thus required by law to register with the state as such.  This is usually done by either registering with your local public school board or by using a private umbrella school.  Two of the closest umbrella schools in our area that you could use to register your child are Aaron Academy, located in Hendersonville, or Daniel One Academy, located in Cookeville.  These umbrella schools keep the academic records of your child's progress towards graduation and also serve as a location by which colleges or other institutions can obtain your child's school transcripts. UCA, as mandated by our UCA school board, desires to maintain a conservative, Christian-based atmosphere to assist our families in enriching their homeschool experience.  To achieve this goal, we cannot serve students and families who are not self-motivated to do their school work, who need some kind of school-provided discipline as an incentive to behave on campus, or who are unable to willingly comply with our school standards of hair, dress, and conduct. All parents who enroll thier child(ren) in classes at UCA must do so with the knowledge that it is the sole responsibility of parents to oversee their child(ren)'s completion of homework assignments and that their children are learning the material covered. The student will be involved only one day per week in any specific class offered at UCA; therefore, a parent must be fully engaged during the other four days to ensure that the learning process is successful. These parental responsibilities are not transferred to UCA when a student takes a class on campus.  Parents are also responsible for assigning the final grade for the class. If you are interested in having your student(s) attend UCA, you can contact us at 615-485-2116, or we will contact you if you complete the online registration offered on this site.  A family is not accepted into UCA until after completing a process that includes a new family interview and school board approval. May the Lord bless your school year and your endeavors to home school your child!"
  }
}
}
</script>