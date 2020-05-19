const CODES = {
  A: 65,
  Z: 90
};

const createCell = () => {
  return `<div class="cell" contenteditable></div>`;
};

const createColumn = (el) => {
  return `
        <div class="column"> ${el}</div>
    `;
};


const createRow = (content, index) => {
  return `<div class="row">
            <div class="row-info">${index ? index : ''}</div>
            <div class="row-data">${content}</div>
        </div>`;
};


export const createTable = (rowsCount = 40) => {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map((el, index) => String.fromCharCode(CODES.A + index))
      .map( el => createColumn(el))
      .join('');

  rows.push(createRow(cols, null));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill('')
        .map(createCell)
        .join('');
    rows.push(createRow(cells, i+1));
  }


  return rows.join('');
};
