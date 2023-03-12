<template>
  <div class="input-group mb-3 mt-3">
    <field-select v-model:options="options" v-model:value="educationMutation.value" v-model:resume-value="educationMutation.resumeValue" @change="onEducationChange()"/>
    <div class="input-group p-3 border border-2 m-2 border-success rounded-5" v-if="education.showEducation">
      <field-university-input
          v-model:title="educationMutation.university.title" v-model:value="educationMutation.university.value"
          v-model:resume-value="educationMutation.university.resumeValue" v-model:city-id="educationMutation.university.cityId" @change="onChange()"/>
      <field-input v-model:title="educationMutation.faculty.title" v-model:value="educationMutation.faculty.value" v-model:resume-value="educationMutation.faculty.resumeValue" @change="onChange()"/>
      <field-input v-model:title="educationMutation.specialization.title" v-model:value="educationMutation.specialization.value" v-model:resume-value="educationMutation.specialization.resumeValue" @change="onChange()"/>
      <field-input v-model:title="educationMutation.graduationYear.title" v-model:value="educationMutation.graduationYear.value" v-model:resume-value="educationMutation.graduationYear.resumeValue" @change="onChange()"/>
      <button v-if="education.secondEducationEnabled === false" class="btn btn-success" @click="onClick()">Добавить образование</button>
      <button v-if="education.secondEducationEnabled === true" class="btn btn-danger" @click="deleteEducation()">Удалить образование</button>

    </div>
  </div>
</template>

<script>
import ResumeInput from "@/components/Inputs/ResumeInput";
import ResumeSelect from "@/components/Inputs/ResumeSelect";
import ResumeUniversityInput from "@/components/EducationBlock/EducationInputs/ResumeUniversityInput";
export default {
  name: 'ResumeEducation',
  data() {
    return {
      options : ['Среднее', 'Среднее специальное', 'Неоконченное высшее', 'Высшее'],

    }
  },
  props: {
    education: Object
  },
  components: {
    'field-input' : ResumeInput,
    'field-select' : ResumeSelect,
    'field-university-input' : ResumeUniversityInput
  },
  created() {
    this.educationMutation = this.education;
  },
  computed: {
    educationMutation() {
        return this.education;
    }
  },
  methods: {
    onChange:function() {
      this.$emit('education', this.educationMutation)
    },
    onClick:function() {
      this.educationMutation.secondEducationEnabled = true;
      this.$emit('education', this.educationMutation)
    },
    deleteEducation:function() {
      this.educationMutation.secondEducationEnabled = false;
      this.$emit('education', this.educationMutation)
    },
    onEducationChange:function () {
      this.$emit('education', this.educationMutation)
      console.log(this.educationMutation);
      this.educationMutation.showEducation = this.educationMutation.value !== "Среднее";
      this.educationMutation.resumeValue = this.educationMutation.value + " образование";
    },
  }
}

</script>
