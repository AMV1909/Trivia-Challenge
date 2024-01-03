import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useQuestionsActions } from "../../Hooks/useQuestionsActions";
import { getQuestions } from "../../API/Questions";

import "./Home.css";

export function Home() {
    const { setQuestions } = useQuestionsActions();
    const navigate = useNavigate();

    const onClick = async () => {
        toast.loading("Loading questions...", {
            id: "loading",
            duration: 10000,
        });

        await getQuestions()
            .then((res) => {
                setQuestions(res.results);
                navigate("/quiz");
            })
            .catch((err) => toast.error(err.message))
            .finally(() => toast.dismiss("loading"));
    };

    return (
        <main className="ts__home">
            <section>
                <h1>Welcome To Trivia Challenge!</h1>
                <p>You will be presented with 10 True or False questions.</p>
                <p>Can you score 100%?</p>

                <button onClick={onClick}>Begin</button>
            </section>
        </main>
    );
}
