class Quiz {
    constructor(question, answer, correct, hint) {
        this. question = question;
        this.answer = answer;
        this.correct = correct;
        this.hint = hint;
    }

}
let quiz1 = new Quiz("Của thiên trả địa", ["猫に小判","残り物には福がある","悪銭身に付かず","馬の耳に念仏"],"悪銭身に付かず",
    "Những thứ không thuộc về mình rồi cũng sẽ không thuộc về mình");

let quiz2 = new Quiz("Thả con săn sắt, bắt con cá rô", ["始めよければ終わりよし","濡れ手で粟","海老で鯛を釣る","話し上手は聞き上手"],
    "海老で鯛を釣る", "Hi sinh lợi ích nhỏ để giành lấy lợi ích lớn hơn");

let quiz3 = new Quiz("Tức nước vỡ bờ",["噂をすれば影が差す","一を聞いて十を知る","窮鼠猫を嚙む（きゅうそ猫をかむ）",
    "濡れ手で粟"],"窮鼠猫を嚙む（きゅうそ猫をかむ）", "Con chuột khi bị dồn vào đường cùng sẽ quay ra cắn con mèo.");

let quiz4 = new Quiz("Nhắc Tào Tháo, Tào Tháo đến",["残り物には福がある","噂をすれば影が差す","濡れ手で粟　",
    "悪銭身に付かず","噂をすれば影が差す", "Nhắc tới ai đó thì thấy bóng dáng họ xuất hiện."]);