import React from 'react';
import { connect } from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import styles from './Hall.css';
import globalStyle from '../../utils/global.css';
import CommonLayout from '../../layouts/m/CommonLayout';
import { Icon, Tabs, WhiteSpace, Button, List, InputItem, Picker, DatePicker, Toast, Card, ListView } from 'antd-mobile';

import missing from '../../assets/missing.jpg';
import man from '../../assets/man.png';

import { createForm } from 'rc-form';

const TabPane = Tabs.TabPane;

function Hall({dispatch, form, list, loading}) {

  const { getFieldProps } = form;

  function submit() {
    form.validateFields((error, data) => {
      if (!data.name) {
        Toast.info('请填写姓名！');
      }
      else if (!data.gender) {
        Toast.info('请选择性别！');
      }
      else if (!data.date) {
        Toast.info('请选择告别日期！');
      }
      else {
        dispatch({
          type: 'hall/submit',
          payload: {...data}
        });
      }
    });
  }

  function imageLoaded() {
    if (window.scrollY < 500) {
      window.scrollTo(0, 750);
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
          <div>告别仪式于<b>{rowData.date}</b>在<b>{rowData.hall}</b>举行</div>
        </Card.Body>
        <img src={rowData.image} style={{width: '100%'}} onLoad={imageLoaded} />
      </Card>
    );
  };
  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1.id != row2.id
  }).cloneWithRows(list);
console.log(globalStyle);
  return (
    <CommonLayout headerImage={missing}>
      <div className={styles.normal}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="礼厅查询" key="1">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', height: '5rem' }}>

              <List renderHeader={() => '输入查询条件'} style={{width: '100%'}}>
                <InputItem {...getFieldProps('name')} clear placeholder="请填写逝者姓名" autoFocus>姓名</InputItem>
              </List>
              <List style={{width: '100%'}} >
                <Picker data={[{value: '1', label: '男'}, {value: '2', label: '女'}]} cols={1}
                  {...getFieldProps('gender', {initialValue: '1'})}
                  extra="请选择逝者性别" >
                  <List.Item arrow="horizontal">性别</List.Item>
                </Picker>
              </List>
              <List style={{width: '100%'}}>
                <DatePicker mode="date" title="日期" extra="请选择告别日期"
                  {...getFieldProps('date', {initialValue: moment(new Date(), 'YYYY-MM-DD Z').utcOffset(8)})}
                  minDate={moment('2015-01-01 +0800', 'YYYY-MM-DD Z').utcOffset(8)}
                  maxDate={moment(new Date(), 'YYYY-MM-DD Z').utcOffset(8).add(90, 'day')} >
                  <List.Item arrow="horizontal">日期</List.Item>
                </DatePicker>
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
// <Icon type={require('../../assets/icons/homepage/chat.svg')}> </Icon> TODO: third svg cannot be achieved

function mapStateToProps(state) {
  const {list} = state.hall;
  return {
    list,
    loading: state.loading.models.hall
  };
}

export default connect(mapStateToProps)(createForm()(Hall));
