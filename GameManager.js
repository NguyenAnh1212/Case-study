class GameManager {
    constructor(limit, current) {
        this.quizs = [];
        this.limit = limit;
        this.current = 0;
    }
    //checkAnswer - Ktra câu trả lời đúng hay sai. trả về true false.
    checkAnswer(ans){
        if (ans===this.quizs[this.current].correct){
            return true;
        }else {
            return false;
        }
    }
    //chooseAnswer - Chọn câu trả lời, nếu check đúng thì báo trả lời đúng, sai thì báo trả lời sai.
    chooseAnswer(ans){
        if(this.checkAnswer(ans)){
            alert("Hoan hô, bạn đã trả lời đúng, mình đi tiếp thôi!");
            nextQuiz();
        }else{
            alert("Bạn có thể dùng gợi ý để tìm câu trả lời");
        }
    }
    //getHint - gợi ý.
    getHint(hint){


    }

    //nextQuiz - chuyển sang câu hỏi tiếp theo nếu câu hỏi hiện tại < số câu hỏi có sẵn thì next,
    //nếu không thì báo đã hết câu hỏi và tự động hiển thị về câu quiz ban đầu.
    nextQuiz(){
        if (this.current<this.limit-1){
            this.current++;
            displayQuiz(this.current);
        }else{
            alert("Không còn câu hỏi nào nữa");
            this.current=0;
        }
    }
    //addQuiz - Thêm Quiz
    addQuiz(quiz) {
        this.quizs.push(quiz);
    }
    //deleteQuiz - Xóa Quiz
    deleteQuiz(index){
        this.quizs.splice(index);
    }

}
//Tạo đối tượng
let gameManager =new GameManager(4,0);
gameManager.addQuiz(quiz1);
gameManager.addQuiz(quiz2);
gameManager.addQuiz(quiz3);
gameManager.addQuiz(quiz4);
// Tạo hàm để tương tác với HTML
function displayQuiz(index) {
    document.getElementById("question").innerHTML = gameManager.quizs[index].question;
    for (let i = 0; i < gameManager.quizs[index].answer.length; i++) {
        document.getElementById("ans"+i).innerHTML = gameManager.quizs[index].answer[i]
    }
}
function nextQuiz() {
    gameManager.nextQuiz();
}
function chooseAns(id) {
    let ans = document.getElementById(id).innerHTML;
    gameManager.chooseAnswer(ans);
}



displayQuiz(0);