import React from 'react';

const AppFooter = () => {

    return (
        <div className="layout-footer">
            <span className="footer-text-left">
                <img alt="Logo" src="assets/layout/images/logo-dark.png" />
            </span>
            <span className="footer-text-right">
                <button className="p-link"><i className="pi pi-facebook"></i></button>
                <button className="p-link"><i className="pi pi-twitter"></i></button>
                <button className="p-link"><i className="pi pi-github"></i></button>
            </span>
        </div>
    );
}

export default AppFooter;
