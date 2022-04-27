
var homework = {
    study() {
       console.log(`Let's study ${ this.topic }`);
    }
}

var jsHW = Object.create(homework);
jsHW.topic = 'JS';
jsHW.study();

var mathHW = Object.create(homework);
mathHW.topic = 'MATH';
mathHW.study();

