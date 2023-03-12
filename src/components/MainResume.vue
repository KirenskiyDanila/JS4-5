<template>
<div class="d-flex flex-row flex-nowrap">
  <div class="container col-6 d-flex flex-column flex-nowrap">

    <field-input v-model:title="values.profession.title" v-model:value="values.profession.value" v-model:resume-value="values.profession.resumeValue"/>
    <field-city-input v-model:city-id="values.education.university.cityId" v-model:title="values.city.title"
                      v-model:value="values.city.value" v-model:resume-value="values.city.resumeValue"/>
    <field-input v-model:title="values.name.title" v-model:value="values.name.value" v-model:resume-value="values.name.resumeValue"/>
    <field-phone-input v-model:title="values.phone.title" v-model:resume-value="values.phone.resumeValue"
                       v-model:value="values.phone.value" v-model:validation="values.phone.validation"/>
    <field-input v-model:title="values.email.title" v-model:value="values.email.value" v-model:resume-value="values.email.resumeValue"/>
    <field-input v-model:title="values.birthdate.title" v-model:value="values.birthdate.value" v-model:resume-value="values.birthdate.resumeValue"/>

    <field-select v-model:options="values.status.options" v-model:value="values.status.value" v-model:resume-value="values.status.resumeValue"/>

    <resume-education v-model:education="values.education"/>
    <resume-education v-if="values.education.secondEducationEnabled" v-model:education="values.secondEducation"/>

    <field-input v-model:title="values.salary.title" v-model:value="values.salary.value" v-model:resume-value="values.salary.resumeValue"/>
    <field-input v-model:title="values.skills.title" v-model:value="values.skills.value" v-model:resume-value="values.skills.resumeValue"/>
    <field-big-input v-model:title="values.about.title" v-model:value="values.about.value" v-model:resume-value="values.about.resumeValue"/>
    <field-input v-model:title="values.photo.title" v-model:value="values.photo.value" v-model:resume-value="values.photo.resumeValue"/>

  </div>

  <resume-view v-model:data="values"/>
</div>
  <button class="btn btn-success col-8 mt-3 mb-3" @click="sendResume()">Отправить резюме</button>
</template>

<script>

import ResumeInput from "@/components/Inputs/ResumeInput"
import ResumePhoneInput from "@/components/Inputs/ResumePhoneInput";
import ResumeBigInput from "@/components/Inputs/ResumeBigInput";
import ResumeView from "@/components/View/ResumeView.vue";
import ResumeEducation from "@/components/EducationBlock/ResumeEducation";
import ResumeSelect from "@/components/Inputs/ResumeSelect";
import ResumeCityInput from "@/components/Inputs/ResumeCityInput";

export default {
  name: 'mainResume',
  components: {
    ResumeEducation,
    'field-input' : ResumeInput,
    'field-phone-input' : ResumePhoneInput,
    'field-big-input' : ResumeBigInput,
    'resume-view' : ResumeView,
    'field-select' : ResumeSelect,
    'field-city-input' : ResumeCityInput,
  },
  data() {
    return {
      values: {
        profession: {
          title: 'Профессия',
          value: '',
          resumeValue: 'Профессия'
        },
        city: {
          title: 'Город',
          value: '',
          resumeValue: 'Город'
        },
        name: {
          title: 'ФИО',
          value: '',
          resumeValue: 'ФИО'
        },
        phone: {
          title: 'Номер телефона',
          value: '',
          validation: false,
          resumeValue: 'Номер телефона'
        },
        email: {
          title: 'Email',
          value: '',
          resumeValue: 'Email'
        },
        birthdate: {
          title: 'Дата рождения',
          value: '',
          resumeValue: 'Дата рождения'
        },
        salary: {
          title: 'Желаемая зарплата',
          value: '',
          resumeValue: 'Желаемая зарплата'
        },
        skills: {
          title: 'Ключевые навыки',
          value: '',
          resumeValue: 'Ключевые навыки'
        },
        about: {
          title: 'О себе',
          value: '',
          resumeValue: 'О себе'
        },
        photo: {
          title: 'Ссылка на фото',
          value: '',
          resumeValue: ''
        },
        status: {
          options : ['Новый', 'Назначено собеседование', 'Принят', 'Отказ'],
          value: 'Новый',
          resumeValue: 'Новый'
        },

        education: {
          value: "Среднее",
          resumeValue : "Среднее образование",
          showEducation: false,
          secondEducationEnabled: false,
          university: {
            title: 'Учебное заведение',
            value: '',
            resumeValue: 'Учебное заведение',
            cityId: 1
          },
          faculty: {
            title: 'Факультет',
            value: '',
            resumeValue: 'Факультет'
          },
          specialization: {
            title: 'Специализация',
            value: '',
            resumeValue: 'Специализация'
          },
          graduationYear: {
            title: 'Год окончания',
            value: '',
            resumeValue: 'Год окончания'
          },
        },

        secondEducation: {
          value: "Среднее",
          resumeValue : "Среднее образование",
          showEducation: false,
          university: {
            title: 'Учебное заведение',
            value: '',
            resumeValue: 'Учебное заведение',
            cityId: 1
          },
          faculty: {
            title: 'Факультет',
            value: '',
            resumeValue: 'Факультет'
          },
          specialization: {
            title: 'Специализация',
            value: '',
            resumeValue: 'Специализация'
          },
          graduationYear: {
            title: 'Год окончания',
            value: '',
            resumeValue: 'Год окончания'
          },
        }

      }
    }
  },
  methods: {
    sendResume() {
      let resumeToSend = {};
      resumeToSend.profession = this.values.profession.value
      resumeToSend.phone = this.values.phone.value
      resumeToSend.email = this.values.email.value
      resumeToSend.about = this.values.about.value
      resumeToSend.city = this.values.city.value
      resumeToSend.FIO = this.values.name.value
      resumeToSend.firstEducation = this.values.education.value


      if (resumeToSend.firstEducation !== "Среднее") {
        resumeToSend.firstFaculty = this.values.education.faculty.value
        resumeToSend.firstSpecialization = this.values.education.specialization.value
        resumeToSend.firstUniversity = this.values.education.university.value
        resumeToSend.firstYear = this.values.education.graduationYear.value
      }
      resumeToSend.HaveSecond = this.values.education.secondEducationEnabled;

      if (resumeToSend.HaveSecond) {
        resumeToSend.secondEducation = this.values.secondEducation.value
        resumeToSend.secondFaculty = this.values.secondEducation.faculty.value
        resumeToSend.secondSpecialization = this.values.secondEducation.specialization.value
        resumeToSend.secondUniversity = this.values.secondEducation.university.value
        resumeToSend.secondYear = this.values.secondEducation.graduationYear.value
      }
      resumeToSend.photo = this.values.photo.value;
      resumeToSend.skills = this.values.skills.value;
      resumeToSend.salary = this.values.salary.value;
      resumeToSend.status = this.values.status.value;

      //let jsonResume = JSON.stringify(resumeToSend);

    //  window.location.href = "/";
    }
  }

}

</script>
