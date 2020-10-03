import React from 'react'
import styled from 'styled-components'

const LoadingComponent = styled.div`
        color: red;
        width: 5rem;
        height: 5rem;
        margin: 20.4rem auto;
        border-radius: 50%;
        border: 0.3rem solid #d6d6d6;
        border-top-color: #2f4f4f;
        animation: 1.5s spin infinite linear;
    
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
`;

const Loading = () => {
    return (
        <LoadingComponent />
    )
}

export default Loading
