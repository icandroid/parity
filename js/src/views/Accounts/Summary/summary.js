import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Balances from '../../../ui/Balances';
import { Container, ContainerTitle, IdentityIcon } from '../../../ui';

export default class Summary extends Component {
  static contextTypes = {
    api: React.PropTypes.object
  }

  static propTypes = {
    account: PropTypes.object.isRequired,
    tokens: PropTypes.array,
    children: PropTypes.node
  }

  state = {
    name: 'Unnamed'
  }

  render () {
    const account = this.props.account;

    if (!account) {
      return null;
    }

    const viewLink = `/account/${account.address}`;

    return (
      <Container>
        <IdentityIcon
          address={ account.address } />
        <ContainerTitle
          title={ <Link to={ viewLink }>{ account.name || 'Unnamed' }</Link> }
          byline={ account.address } />
        <Balances
          account={ account }
          tokens={ this.props.tokens } />
        { this.props.children }
      </Container>
    );
  }
}