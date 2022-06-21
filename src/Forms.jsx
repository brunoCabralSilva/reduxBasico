import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import alteraDados from './store/actions';

class Forms extends Component {
  state = {
    number: 0,
    name: '',
  }

  salva = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { add } = this.props;
    const { name, number } = this.state;
    return (
      <div>
        <label htmlFor="input-number">
          Digite um numero
          <input
            name="number"
            value={ number }
            type="number"
            id="input-number"
            onChange={ this.salva }
          />
        </label>
        <label htmlFor="input-text">
          Digite um nome
          <input
            name="name"
            value={ name }
            type="text"
            id="input-text"
            onChange={ this.salva }
          />
        </label>
        <button type="button" onClick={ () => add(number, name) }>
          Salvar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (number, name) => dispatch(alteraDados(number, name)),
});

export default connect(null, mapDispatchToProps)(Forms);

Forms.propTypes = {
  add: PropTypes.func.isRequired,
};
