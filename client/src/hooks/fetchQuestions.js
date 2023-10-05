import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from '../helper/helper';

/** redux actions */
import * as Action from "../redux/question_reducer";

/** fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const [getData, setGetData] = useState({
        isLoading: false,
        apiData: [],
        serverError: null,
    });
    const dispatch = useDispatch();

    useEffect(() => {
        setGetData((prev) => ({ ...prev, isLoading: true }));

        /** async function fetch backend data */
        (async () => {
            try {
                const [{ questions, answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data);

                console.log({ questions, answers});

                if (questions.length > 0) {
                    setGetData((prev) => ({ ...prev, isLoading: false }));
                    setGetData((prev) => ({ ...prev, apiData: {questions, answers} }));

                    /** dispatch an Action */
                    dispatch(Action.startExamAction({question : questions, answers}));
                } else {
                    throw new Error("No Question Available");
                }
            } catch (error) {
                setGetData((prev) => ({ ...prev, isLoading: false }));
                setGetData((prev) => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
};

/** NextAction Dispatch Function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error);
    }
}

/** PrevAction Dispatch Function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error);
    }
}