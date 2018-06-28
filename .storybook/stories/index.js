import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {SameGenreToolbar} from '../../src/components/SameGenreToolbar'

storiesOf('SameGenreToolbar', module)
  .add('Just toolbar', () => (
    <SameGenreToolbar/>
  ))