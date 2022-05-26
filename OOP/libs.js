class MyMath {
  static random() {
    return Math.random();
  }
  static sum(n1, n2, n3) {
    return n1 + n2 + n3;
  }
}


class Helper{
    static calcAverageScore(score_1, score_2, score_3){
        return ((score_1 + score_2 + score_3)/3).toFixed(1)
    }
    static getRank(aveScore){
        if(aveScore < 0 || aveScore > 10){
            return "invalid score"
        }
        if(aveScore >= 9){
            return "Xuất sắc"
        }
        if(aveScore >= 8){
            return "Giởi"
        }
        if(aveScore >= 7){
            return "Khá"
        }
        if(aveScore >= 5){
            return "TB"
        }
        return "Yếu"
    }
}
console.log(MyMath.sum(6, 7, 8));
let averageScore = Helper.calcAverageScore(6.6, 7.3, 8.1)
console.log(Helper.getRank(averageScore));
