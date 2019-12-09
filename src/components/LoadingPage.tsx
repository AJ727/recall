import * as React from 'react';

const LoadingPage: React.FC = (): JSX.Element => (
    <div className="loader">
        <img className="loader__image" src="/images/loader.gif" />
    </div>
);

export default LoadingPage;