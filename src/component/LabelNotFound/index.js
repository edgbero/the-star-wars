import React from "react";
import styled from "styled-components";

const LabelNotFoundComponent = styled.label`
    width: 100%;
    border: 1px #dee2e6 solid;
    color: #333;
    padding: 5px 20px;
    text-align: center;
`;

const LabelNotFound = ({text}) => {
    return <LabelNotFoundComponent>{text}</LabelNotFoundComponent>;
};

export default LabelNotFound;
