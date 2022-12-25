import { useDispatch, useSelector } from 'react-redux';
import { selectReports } from 'redux/selectors';
import reportsIcon from '../../../../images/reportsFiles/reports.svg';
import { List, Item, ItemSvg } from './ReportsList.styled';
import { useState, useEffect, useMemo } from 'react';
import { categoryOrkToEng } from 'hooks/useCategory';
import { filteredDataAction } from 'redux/reportsQuery/reportsQuery.slice';

export const ReportsList = ({ onChange }) => {
  const [active, setActive] = useState('');
  const { reports } = useSelector(selectReports);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const valueArr = [];
  // const expensesData = reports?.expenses?.expensesData ?? {};

  const expensesData = useMemo(
    () => reports?.expenses?.expensesData ?? {},
    [reports]
  );

  // const incomesData = reports?.incomes?.incomesData ?? {};
  const incomesData = useMemo(
    () => reports?.incomes?.incomesData ?? {},
    [reports]
  );

  useEffect(() => {
    if (onChange === 'expenses') {
      setData(expensesData ?? {});
    } else {
      setData(incomesData ?? {});
    }
  }, [onChange, expensesData, incomesData]);

  const clickEventHandler = event => {
    setActive(event.currentTarget.id);
    const filteredValueArr = valueArr.filter(
      item => item[0].replace(/\s+/g, '') === event.currentTarget.id
    );

    dispatch(filteredDataAction(filteredValueArr));
  };
  const entries = Object.entries(data) ?? [];
  // const values = Object.values(data);

  // setValueData(values);

  // const incomesEnties = Object.entries(incomesData) ?? [];
  return (
    <div>
      <List>
        {entries.map(item => {
          const iconName = item[0].replace(/\s+/g, '');
          valueArr.push(item);
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
    </div>
  );
};
