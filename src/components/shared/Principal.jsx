import PropTypes from 'prop-types';

function Principal({ children }) {
    return (
        <div>
            <h1>Principal</h1>
            {children}
        </div>
    );
}

Principal.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Principal;