import React from 'react';
import './app.css';

interface IChartItem {
  name: string;
  value: number;
}

function generateRandomValue() {
  return Math.floor(Math.random() * 200);
}

function getMaxValue(items: IChartItem[]) {
  return items.reduce((acc, curr) => curr.value > acc ? curr.value : acc, 0);
}

function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const ITEMS: IChartItem[] = [
  { name: 'One', value: generateRandomValue() },
  { name: 'Two', value: generateRandomValue() },
  { name: 'Three', value: generateRandomValue() },
  { name: 'Four', value: generateRandomValue() },
  { name: 'Five', value: generateRandomValue() },
  { name: 'Six', value: generateRandomValue() },
];

const RECT_WIDTH = 80;
const RECT_MARGIN = 5;

function Chart() {
  const rectaglesWidth = ITEMS.length * RECT_WIDTH;
  const marginsWidth = (ITEMS.length - 1) * RECT_MARGIN;

  const width = rectaglesWidth + marginsWidth;
  const height = getMaxValue(ITEMS) + 20;

  return (
    <svg width={width} height={height}>
      {ITEMS.map((item, index) => {
        const x = index * (RECT_WIDTH + RECT_MARGIN);

        const rectProps = {
          x,
          y: height - item.value,
          width: RECT_WIDTH,
          height: item.value,
          fill: generateRandomColor(),
        };

        const detailsProps = {
          x,
          y: height - item.value - 10,
          fill: '#fff',
          fontSize: 12,
        };

        return (
          <React.Fragment key={item.name}>
            <text {...detailsProps}>{item.value}</text>
            <rect {...rectProps} />
          </React.Fragment>
        );
      })}
    </svg>
  );
}

export function App() {
  return (
    <div className="app">
      <Chart />
    </div>
  );
}
