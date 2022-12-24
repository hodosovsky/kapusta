import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledReportsBtn = styled(Link)`
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-bottom: 45px;
    text-align: center;
    text-decoration: none;
    color: rgba(82, 85, 95, 0.7);
    :hover,
    :focus {
      color: #ff751d;
    }
    :hover .reportsIcon,
    :focus .reportsIcon {
      fill: #ff751d;
    }

  .reportsIcon {
    margin-left: 20px;
    width: 14px;
    height: 14px;
    fill: #52555f;
  }
`