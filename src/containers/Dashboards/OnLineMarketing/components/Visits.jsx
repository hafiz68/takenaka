import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, CardBody, Col } from 'reactstrap';
import {
  BarChart, Bar, Cell, ResponsiveContainer,
} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import { Link } from 'react-router-dom';

const data = [
  { id: 0, name: 'Page A', uv: 4000 },
  { id: 1, name: 'Page B', uv: 3000 },
  { id: 2, name: 'Page C', uv: 2000 },
  { id: 3, name: 'Page D', uv: 2780 },
  { id: 4, name: 'Page E', uv: 1890 },
  { id: 5, name: 'Page F', uv: 2390 },
  { id: 6, name: 'Page G', uv: 3490 },
  { id: 7, name: 'Page H', uv: 2000 },
  { id: 8, name: 'Page I', uv: 2780 },
  { id: 9, name: 'Page J', uv: 1890 },
];

const Visits = () => {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = (item) => {
    const index = data.indexOf(item.payload);
    setActiveIndex(index);
  };

  return (
    <Col md={12} xl={12} lg={12} xs={12}>
      {/* <Card>
              <CardBody className="dashboard__card-widget" color='primary'>  */}
              <Link  className='btn-issue' to="/tables/users_issue">
        <Button outline  color='primary'>
        Pending tasks
        </Button>

          {/* <div className="card__title">
            <h5 className="bold-text">{t('Total Visits')}</h5>
          </div>
          <div className="dashboard__total">
            <TrendingUpIcon className="dashboard__trend-icon" />
            <p className="dashboard__total-stat">
              {activeItem.uv}
            </p>
            <div className="dashboard__chart-container">
              <ResponsiveContainer height={50}>
                <BarChart data={data}>
                  <Bar dataKey="uv" onClick={handleClick}>
                    {data.map((entry, index) => (
                      <Cell
                        key={entry.id}
                        cursor="pointer"
                        fill={index === activeIndex ? '#4ce1b6' : '#ff4861'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div> */}
</Link>
        {/* </CardBody>
      </Card> */}
    </Col>
  );
};

export default Visits;
