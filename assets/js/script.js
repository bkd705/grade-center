var GradeCenter = new Vue({
  el: '#gradeTable',
  data: {
    grades: [
      { classname: 'Intro to Web', coursecode: 'COMP1002', finalgrade: '70'},
    ],
    inputClassName: '',
    inputCourseCode: '',
    inputFinalGrade: '',
    average: '',
    letterGrade: '',
    error: {
      seen: false,
      text: ''
    }
  },
  methods: {
    addGrade: function() {
      if (this.inputFinalGrade >= 150 || this.inputFinalGrade < 0) {
        this.error.text = 'Invalid Final Grade';
        this.error.seen = true;
      } else {
        this.error.seen = false;
        this.grades.push({classname: this.inputClassName, coursecode: this.inputCourseCode, finalgrade: Math.round(this.inputFinalGrade * 10) / 10})
      }
    },
    removeGrade: function(index) {
      this.grades.splice(index, 1);
    },
    gradeAverage: function() {
      let store = 0;
      for(var i=0; i < this.grades.length; i++) {
        store += parseInt(this.grades[i].finalgrade);
      }
      store = (store / this.grades.length);
      this.average = Math.round(store * 10) / 10;

      if (store <= 49) {
        this.letterGrade = 'F';
      } else if (store <= 59) {
        this.letterGrade = 'D';
      } else if (store <= 69) {
        this.letterGrade = 'C';
      } else if (store <= 79) {
        this.letterGrade = 'B';
      } else if (store >= 80) {
        this.letterGrade = 'A';
      } else {
        this.letterGrade = 'NaN';
      }
    }
  }
})

GradeCenter.gradeAverage();


/*
* - Letter Grading System done
* - Delete grades done
* - Ends at 1 Decimal done
* - Form Validation
* - Better formatted text done
*/
