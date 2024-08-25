import React from 'react';
import { LayoutActiviy } from '../../layout/LayoutActiviy';
import { QuestionHistory } from '../../components/QuestionHistory';
import questionData from "../../data/question-mock.json";

export const TesteLayout = () => {
    return (
        <LayoutActiviy>
            <QuestionHistory questionData={questionData}/>
        </LayoutActiviy>
    );
}
