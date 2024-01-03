type Difficulty = "easy" | "medium" | "hard";

declare type Question = {
    type: "boolean" | "multiple";
    difficulty: Difficulty;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};
