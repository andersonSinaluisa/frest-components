import React from 'react';
import Navbar from './index';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  args: {
      isSearchable:false,
      optionsMenuProfile:[
        {
          children: ()=><>Perfil</>,
          onClick: ()=>{}
        },
      ],
      notification:[
        {
          leftIcon:()=><></>,
          title:'titulo',
          subtitle:'dsada',
          isNew:false
        }
      ],
      title:'Notificaciones',
      viewMoreText:'Ver más'

  },
};

export const Default = {
  args: {
    isSearchable:false,
    optionsMenuProfile:[
      {
        children: ()=><>Perfil</>,
        onClick: ()=>{}
      },
    ],
    notification:[
      {
        leftIcon:()=><></>,
        title:'titulo',
        subtitle:'dsada',
        isNew:false
      }
    ],
    title:'Notificaciones',
    viewMoreText:'Ver más'

  }
}




export const Primary = {
  args: {
    isSearchable:false,
    optionsMenuProfile:[
      {
        children: ()=><>Perfil</>,
        onClick: ()=>{}
      },
    ],
    notification:[
      {
        leftIcon:()=><></>,
        title:'titulo',
        subtitle:'dsada',
        isNew:false
      }
    ],
    title:'Notificaciones',
    viewMoreText:'Ver más',
    color:'primary'

  }
}


export const Success = {
  args: {
    isSearchable:false,
    optionsMenuProfile:[
      {
        children: ()=><>Perfil</>,
        onClick: ()=>{}
      },
    ],
    notification:[
      {
        leftIcon:()=><></>,
        title:'titulo',
        subtitle:'dsada',
        isNew:false
      }
    ],
    title:'Notificaciones',
    viewMoreText:'Ver más',
    color:'success'

  }
}

export const Danger = {
  args: {
    isSearchable:false,
    optionsMenuProfile:[
      {
        children: ()=><>Perfil</>,
        onClick: ()=>{}
      },
    ],
    notification:[
      {
        leftIcon:()=><></>,
        title:'titulo',
        subtitle:'dsada',
        isNew:false
      }
    ],
    title:'Notificaciones',
    viewMoreText:'Ver más',
    color:'danger'

  }
}
