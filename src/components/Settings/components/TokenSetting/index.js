import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { setToken } from '../../../../services/actions/changeToken';

function TokenSetting() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('Token #1');

  // Dispatch setToken action
  const handleSelect = (eventKey) => {
    dispatch(setToken(eventKey));
  };

  return (
    <>
      <NavDropdown
        id="nav-dropdown-dark-example"
        title={title}
        menuVariant="dark"
        onSelect={(event) => handleSelect(event)}
      >
        <NavDropdown.Item
          eventKey="1c539d252c8d0a7349c82e59ba7012c7a"
          name="Toke #1"
          onClick={() => setTitle('Token #1')}
        >
          Token #1
        </NavDropdown.Item>
        <NavDropdown.Item
          eventKey="10e13746a0fb36c8875e6d93887a79fee"
          name="Toke #2"
          onClick={() => setTitle('Token #2')}
        >
          Token #2
        </NavDropdown.Item>
        <NavDropdown.Item
          eventKey="18463347e789cd1ef9b0580044a41bc56"
          name="Toke #3"
          onClick={() => setTitle('Token #3')}
        >
          Token #3
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
}

export default TokenSetting;
