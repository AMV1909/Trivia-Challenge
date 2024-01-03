import { setQuestionsInfo } from "../Store/Questions/slice";
import { useAppDispatch } from "./store";

export const useQuestionsActions = () => {
    const dispatch = useAppDispatch();

    const setQuestions = (questions: Question[]) => {
        dispatch(setQuestionsInfo(questions));
    };

    return {
        setQuestions,
    };
};
