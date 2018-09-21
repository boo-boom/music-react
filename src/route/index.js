import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import TabBar from './../components/TabBar';
import Home from './../views/home/loadable';
import PlayDetail from './../views/playDeteil/loadable';
import NavVideo from './../views/navVideo/loadable';
import My from './../views/my/loadable';
import Friend from './../views/friend/loadable';
import Player from './../views/player/loadable';
// import PageLoad from './../components/PageLoad';

const GlobalRoutes = () => (
    <BrowserRouter>
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/playDeteil/:id" component={PlayDetail}/>
                <Route path="/navVideo" component={NavVideo}/>
                <Route path="/my" component={My}/>
                <Route path="/friend" component={Friend}/>
                <Route exact path="/player" component={Player}/>
                <Route path="/player/:id" component={Player}/>
                {/* 匹配不到路由显示组件 */}
                {/* <Route component={PageLoad}/> */}
                {/* 匹配不到路由跳转路由 */}
                <Redirect to='/'></Redirect>
            </Switch>
            <TabBar/>
        </Fragment>
    </BrowserRouter>
);

export default GlobalRoutes;