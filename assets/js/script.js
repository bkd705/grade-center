var GradeCenter = new Vue({
  el: '#gradeTable',
  data: {
    grades: [
      { classname: 'Intro to Web', coursecode: 'COMP1002', finalgrade: '70'},
    ],
    inputClassName: '',
    inputCourseCode: '',
    inputFinalGrade: '',
    average: ''
  },
  methods: {
    addGrade: function() {
      this.grades.push({classname: this.inputClassName, coursecode: this.inputCourseCode, finalgrade: this.inputFinalGrade})
    },
    gradeAverage: function() {
      let store = 0;
      for(var i=0; i < this.grades.length; i++) {
        store += parseInt(this.grades[i].finalgrade);
      }
      this.average = (store / this.grades.length);
    }
  }
})

GradeCenter.gradeAverage();
