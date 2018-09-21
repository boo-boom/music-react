import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';        // 过场组件
 
const LoadableComponent = Loadable({
  loader: () => import('./'),           // 当前文件下的组件（index.js）
  // loading: Loading,                     // 过场组件

  // 使用jsx语法，需要引入react
  loading() {
      return (
          <div style={{fontSize:"30px"}}>加载中...</div>
      )
  }
});
 
export default () => <LoadableComponent/>;