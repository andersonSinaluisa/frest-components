import React from 'react';
import Sidebar from './index';
import { fn } from '@storybook/test';


const ComponentShowcase = (args) => (
    <div style={{width: '100vw',height:'100vh',display:'flex',justifyContent:'center', alignContent:'center',justifyItems:'center',
    alignItems:'center'}}>
        <div style={{width: '300px',height:'100vh',display:'flex',justifyContent:'center', alignContent:'center',justifyItems:'center',
    alignItems:'center'}}>
            <Sidebar {...args} />
        </div>
    </div>
)

export default {
    title: 'Components/Sidebar',
    component: (args) =><ComponentShowcase {...args} />,

    
};

export const Default = {
    args: {
        icon: <p></p>,
        appName: 'My App',
        items: [
            {
                title: 'Dashboard',
                onClick: fn(),
            },
            {
                title: 'Users',
                onClick: fn(),
            },
            {
                title: 'Settings',
                onClick: fn(),
            }
        ]
    },
}