import reports from '../../../../images/reportsFiles/reports.svg';
import { List, Item, ItemSvg } from './ReportsList.styled';


export const ReportsList = () => {


  return (

    <div>
      {/* <List>
      {
        `${'user expenses/invoises list'}`.map({id, amounth, type}=>{
          return(
            <Item key={id}>
              <p>{amounth}</p>
              <ItemSvg  width="56"
            height="56">
               <use href={`${reports}#icon-${type}`}></use>
            </ItemSvg>
            </Item>
          )
        })
      }
      </List> */}
      
      <List>
        <Item>
          <p>${'amounth'}</p>
          <ItemSvg
            width="56"
            height="56"
          >
            <use href={`${reports}#icon-products`}></use>
          </ItemSvg>
          <p>${'type'}</p>
        </Item>
        <Item>
          <p>${'amounth'}</p>
          <ItemSvg width="56" height="56">
            <use href={`${reports}#icon-alcohol`}></use>
          </ItemSvg>
          <p>${'type'}</p>
        </Item>
        <Item>
          <p>${'amounth'}</p>
          <ItemSvg width="56" height="56">
            <use href={`${reports}#icon-entertainment`}></use>
          </ItemSvg>
          <p>${'type'}</p>
        </Item>
        <Item>
          <p>${'amounth'}</p>
          <ItemSvg
            width="56"
            height="56"
           
          >
            <use href={`${reports}#icon-health`}></use>
          </ItemSvg>
          <p>${'type'}</p>
        </Item>
        <Item>
          <p>${'amounth'}</p>
          <ItemSvg width="56" height="56" >
            <use href={`${reports}#icon-transport`}></use>
          </ItemSvg>
          <p>${'type'}</p>
        </Item>
        <Item>
          <p>${'amounth'}</p>
          <ItemSvg width="56" height="56">
            <use href={`${reports}#icon-housing`}></use>
          </ItemSvg>
          <p>${'type'}</p>
        </Item>
        <Item>
          <p>${'amounth'}</p>
          <ItemSvg width="56" height="56">
            <use href={`${reports}#icon-technique`}></use>
          </ItemSvg>
          <p>${'type'}</p>
        </Item>
        <Item>
          <p>${'amounth'}</p>
          <ItemSvg width="56" height="56">
            <use href={`${reports}#icon-comunal`}></use>
          </ItemSvg>
          <p>${'type'}</p>
        </Item>
        <Item>
          <p>${'amounth'}</p>
          <ItemSvg width="56" height="56" >
            <use href={`${reports}#icon-hobbies`}></use>
          </ItemSvg>
          <p>${'type'}</p>
        </Item>
        <Item>
          <p>${'amounth'}</p>
          <ItemSvg width="56" height="56">
            <use href={`${reports}#icon-education`}></use>
          </ItemSvg>
          <p>${'type'}</p>
        </Item>
        <Item>
          <p>${'amounth'}</p>
          <ItemSvg width="56" height="56">
            <use href={`${reports}#icon-other`}></use>
          </ItemSvg>
          <p>${'type'}</p>
        </Item>
      </List>
    </div>
  );
};
