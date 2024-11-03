
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function BasicDemo({value}) {
    return (
        <div className="card w-80 mb-5">
            <ProgressBar value={value} className='custom-bar'></ProgressBar>
        </div>
    );
}
        