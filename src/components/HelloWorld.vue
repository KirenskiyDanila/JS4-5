<template>
<div class="d-flex flex-row flex-nowrap">
  <div class="container col-6 d-flex flex-column flex-nowrap">
    <div class="input-group mb-3">
      <span class="input-group-text font-weight-bold font-monospace fs-2">Профессия</span>
      <input type="text" class="form-control fs-2" id="profession" v-model="profession" @change="onProfessionChange()" style="width: 10%" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-text font-weight-bold font-monospace fs-2">Город</div>
      <input type="text" class="form-control fs-2" id="city" v-model="city" @change="onCityChange()" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-text font-weight-bold font-monospace fs-2">ФИО</div>
      <input type="text" class="form-control fs-2" id="name" v-model="name" @change="onNameChange()" aria-describedby="basic-addon1">
    </div>

    <div class="input-group">
      <div class="input-group-text font-weight-bold font-monospace fs-2">Телефон</div>
      <input type="number" class="form-control fs-2" id="phone" v-model="phone" @change="onPhoneChange()" aria-describedby="basic-addon1">
    </div>
    <div class="text-danger" v-if="phoneValidationFailed">Неправильный формат номера телефона!</div>

    <div class="input-group mt-3 mb-3">
      <div class="input-group-text font-weight-bold font-monospace fs-2">Электронная почта</div>
      <input type="text" class="form-control fs-2" id="email" v-model="email" @change="onEmailChange()" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-text font-weight-bold font-monospace fs-2">Дата рождения</div>
      <input type="text" class="form-control fs-2" id="birthdate" v-model="birthdate" @change="onBirthdateChange()" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <select class="form-select form-select-lg fs-2 font-weight-bold font-monospace" v-model="education" @change="onEducationChange()" aria-label=".form-select-lg example">
        <option selected>Среднее</option>
        <option>Среднее специальное</option>
        <option>Неоконченное высшее</option>
        <option>Высшее</option>
      </select>
      <div class="input-group p-3 border border-2 m-2 border-success rounded-5" v-if="educationData">
          <div class="input-group mb-3">
              <div class="input-group-text font-weight-bold font-monospace fs-2">Учебное заведение</div>
              <input type="text" class="form-control fs-2" id="university" v-model="university" @change="onUniversityChange()" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
              <div class="input-group-text font-weight-bold font-monospace fs-2">Факультет</div>
              <input type="text" class="form-control fs-2" id="faculty" v-model="faculty" @change="onFacultyChange()" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
              <div class="input-group-text font-weight-bold font-monospace fs-2">Специализация</div>
              <input type="text" class="form-control fs-2" id="specialization" v-model="specialization" @change="onSpecializationChange()" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
              <div class="input-group-text font-weight-bold font-monospace fs-2">Год окончания</div>
              <input type="number" class="form-control fs-2" id="graduationYear" v-model="graduationYear" @change="onGraduationYearChange()" aria-describedby="basic-addon1">
          </div>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-text font-weight-bold font-monospace fs-2">Желаемая зарплата</div>
      <input type="text" class="form-control fs-2" id="salary" v-model="salary" @change="onSalaryChange()" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-text font-weight-bold font-monospace fs-2">Ключевые навыки</div>
      <input type="text" class="form-control fs-2" id="skills" v-model="skills" @change="onSkillsChange()" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-text font-weight-bold font-monospace fs-1">О себе</div>
      <textarea type="text" class="form-control fs-2" id="about" v-model="about" @change="onAboutChange()" aria-describedby="basic-addon1"></textarea>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-text font-weight-bold font-monospace fs-2">Ссылка на фото</div>
      <input type="text" class="form-control fs-2" id="photo" v-model="photo" @change="onPhotoChange()" aria-describedby="basic-addon1">
    </div>
  </div>

  <div class="container col-5 border-3 border border-success rounded-4 ">
    <div class="m-2 font-monospace font-weight-bold fs-1">Ваше резюме:</div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="resumeProfession"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="resumeCity"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="resumeName"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="resumePhone"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="resumeEmail"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="resumeBirthdate"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="resumeEducation"></div>
    <div class="input-group p-3 border border-2 m-2 border-success rounded-5 text-wrap" v-if="educationData">
        <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="resumeUniversity"></div>
        <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="resumeFaculty"></div>
        <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="resumeSpecialization"></div>
        <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 w-75 text-wrap" v-text="resumeGraduationYear"></div>
    </div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="resumeSalary"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="resumeSkills"></div>
    <div class="m-2 text-md-start font-monospace font-weight-bold fs-2 text-wrap" v-text="resumeAbout"></div>
    <img v-bind:src="imageSrc" id="resumePhoto" alt="Нет фото" class="img-thumbnail">


  </div>
</div>
</template>

<script>

export default {
  name: 'mainResume',
  data: () => ({
    education: "Среднее",
    educationData: false,
    profession: "",
    city: "",
    name: "",
    phone: "",
    email: "",
    birthdate: "",
    salary: "",
    skills: "",
    about: "",
    photo: "",
    university: "",
    faculty: "",
    specialization: "",
    graduationYear: "",
    resumeProfession: "Профессия: ",
    resumeCity: "Город: ",
    resumeName: "ФИО: ",
    resumePhone: "Номер телефона: ",
    resumeEmail: "Электронная почта:",
    resumeBirthdate: "Дата рождения: ",
    resumeEducation: "Среднее образование ",
    resumeSalary: "Желаемая зарплата: ",
    resumeAbout: "О себе:",
    resumeSkills: "Навыки: ",
    resumeUniversity: "Учебное заведение: ",
    resumeFaculty: "Факультет: ",
    resumeSpecialization: "Специализация: ",
    resumeGraduationYear: "Год окончания: ",
    imageSrc: "",
    phoneValidationFailed: false

  }),
  methods: {
    // метод-обработчик изменения поля Образование
    onEducationChange:function () {
      if (this.education !== "Среднее") {
        this.educationData = true
        this.onGraduationYearChange()
      }
      else {
        this.educationData = false
      }
      this.resumeEducation = this.education + " образование"
    },
    // метод-обработчик изменения поля Профессия
    onProfessionChange() {
      this.resumeProfession = this.profession
      if (this.profession ==="") {
        this.resumeProfession = "Профессия: "
      }
    },
    // метод-обработчик изменения поля Город
    onCityChange() {
      this.resumeCity = this.city
      if (this.city ==="") {
        this.resumeCity = "Город: "
      }
    },
    // метод-обработчик изменения поля ФИО
    onNameChange() {
      this.resumeName = this.name
      if (this.name ==="") {
        this.resumeName = "ФИО: "
      }
    },
    // метод-обработчик изменения поля Телефон
    onPhoneChange() {
      this.phoneValidation()
      this.resumePhone = this.phone
      if (this.phone ==="" || this.phoneValidationFailed) {
        this.resumePhone = "Номер телефона: "
      }
    },
    // метод-обработчик изменения поля Электронная почта
    onEmailChange() {
      this.resumeEmail = this.email
      if (this.email ==="") {
        this.resumeEmail = "Электронная почта: "
      }
    },
    // метод-обработчик изменения поля Дата рождения
    onBirthdateChange() {
      this.resumeBirthdate = "Родился " + this.birthdate
      if (this.birthdate ==="") {
        this.resumeBirthdate = "Дата рождения: "
      }
    },
    // метод-обработчик изменения поля Учебное заведение
    onUniversityChange() {
      this.resumeUniversity = this.university
      if (this.university ==="") {
        this.resumeUniversity = "Учебное заведение: "
      }
    },
    // метод-обработчик изменения поля Факультет
    onFacultyChange() {
      this.resumeFaculty = this.faculty
      if (this.faculty ==="") {
        this.resumeFaculty = "Факультет: "
      }
    },
    // метод-обработчик изменения поля Специализация
    onSpecializationChange() {
      this.resumeSpecialization = this.specialization
      if (this.specialization ==="") {
        this.resumeSpecialization = "Специализация: "
      }
    },
    // метод-обработчик изменения поля Год выпуска
    onGraduationYearChange() {
      let keyword;
      if (this.education === "Неоконченное высшее") {
        keyword = "Покинул в "
      }
      else {
        keyword = "Окончил в "
      }
      this.resumeGraduationYear = keyword + this.graduationYear + " году"
      if (this.graduationYear ==="") {
        this.resumeGraduationYear = "Год окончания: "
      }
    },
    // метод-обработчик изменения поля Желаемая зарплата
    onSalaryChange() {
      this.resumeSalary = "Желаемая зарплата: " + this.salary
      if (this.salary ==="") {
        this.resumeSalary = "Желаемая зарплата: "
      }
    },
    // метод-обработчик изменения поля Навыки
    onSkillsChange() {
      this.resumeSkills = this.skills
      if (this.skills ==="") {
        this.resumeSkills = "Навыки: "
      }
    },
    // метод-обработчик изменения поля О себе
    onAboutChange() {
      this.resumeAbout = this.about
      if (this.about ==="") {
        this.resumeAbout = "О себе: "
      }
    },
    // метод-обработчик изменения поля Фото
    onPhotoChange() {
      this.imageSrc = this.photo
    },
    // валидация телефона
    phoneValidation() {
      if (this.phone.length < 6 || this.phone.length > 10) {
        this.phoneValidationFailed = true
      }
      else {
        this.phoneValidationFailed = false;
      }

    }

  }

}

</script>
