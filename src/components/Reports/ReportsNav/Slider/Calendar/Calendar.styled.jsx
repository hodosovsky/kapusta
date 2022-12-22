import styled from "styled-components";

export const Backdrop = styled.div`
    z-index: 2;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0%;
    background-color:rgba(0, 0, 0, 0.5);
    
`

export const CalendarBox = styled.div`
    position: absolute;
    background-color: #fff;
    z-index: 10;
    width: 60%;
    border-radius: 20px;
    padding: 10px 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) ;

`

export const Month = styled.li`
font-weight: 700;
font-size: 14px;
line-height: 1.22;
color: #52555F;
&.active{
    color: #FF751D;
}
`

export const Year = styled.p`
font-weight: 700;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.02em;
color: #000000;
padding: 0 10px;
`