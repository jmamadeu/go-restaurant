import { Component } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import { Container } from './styles';


class Header extends Component {
  render() {
    const { openModal } = this.props;

    return (
      <Container>
        <header>
          <img src={Logo} alt="GoRestaurant" />
          <nav>
            <div>
              <button
                type="button"
                onClick={openModal}
              >
                <div className="text">Novo Prato</div>
                <div className="icon">
                  <FiPlusSquare size={24} />
                </div>
              </button>
            </div>
          </nav>
        </header>
      </Container>
    )
  }
};

export default Header;
