import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Exibition extends Component {
  render() {
    const { listNumber, listName } = this.props;
    return (
      <div>
        <p>
          Nome:
          {' '}
          {listNumber}
        </p>
        <p>
          Numero:
          {' '}
          {listName}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    listNumber: state.reduceEx.number,
    listName: state.reduceEx.name,
  });

export default connect(mapStateToProps, null)(Exibition);

Exibition.propTypes = {
  listNumber: PropTypes.number.isRequired,
  listName: PropTypes.string.isRequired,
};
