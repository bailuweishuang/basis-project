import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import mtchRouters from '@/router/mtch';
import { useHistory, Route } from 'react-router-dom';

const { SubMenu } = Menu;
// 菜单列表
function menus() {
  const urlHash = window.location.hash.split('/');
  urlHash.splice(0, 1);
  let urlHasharr = [];
  urlHash.reduce((prev, item) => {
    urlHasharr.push(`${prev}/${item}`);
    return `${prev}/${item}`;
  }, '');
  const [current, setCurrent] = useState(urlHasharr);
  let history = useHistory();
  const getChildrenEnum = (obj, Ppath) => {
    const { title, path, children } = obj;
    let result;
    if (children && children.length > 0) {
      const hiddenArray = children.filter((item) => item.hidden);
      if (hiddenArray.length === children.length) {
        result = result = (
          <Menu.Item
            key={Ppath ? `${Ppath}${path}` : `${path}`}
            onClick={() => {
              history.push(Ppath ? `${Ppath}${path}` : `${path}`);
            }}>
            {title}
          </Menu.Item>
        );
      } else {
        result = (
          <SubMenu title={title} key={Ppath ? `${Ppath}${path}` : `${path}`}>
            {children.map((item) => {
              if (item.children && !item.hidden) {
                return getChildrenEnum(item, Ppath ? `${Ppath}${path}` : path);
              } else {
                const childrenResult = !item.hidden ? (
                  <Menu.Item
                    key={Ppath ? `${Ppath}${path}${item.path}` : `${path}${item.path}`}
                    onClick={() => {
                      history.push(Ppath ? `${Ppath}${path}${item.path}` : `${path}${item.path}`);
                    }}>
                    {item.title}
                  </Menu.Item>
                ) : null;
                return childrenResult;
              }
            })}
          </SubMenu>
        );
      }
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
          return [
            <Route exact key={path} path={path} component={component ? component : null} />,
            <Route
              exact
              key={Ppath ? `${Ppath}${path}${item.path}` : `${path}${item.path}`}
              path={Ppath ? `${Ppath}${path}${item.path}` : `${path}${item.path}`}
              component={item.component ? item.component : null}
            />,
            getRouterMenus(item, Ppath ? `${Ppath}${path}` : path),
          ];
        } else {
          const routerNew = [
            <Route exact key={path} path={path} component={component ? component : null} />,
            <Route
              exact
              key={Ppath ? `${Ppath}${path}${item.path}` : `${path}${item.path}`}
              path={Ppath ? `${Ppath}${path}${item.path}` : `${path}${item.path}`}
              component={item.component ? item.component : null}
            />,
          ];
          return routerNew;
        }
      });
    } else {
      routerNewR = <Route exact key={path} path={path} component={component ? component : null} />;
    }
    return routerNewR;
  };
  useEffect(() => {
    setCurrent(urlHasharr);
  }, urlHash);
  return (
    <div>
      <Menu
        theme="dark"
        onClick={(e) => {
          const { keyPath } = e;
          setCurrent([keyPath]);
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
