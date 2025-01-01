export class Student{
    constructor(name){
        this.name = name
        this.temporaryAnwers = []
        this.exams = {}
    }

    addExam(exam,result){
        this.exams[exam.name] = result
    }

    setTemporaryAnwer(answer){ // answer: array
        this.temporaryAnwers = []
        this.temporaryAnwers = answer
    }

}
