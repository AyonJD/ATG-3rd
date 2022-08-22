import React from 'react';

const Spinner = () => {
    return (
        <div className="loader d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;