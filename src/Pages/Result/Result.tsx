import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../Hooks/store";
import { ResultCard } from "../../Components";

import "./Result.css";

export function Result() {
    const location = useLocation();
    const navigate = useNavigate();
    const score = location.state?.score as boolean[];
    const questions = useAppSelector((state) => state.questions);

    useEffect(() => {
        if (!location.state || !location.state.score) {
            return navigate("/");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <main className="ts__result">
            <header>
                <h1>You scored</h1>
                <h2>
                    {score.filter((s) => s).length} / {score.length + 1}
                </h2>
            </header>

            <section>
                <ul>
                    {questions.map((q, i) => (
                        <ResultCard key={i} question={q} score={score[i]} />
                    ))}
                </ul>
            </section>

            <footer>
                <Link to="/">Play Again?</Link>
            </footer>
        </main>
    );
}
