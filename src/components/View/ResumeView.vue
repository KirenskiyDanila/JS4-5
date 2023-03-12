<template>
  <div class="container col-5 border-3 border border-success rounded-4 ">
    <div class="m-2 font-monospace font-weight-bold fs-1">Ваше резюме:</div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="data.profession.resumeValue"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="data.city.resumeValue"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="data.name.resumeValue"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="data.phone.resumeValue"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="data.email.resumeValue"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="data.birthdate.resumeValue"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="data.status.resumeValue"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="data.education.resumeValue"></div>
    <div class="input-group p-3 border border-2 m-2 border-success rounded-5 text-wrap" v-if="data.education.showEducation">
      <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="data.education.university.resumeValue"></div>
      <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="data.education.faculty.resumeValue"></div>
      <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="data.education.specialization.resumeValue"></div>
      <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="data.education.graduationYear.resumeValue"></div>
    </div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-if="data.education.secondEducationEnabled" v-text="data.secondEducation.resumeValue"></div>
    <div class="input-group p-3 border border-2 m-2 border-success rounded-5 text-wrap" v-if="data.education.secondEducationEnabled">
      <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="data.secondEducation.university.resumeValue"></div>
      <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="data.secondEducation.faculty.resumeValue"></div>
      <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="data.secondEducation.specialization.resumeValue"></div>
      <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="data.secondEducation.graduationYear.resumeValue"></div>
    </div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="data.salary.resumeValue"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap text-break" v-text="data.skills.resumeValue"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap text-break" v-text="data.about.resumeValue"></div>

    <img v-bind:src="data.photo.resumeValue" id="resumePhoto" alt="Нет фото" class="img-thumbnail">
  </div>

</template>

<script>
export default {
  name: 'ResumeView',
  props: ['data']
}
</script>
