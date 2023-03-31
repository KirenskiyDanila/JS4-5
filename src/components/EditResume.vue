<template>
  <BaseResume v-model:values="values"/>
  <button class="btn btn-success col-8 mt-3 mb-3" @click="sendResume()">Отправить резюме</button>
</template>

<script>
import {ResumeApi} from "@/components/Api/ResumeApi";
import BaseResume from "@/components/BaseResume";

export default {
  name: 'mainResume',
  components: {
    BaseResume,
  },
  props: ['id'],
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
          institution: {
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
          endYear: {
            title: 'Год окончания',
            value: '',
            resumeValue: 'Год окончания'
          },
        },
        optionalEducation: {
          value: "Среднее",
          resumeValue: "Среднее образование",
          showEducation: false,
          secondEducationEnabled: false,
          institution: {
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
          endYear: {
            title: 'Год окончания',
            value: '',
            resumeValue: 'Год окончания'
          },
        },
          thirdEducation: {
            value: "Среднее",
            resumeValue : "Среднее образование",
            showEducation: false,
            institution: {
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
            endYear: {
              title: 'Год окончания',
              value: '',
              resumeValue: 'Год окончания'
            },
          }
      }
    }
  },
  async mounted() {
    await this.getResume();
    const result = this.resumeData["result"];
    console.log(result);
    this.values.profession.value = result["profession"]
    this.values.phone.value = result["telephone"]
    this.values.email.value = result["email"]
    this.values.about.value = result["about"]
    this.values.city.value = result["city"]
    this.values.name.value = result["name"]
    this.values.birthdate.value = result["dateOfBirth"]
    this.values.photo.value = result["photo"]
    this.values.skills.value = result["skills"]
    this.values.salary.value = result["salary"]
    if (result["optional"] !== null) {
      this.values.education.showEducation = true;
      this.values.education.institution.value = result["optional"][0]['institution'];
      this.values.education.faculty.value = result["optional"][0]['faculty'];
      this.values.education.specialization.value = result["optional"][0]['specialization'];
      this.values.education.endYear.value = result["optional"][0]['endYear'];
    }
    this.values.education.value = result["education"]

    if (result["optional"].length > 1) {
      this.values.education.secondEducationEnabled = true;
      this.values.optionalEducation.showEducation = true;
      this.values.optionalEducation.institution.value = result["optional"][1]['institution'];
      this.values.optionalEducation.faculty.value = result["optional"][1]['faculty'];
      this.values.optionalEducation.specialization.value = result["optional"][1]['specialization'];
      this.values.optionalEducation.endYear.value = result["optional"][1]['endYear'];
    }
    if (result["optional"].length > 2) {
      this.values.optionalEducation.secondEducationEnabled = true;
      this.values.thirdEducation.showEducation = true;
      this.values.thirdEducation.institution.value = result["optional"][2]['institution'];
      this.values.thirdEducation.faculty.value = result["optional"][2]['faculty'];
      this.values.thirdEducation.specialization.value = result["optional"][2]['specialization'];
      this.values.thirdEducation.endYear.value = result["optional"][2]['endYear'];
    }
    this.values.status.value = result["status"]
    this.values.profession.value = result["profession"]
  },
  methods: {
    // запрос на получение резюме
    async getResume() {
      this.resumeData = await ResumeApi.getResume(this.id);
    },
    // Запрос на изменение резюме
    sendResume() {
      let resumeToSend = {};
      resumeToSend.profession = this.values.profession
      resumeToSend.telephone = this.values.phone
      resumeToSend.email = this.values.email
      resumeToSend.about = this.values.about
      resumeToSend.city = this.values.city
      resumeToSend.name = this.values.name
      resumeToSend.education = this.values.education
      resumeToSend.dateOfBirth = this.values.birthdate
      resumeToSend.photo = this.values.photo;
      resumeToSend.skills = this.values.skills;
      resumeToSend.salary = this.values.salary;
      resumeToSend.status = this.values.status;
      resumeToSend.optional = this.values.optionalEducation;
      resumeToSend.thirdEducation = this.values.thirdEducation;
      let jsonResume = JSON.stringify(resumeToSend);

      ResumeApi.editResume(this.id, jsonResume)
    }
  }

}

</script>
