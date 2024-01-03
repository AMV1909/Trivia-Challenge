import parser from "html-react-parser";
import "./ResultCard.css";

export function ResultCard({
    question,
    score,
}: {
    question: Question;
    score: boolean;
}) {
    return (
        <article
            className={`ts__resultCard ${score ? "correct" : "incorrect"}`}
        >
            <h1>
                {score + "" === question.correct_answer.toLowerCase()
                    ? "+"
                    : "-"}
            </h1>
            <p>{parser(question.question)}</p>
        </article>
    );
}
