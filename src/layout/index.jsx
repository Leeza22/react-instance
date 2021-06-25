import React, { memo, Suspense } from 'react'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import routes from '@/router'

import NavList from './Nav'
import Loading from './Loading'
import Home from '@/pages/home'
function FadingRoute({ component: Component, ...rest }) {
  console.log(rest)
  return (
    <Route
      {...rest}
      render={routeProps => (
        <Component {...routeProps} />
      )}
    />
  );
}
// routerprops
// history: {length: 9, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
// location: {pathname: "/", search: "", hash: "", state: undefined}
// match: {path: "/", url: "/", isExact: true, params: {…}}
// staticContext: undefined

export default memo(function index() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Router>
        <NavList />
        {/* {renderRoutes(routes)} */}
        <Switch>
          {/* <Route path="/counter" exact component={Counter}></Route>
          <Route path="/home" exact component={Home}></Route> */}
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </Suspense>
  )
})

// import { Layout, Menu, Breadcrumb } from 'antd';
// import {
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

// class SiderDemo extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   onCollapse = collapsed => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };

//   render() {
//     const { collapsed } = this.state;
//     return (
//       <Layout style={{ minHeight: '100vh' }}>
//         <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
//           <div className="logo" />
//           <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//             <Menu.Item key="1" icon={<PieChartOutlined />}>
//               Option 1
//             </Menu.Item>
//             <Menu.Item key="2" icon={<DesktopOutlined />}>
//               Option 2
//             </Menu.Item>
//             <SubMenu key="sub1" icon={<UserOutlined />} title="User">
//               <Menu.Item key="3">Tom</Menu.Item>
//               <Menu.Item key="4">Bill</Menu.Item>
//               <Menu.Item key="5">Alex</Menu.Item>
//             </SubMenu>
//             <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
//               <Menu.Item key="6">Team 1</Menu.Item>
//               <Menu.Item key="8">Team 2</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="9" icon={<FileOutlined />}>
//               Files
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout className="site-layout">
//           <Header className="site-layout-background" style={{ padding: 0 }} />
//           <Content style={{ margin: '0 16px' }}>
//             <Breadcrumb style={{ margin: '16px 0' }}>
//               <Breadcrumb.Item>User</Breadcrumb.Item>
//               <Breadcrumb.Item>Bill</Breadcrumb.Item>
//             </Breadcrumb>
//             <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//               Bill is a cat.
//             </div>
//           </Content>
//           <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//         </Layout>
//       </Layout>
//     );
//   }
// }

// export default SiderDemo
