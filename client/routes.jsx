import React from 'react';
import { mount } from 'react-mounter'

import About from './components/About';
import MainLayout from './layouts/MainLayout';
import ResolutionDetails from './components/resolutions/ResolutionDetails';
import Resolutions from './components/resolutions/Resolutions';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
        content: (<Resolutions />)
      });
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
        content: (<About />)
      });
  }
});

FlowRouter.route('/resolutions/:id', {
  action(params) {
    mount(MainLayout, {
        content: (<ResolutionDetails id={params.id}/>)
      });
  }
});
