import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const TableBody = ({ data, columns }) => {
  const renderUserLink = (item) => <Link to={`/users/${item.id}`}>{item.name}</Link>;

  const renderContent = (item, column) => {
    const { component } = columns[column];
    if (component) {
      if (typeof component === 'function') {
        return component(item);
      }
      return component;
    }
    return _.get(item, columns[column].path);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {Object.keys(columns)
            .map((column) => (
              <td key={column}>{column === 'name' ? renderUserLink(item) : renderContent(item, column)}</td>
            ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableBody;
