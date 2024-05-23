import { createMusicParts } from '../SearchPage/musicData'
import React, { useState, useEffect } from 'react';
import './Catalog.scss';

const Catalog = () => {
  const [musicParts, setMusicParts] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  useEffect(() => {
    setMusicParts(createMusicParts());
  }, []);

  const sortedMusicParts = React.useMemo(() => {
    let sortableItems = [...musicParts];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [musicParts, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="MainBlock">
      <table className="musicTable">
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}><h3>Композитор</h3></th>
            <th onClick={() => requestSort('song')}><h3>Название</h3></th>
            <th onClick={() => requestSort('instrument')}><h3>Инструмент</h3></th>
            <th onClick={() => requestSort('format')}><h3>Формат</h3></th>
            <th onClick={() => requestSort('price')}><h3>Стоимость</h3></th>
          </tr>
        </thead>
        <tbody>
          {sortedMusicParts.map((part, index) => (
            <tr key={index}>
              <td><a href="/">{part.name}</a></td>
              <td><a href="/">{part.song}</a></td>
              <td>{part.instrument}</td>
              <td>{part.format}</td>
              <td>{part.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Catalog;
