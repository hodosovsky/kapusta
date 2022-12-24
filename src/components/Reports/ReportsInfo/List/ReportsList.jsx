import { useSelector } from 'react-redux';
import { selectReports } from 'redux/selectors';
import reportsIcon from '../../../../images/reportsFiles/reports.svg';
import { List, Item, ItemSvg } from './ReportsList.styled';

export const ReportsList = () => {
  const { reports } = useSelector(selectReports);
  const expensesData = reports?.expenses?.expensesData ?? {};

  const entries = Object.entries(expensesData) ?? [];
  return (
    entries && (
      <div>
        <List>
          {entries.map(item => {
            const iconName = item[0].replace(/\s+/g, '');

            return (
              <Item key={iconName}>
                <p>{item[1].total}.00</p>
                <ItemSvg width="56" height="56">
                  <use href={`${reportsIcon}#${iconName}`}></use>
                </ItemSvg>
                <p>{item[0]}</p>
              </Item>
            );
          })}
        </List>
      </div>
    )
  );
};
