import React from 'react'
import { Header, Footer } from '../'

class Layout extends React.Component {

  componentDidMount () {
    document.title = this.props.title;
  }

  render () {
    return (
      <div>
        <Header />
        <div className="main-content">
          { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Layout
