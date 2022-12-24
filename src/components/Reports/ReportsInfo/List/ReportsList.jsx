import { useSelector } from 'react-redux';
import { selectReports } from 'redux/selectors';
import reportsIcon from '../../../../images/reportsFiles/reports.svg';
import { List, Item, ItemSvg } from './ReportsList.styled';
import { useState } from 'react';
import { categoryOrkToEng } from 'hooks/useCategory';

export const ReportsList = ({ onChange }) => {
  const [active, setActive] = useState('');
  const { reports } = useSelector(selectReports);
  const expensesData = reports?.expenses?.expensesData ?? {};
  const incomesData = reports?.incomes?.incomesData ?? {};
  const clickEventHandler = event => {
    setActive(event.currentTarget.id);
  };
  const entries = Object.entries(expensesData) ?? [];
  const incomesEnties = Object.entries(incomesData) ?? [];
  return (
    <div>
      {onChange === 'expenses' && entries && (
        <List>
          {entries.map(item => {
            const iconName = item[0].replace(/\s+/g, '');

            return (
              <Item
                key={iconName}
                id={iconName}
                onClick={clickEventHandler}
                className={iconName === active ? 'active' : ''}
              >
                <p>{item[1].total}.00</p>
                <ItemSvg width="56" height="56">
                  <use href={`${reportsIcon}#${iconName}`}></use>
                </ItemSvg>
                <p>{categoryOrkToEng(item[0])}</p>
              </Item>
            );
          })}
        </List>
      )}
      {onChange === 'income' && (
        <List>
          {incomesEnties.map(item => {
            const iconName = item[0].replace(/\s+/g, '');

            return (
              <Item
                key={iconName}
                id={iconName}
                onClick={clickEventHandler}
                className={iconName === active ? 'active' : ''}
              >
                <p>{item[1].total}.00</p>
                <ItemSvg width="56" height="56">
                  <use href={`${reportsIcon}#${iconName}`}></use>
                </ItemSvg>
                <p>{categoryOrkToEng(item[0])}</p>
              </Item>
            );
          })}
        </List>
      )}
    </div>
  );
};
