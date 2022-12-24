import { useSelector } from 'react-redux';
import { selectReports } from 'redux/selectors';
import reportsIcon from '../../../../images/reportsFiles/reports.svg';
import { List, Item, ItemSvg } from './ReportsList.styled';
import { useState } from 'react';

export const ReportsList = ({ onChange }) => {
  const [active, setActive] = useState('');
  const { reports } = useSelector(selectReports);
  const expensesData = reports?.expenses?.expensesData ?? {};
  const clickEventHandler = event => {
    setActive(event.currentTarget.id);
  };
  console.log(onChange);
  const entries = Object.entries(expensesData) ?? [];
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
                <p>{item[0]}</p>
              </Item>
            );
          })}
        </List>
      )}
      {onChange === 'income' && (
        <List className="incomeList">
          <Item className="income" key={'male'}>
            <p>{'item[1].total'}.00 male</p>
            <ItemSvg width="56" height="56">
              <use href={`${reportsIcon}#icon-salary`}></use>
            </ItemSvg>
            <p>{'item[0]'}</p>
          </Item>
          <Item className="income" key={'female'}>
            <p>{'item[1].total'}.00 female</p>
            <ItemSvg width="56" height="56">
              <use href={`${reportsIcon}#icon-income`}></use>
            </ItemSvg>
            <p>{'item[0]'}</p>
          </Item>
        </List>
      )}
    </div>
  );
};
