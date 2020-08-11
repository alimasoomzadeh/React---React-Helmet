
import React from 'react';
import { Helmet } from 'react-helmet';

export default () => {
    return (
        <div>
            <Helmet>
                <title>child title</title>
            </Helmet>
            <h1>Child Component!</h1>
        </div>
    )
}
