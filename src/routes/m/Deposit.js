import React from 'react';
import { connect } from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import styles from './Deposit.css';
import globalStyle from '../../utils/global.css';
import CommonLayout from '../../layouts/m/CommonLayout';
import { Icon, Tabs, WhiteSpace, Button, List, InputItem, Picker, DatePicker, Toast, Card, ListView } from 'antd-mobile';

import missing from '../../assets/missing.jpg';
import man from '../../assets/man.png';

import { createForm } from 'rc-form';

const TabPane = Tabs.TabPane;

function Deposit({dispatch, form, list, loading}) {

  const { getFieldProps } = form;

  function submit() {
    form.validateFields((error, data) => {
      if (!data.name) {
        Toast.info('请填写逝者姓名！');
      }
      else if (!data.gender) {
        Toast.info('请选择逝者性别！');
      }
      else if (!data.operator) {
        Toast.info('请填写经办人姓名！');
      }
      else if (!data.phone) {
        Toast.info('请填写经办人手机号码！');
      }
      else {
        dispatch({
          type: 'deposit/submit',
          payload: {...data}
        });
      }
    });
  }

  function listLoaded() {
    if (window.scrollY < 500) {
      window.scrollTo(0, 1000);
    }
  }
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  const row = (rowData, sectionID, rowID) => {
    return (
      <Card key={rowID} full>
        <Card.Header title={rowData.name} thumb={man} extra={<span>{rowData.gender}&nbsp;{rowData.age}岁</span>} />
        <Card.Body>
          <div onLoad={listLoaded}>先人骨灰安放于&nbsp;<b>{rowData.position} 柜位</b>&nbsp;</div>
        </Card.Body>
        <Card.Footer content={<span>将于 <b> {rowData.expired} </b> 到期，请及时缴费。</span>} />
      </Card>
    );
  };
  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1.id != row2.id
  }).cloneWithRows(list);

  return (
    <CommonLayout headerImage={missing}>
      <div className={styles.normal}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="寄存查询" key="1">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', height: '6rem' }}>

              <List renderHeader={() => '输入查询条件'} style={{width: '100%'}}>
                <InputItem {...getFieldProps('name')} clear placeholder="请填写逝者姓名" autoFocus>逝者姓名</InputItem>
              </List>
              <List style={{width: '100%'}} >
                <Picker data={[{value: '1', label: '男'}, {value: '2', label: '女'}]} cols={1}
                  {...getFieldProps('gender', {initialValue: '1'})}
                  extra="请选择逝者性别" >
                  <List.Item arrow="horizontal">逝者性别</List.Item>
                </Picker>
              </List>
              <List style={{width: '100%'}}>
                <InputItem {...getFieldProps('operator')} clear placeholder="请填经办人姓名" autoFocus>经办人</InputItem>
              </List>
              <List style={{width: '100%'}}>
                <InputItem {...getFieldProps('phone')} clear placeholder="请填写经办人手机" autoFocus>手机号码</InputItem>
              </List>
              <Button className="btn" type="primary" style={{width: '100%', borderRadius: 0}}
                onClick={submit} icon="search" loading={loading} >查询
              </Button>

            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />

        <ListView pageSize={4} dataSource={dataSource} renderRow={row} useBodyScroll
                  renderFooter={() => (
                    <div style={{ padding: 30, textAlign: 'center' }}>
                      <WhiteSpace size="xl" />
                      <WhiteSpace size="xl" />
                      没有更多了，
                      <a onClick={scrollToTop} className={globalStyle.a_link}>重新查找</a>？
                    </div>
                  )}
                  renderSeparator={(sectionID, rowID) => (
                    <div key={`${sectionID}-${rowID}`} style={{height: 20}}></div>
                  )}
                  renderHeader={() => <span>查找结果</span>}
        />

      </div>
    </CommonLayout>
  );

}


function mapStateToProps(state) {
  const {list} = state.deposit;
  return {
    list,
    loading: state.loading.models.deposit
  };
}

export default connect(mapStateToProps)(createForm()(Deposit));
