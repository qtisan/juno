
import React from 'react';
import styles from './CommonLayout.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function CommonLayout({ children, title, menus }) {

  const findMenuPredicate = (key) => (m) => m.key == key;
  const path = location.hash.split('#')[1].split('?')[0];
  console.log(`change path to ${path}`);
  const currentMenuItems = path.split('/');
  const currentMenu = menus.find(findMenuPredicate(currentMenuItems[1] || 'index_page'));
  const breadcrumb = [ {name: currentMenu.name, link: `#/${currentMenu.key}`} ];
  let currentSubMenu;
  if (currentMenuItems[2]) {
    let {name, key} = currentSubMenu = currentMenu.subs.find(findMenuPredicate(currentMenuItems[2]));
    breadcrumb.push({ name: name, link: `#/${currentMenu.key}/${key}` });
  }
  if (currentMenuItems[3]) {
    let {name, key} = currentSubMenu.subs.find(findMenuPredicate(currentMenuItems[3]));
    breadcrumb.push({ name: name, link: `#/${currentMenu.key}/${currentSubMenu.key}/${key}` });
  }

  function createSubMenus(currentMenuItems) {
    let subMenus = currentMenu.subs;
    if (!subMenus.length) {
      return '';
    }
    return <Sider className={styles.sider_container}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[currentMenuItems[3] || currentMenuItems[2]]}
        defaultOpenKeys={[currentMenuItems[2]]}
        className={styles.sider_menu}
      >
        {
          subMenus.map(({name, key, icon, subs}) => {
            const showIcon = (ico) => ico && <Icon type={ico} />;
            const showMenuItem = (n, k, i, p) =>
              <Menu.Item key={k}><a href={`#/${p}/${k}`}>{showIcon(i)}{n}</a></Menu.Item>;
            if (!subs.length) {
              return showMenuItem(name, key, icon, currentMenu.key);
            }
            else {
              let parent = key;
              return <SubMenu key={key} title={<span>{showIcon(icon)}{name}</span>}>
                {subs.map(({name, key, icon}) => showMenuItem(name, key, icon, currentMenu.key + '/' + parent))}
              </SubMenu>;
            }
          })
        }
      </Menu>
    </Sider>;
  }

  return (
    <Layout className={styles.normal}>
      <Header className="header">
        <div className={styles.header_logo}> {title} </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[currentMenuItems[1]]}
        >
          {
            menus.map(({name, key, icon}) =>
              <Menu.Item className={styles.top_menu_item} key={key}>
                <a href={`#/${key}`}>{icon && <Icon type={icon} />}{name}</a>
              </Menu.Item>)
          }
        </Menu>
      </Header>
      <Layout>
        {createSubMenus(currentMenuItems)}
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            {breadcrumb.map(({name, link}) => <Breadcrumb.Item><a href={link}>{name}</a></Breadcrumb.Item>)}
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default CommonLayout;
