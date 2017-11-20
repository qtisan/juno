import React from 'react';
import { connect } from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import styles from './Consume.css';
import globalStyle from '../../utils/global.css';
import CommonLayout from '../../layouts/m/CommonLayout';
import { Icon, Tabs, WhiteSpace, Button, List, InputItem, Picker, DatePicker, Toast, Card, ListView } from 'antd-mobile';

import missing from '../../assets/consume.jpg';

import { createForm } from 'rc-form';

const TabPane = Tabs.TabPane;
const Item = List.Item;
const Brief = Item.Brief;

const yearData = [], currentYear = new Date().getFullYear();
for (let y = 2000; y <= currentYear; y ++) {
  yearData.push({value: y, label: y + '年'});
}

function Consume({dispatch, form, goods, payroll, exchange, loading}) {

  const { getFieldProps } = form;

  function submit() {
    form.validateFields((error, data) => {
      if (!data.name) {
        Toast.info('请填写逝者姓名！');
      }
      else if (!data.cremation) {
        Toast.info('请填写火化证号！');
      }
      else if (!data.year) {
        Toast.info('请选择年份！');
      }
      else {
        dispatch({
          type: 'consume/submit',
          payload: {...data}
        });
      }
    });
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  const row = (rowData, sectionID, rowID) => {
    return (
      <List key={rowID}>
        <Item extra={`￥${rowData.price} x ${rowData.count}`}>{rowData.title}<span style={{fontSize: "0.8em", color: '#999', marginLeft: 30}}>{rowData.date}</span></Item>
      </List>
    );
  };
  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1.id != row2.id
  }).cloneWithRows(goods);

  return (
    <CommonLayout headerImage={missing}>
      <div className={styles.normal}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="消费清单查询" key="1">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', height: '5rem' }}>

              <List renderHeader={() => '输入查询条件'} style={{width: '100%'}}>
                <InputItem {...getFieldProps('name')} clear placeholder="请填写逝者姓名" autoFocus>姓名</InputItem>
              </List>
              <List style={{width: '100%'}}>
                <InputItem {...getFieldProps('cremation')} clear placeholder="请填写火化证号" autoFocus>火化证号</InputItem>
              </List>
              <List style={{width: '100%'}} >
                <Picker data={yearData} cols={1}
                  {...getFieldProps('year', {initialValue: [currentYear]})}
                        extra="请选择告别年份" >
                  <List.Item arrow="horizontal">告别年份</List.Item>
                </Picker>
              </List>
              <WhiteSpace />
              <Button className="btn" type="primary" style={{width: '100%', borderRadius: 0}}
                onClick={submit} icon="search" loading={loading} >查询
              </Button>

            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />

        <ListView pageSize={4} dataSource={dataSource} renderRow={row} useBodyScroll
                  renderHeader={() => <span>消费清单</span>}
        />
        <div style={{ textAlign: 'center' }} className={globalStyle.no_padding}>
          <List style={{width: '100%'}} renderHeader={() => '合计'} >
            <Item arrow="horizontal" multipleLine>
              实付：￥{exchange} <Brief>原价：￥{payroll}，优惠：￥{(payroll-exchange).toFixed(2)}</Brief>
            </Item>
          </List>
          <WhiteSpace size="xl" />
          <a onClick={scrollToTop} className={globalStyle.a_link}>重新查找</a>？
        </div>

      </div>
    </CommonLayout>
  );

}

function mapStateToProps(state) {
  const {goods, payroll, exchange} = state.consume;
  return {
    goods, payroll, exchange,
    loading: state.loading.models.consume
  };
}

export default connect(mapStateToProps)(createForm()(Consume));
