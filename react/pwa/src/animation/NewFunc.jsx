import React from 'react';

export default function NewFunc(props) {
    const c = {
        title: `New Functional Component`
    }
    return (
        <div>
            <h1>
                {c.title}
            </h1>
        </div>
    );
}
