import parser from "html-react-parser";
import "./QuestionCard.css";

export function QuestionCard({ question }: { question: Question }) {
    return (
        <article className="ts__questionCard">
            <header>
                <h4>{parser(question.category)}</h4>
            </header>

            <section>
                <p>{parser(question.question)}</p>
            </section>
        </article>
    );
}
