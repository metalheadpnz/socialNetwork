// import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import {reRender} from "./render";


reRender (state);
// state.MainContentData.ProfileData.AddPostFormData('текст');






serviceWorker.unregister();
