import styled from "styled-components";

export const List = styled.ul`
padding-top: 5px;
`
export const Item = styled.li`
    justify-content: space-between;
  display: flex;
  border-bottom: 10px solid  #FED9BF;
  border-radius: 10px 10px 0px 0px;
  padding-top: 15px ;
  &:nth-child(3n + 1){
  border-bottom: 10px solid  #FF751D;
}
`