import PropTypes from 'prop-types';

function Modal({ children }) {
    return (
        <div>
            <h1>Modal</h1>
            {children}
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Modal;