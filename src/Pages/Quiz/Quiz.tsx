import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { QuestionCard } from "../../Components";
import { useAppSelector } from "../../Hooks/store";

import "./Quiz.css";

export function Quiz() {
    const [score, setScore] = useState<boolean[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = useAppSelector((state) => state.questions);
    const navigate = useNavigate();

    useEffect(() => {
        if (questions.length === 0) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questions]);

    const select = (selection: boolean) => {
        setScore([
            ...score,
            selection + "" ===
                questions[currentQuestion].correct_answer.toLowerCase(),
        ]);

        if (currentQuestion + 1 === questions.length) {
            return navigate("/result", { state: { score } });
        }

        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <main className="ts__quiz">
            {questions.length > 0 && (
                <>
                    <section>
                        <QuestionCard question={questions[currentQuestion]} />

                        <p>
                            {currentQuestion + 1} of {questions.length}
                        </p>

                        <div className="true-false">
                            <button onClick={() => select(true)}>True</button>
                            <button onClick={() => select(false)}>False</button>
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}
