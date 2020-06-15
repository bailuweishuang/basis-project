import { useState } from 'react';
import { Menu } from 'antd';
import mtchRouters from '@/router/mtch';
import { useHistory, Route } from 'react-router-dom';

const { SubMenu } = Menu;
// 菜单列表
function menus() {
  const urlHash = window.location.hash.split('/');
  urlHash.splice(0, 1);
  const [current, setCurrent] = useState([`/${urlHash.join('/')}`]);
  let history = useHistory();
  const getChildrenEnum = (obj, Ppath) => {
    const { title, path, children } = obj;
    let result;
    if (children) {
      result = (
        <SubMenu title={title} key={Ppath ? `${Ppath}${path}` : `${path}`}>
          {children.map((item) => {
            if (item.children) {
              return getChildrenEnum(item, Ppath ? `${Ppath}${path}` : path);
            } else {
              const childrenResult = (
                <Menu.Item
                  key={Ppath ? `${Ppath}${path}${item.path}` : `${path}${item.path}`}
                  onClick={() => {
                    history.push(Ppath ? `${Ppath}${path}${item.path}` : `${path}${item.path}`);
                  }}>
                  {item.title}
                </Menu.Item>
              );
              return childrenResult;
            }
          })}
        </SubMenu>
      );
    } else {
      result = (
        <Menu.Item
          key={path}
          onClick={() => {
            history.push(`${path}`);
          }}>
          {title}
        </Menu.Item>
      );
    }
    return result;
  };
  // 路由列表
  const getRouterMenus = (obj, Ppath) => {
    const { path, component, children } = obj;
    let routerNewR;
    if (children) {
      routerNewR = children.map((item) => {
        if (item.children) {
          return getRouterMenus(item, Ppath ? `${Ppath}${path}` : path);
        } else {
          const routerNew = (
            <Route
              exact
              key={Ppath ? `${Ppath}${path}${item.path}` : `${path}${item.path}`}
              path={Ppath ? `${Ppath}${path}${item.path}` : `${path}${item.path}`}
              component={item.component ? item.component : null}
            />
          );
          return routerNew;
        }
      });
    } else {
      routerNewR = <Route exact key={path} path={path} component={component ? component : null} />;
    }
    return routerNewR;
  };
  return (
    <div>
      <Menu
        theme="dark"
        onClick={(e) => {
          const { key } = e;
          setCurrent([key]);
        }}
        selectedKeys={current}
        mode="horizontal">
        {mtchRouters.map((element) => {
          const result = getChildrenEnum(element);
          return result;
        })}
      </Menu>
      {mtchRouters.map((element) => {
        const routerResult = getRouterMenus(element);
        return routerResult;
      })}
    </div>
  );
}
export default menus;
