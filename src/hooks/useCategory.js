export const categoryEngToOrk = name => {
  switch (name.trim()) {
    case 'Products':
      return 'Продукты';
    case 'ЗСУ':
      return 'Алкоголь';
    case 'Entertainment':
      return 'Развлечения';
    case 'Health':
      return 'Здоровье';
    case 'Transport':
      return 'Транспорт';
    case 'Housing':
      return 'Всё для дома';
    case 'Technics':
      return 'Техника';
    case 'Communal and communication':
      return 'Коммуналка и связь';
    case 'Sport and hobby':
      return 'Спорт и хобби';
    case 'Education':
      return 'Образование';
    case 'Other':
      return 'Прочее';
    case 'Salary':
      return 'З/П';
    case 'Additional income':
      return 'Доп. доход';
    default:
      break;
  }
};

export const categoryOrkToEng = name => {
  switch (name.trim()) {
    case 'Продукты':
      return 'Products';
    case 'Алкоголь':
      return 'ЗСУ';
    case 'Развлечения':
      return 'Entertainment';
    case 'Здоровье':
      return 'Health';
    case 'Транспорт':
      return 'Transport';
    case 'Всё для дома':
      return 'Housing';
    case 'Техника':
      return 'Technics';
    case 'Коммуналка и связь':
      return 'Communal and communication';
    case 'Спорт и хобби':
      return 'Sport and hobby';
    case 'Образование':
      return 'Education';
    case 'Прочее':
      return 'Other';
    case 'З/П':
      return 'Salary';
    case 'Доп. доход':
      return 'Additional income';
    default:
      break;
  }
};

// const categoryArray = [
//   'Products',
//   'Alcohol',
//   'Entertainment',
//   'Health',
//   'Transport',
//   'Housing',
//   'Technics',
//   'Communal and communication',
//   'Sport and hobby',
//   'Education',
//   'Other',
// ];

// categoryArray = [
//   'Продукты',
//   'Алкоголь',
//   'Развлечения',
//   'Здоровье',
//   'Транспорт',
//   'Всё для дома',
//   'Техника',
//   'Коммуналка и связь',
//   'Спорт и хобби',
//   'Образование',
//   'Прочее',
// ];
