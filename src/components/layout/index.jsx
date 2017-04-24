// Third-party dependencies
import React, {Component} from 'react';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import SiteHeader, {menuItem} from 'components/site-header';
import SiteFooter from 'components/site-footer';

// Component
class Layout extends Component {
  render() {
    const {Link} = this.props.router;
    const MenuItem = styled(Link)`${menuItem}`;

    return (
      <div>
        <SiteHeader>
          <nav role="navigation">
            <MenuItem to="/">
              Home
            </MenuItem>
            <MenuItem to="/does-not-exist">
              Not found
            </MenuItem>
          </nav>
        </SiteHeader>
        {this.props.children}
        <SiteFooter>
          The end
        </SiteFooter>
      </div>
    );
  }
}

// Property validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({
    Link: PropTypes.func.isRequired
  }).isRequired
};

// Exports
export default inject('router')(Layout);