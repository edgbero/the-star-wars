import React from "react";
import styled from "styled-components";
import { PaginationType } from "./types";

const StyledUl = styled.nav`
    margin-bottom: 75px;

    .pagination-parent {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .pagination {
        width: 100%;
        height: 99%;
        overflow: auto;
        padding-right: 15px;
    }

    .page-link {
        color: #333;
    }

    .page-item {
        &:hover,
        &:active {
            cursor: pointer;
        }
    }
`;

const Pagination = ({ characterPerPage, totalCharacter, paginate }: PaginationType) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCharacter / characterPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <StyledUl className="pagination-parent">
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <div
                            className="page-link"
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </StyledUl>
    );
};
export default Pagination;
