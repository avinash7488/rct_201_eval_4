import React from "react";
import { Button } from "../Button";
import {BsChevronLeft} from "react-icons/bs";
import { BsChevronRight} from "react-icons/bs";
import PageCell from "../PageCell/PageCell";
import { PaginationStyled } from "./Pagination.styled";

type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: number;
};
let arr:number[]=[];



const Pagination = (props: PaginationProps) => {
  for(let i=1;i<=props.count;i++){
    arr.push(i)
  }
  
  
  return (
    <PaginationStyled>
   <BsChevronLeft/>
    {arr.map((num:number)=><PageCell num={num} /> )}
    <BsChevronRight/>
  </PaginationStyled>
  )
};

export default Pagination;
