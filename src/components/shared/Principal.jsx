import PropTypes from 'prop-types';
import styles from './Principal.module.css';
import Header from './Header';

function Principal({ children }) {
    return (
        <div className={styles.principal}>
            {/* <div className={styles.aside}>
                <Header />
            </div> */}
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}

Principal.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Principal;