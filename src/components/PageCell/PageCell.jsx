import React from 'react'
import { PageCellStyled } from './PageCell.styled'

const PageCell = ({num,}) => {
  return (
    <div>
        <PageCellStyled >{num}</PageCellStyled>
    </div>
  )
}

export default PageCell