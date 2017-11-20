/**
 * Created by qtisa on 2017/7/31.
 */
import React from 'react';
import { connect } from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import styles from './index.css';
import globalStyle from '../../utils/global.css';
import Wrapper from './Wrapper';

import { Button, Table, Row, Col, Form, Input, Icon, Modal, Tabs, Cascader } from 'antd';

import Divider from '../../components/widget/Divider';
import WhiteSpace from '../../components/widget/WhiteSpace';
import NumericInput from '../../components/form/NumricInput';
import Title from '../../components/typography/Title';
import Quote from '../../components/container/Quote';

import { createForm } from 'rc-form';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const TextArea = Input.TextArea;

function RandomDataGenerator({dispatch, form,
  fields, addFieldModalVisible, selectedFieldType, fieldPreviewPrams, fieldPreviewResult, customerPreviewResult,
  currentFieldType,
  loading}) {

  function submit() {
    dispatch({
      type: 'random_data_generator/submit',
      payload: {}
    });
  }
  function showAddFieldModal() {
    dispatch({
      type: 'random_data_generator/modal',
      payload: true
    });
  }
  function hideAddFieldModal() {
    dispatch({
      type: 'random_data_generator/modal',
      payload: false
    });
  }
  function tabChange(index) {
    dispatch({
      type: 'random_data_generator/random_type_change',
      payload: index
    });
  }
  function changeFieldType(value, selectedOptions) {
    dispatch({
      type: 'random_data_generator/field_type_change',
      payload: selectedOptions[1]
    });
  }
  function getFieldParamsFromForm(fromForm) {
    let fieldPreviewPrams = {};
    Object.entries(fromForm).forEach(([k, v]) => {
      if (k.indexOf('param_') != -1 && v) {
        fieldPreviewPrams[k] = v;
      }
    });
    return Object.values(fieldPreviewPrams);
  }
  function reloadPreview() {
    form.validateFields((error, value) => {
      dispatch({
        type: 'random_data_generator/reload_preview',
        payload: getFieldParamsFromForm(value)
      });
    });
  }
  function addField() {
    form.validateFields((error, value) => {
      const fieldName = value.fieldName;
      if (!fieldName) {
        alert('字段名不能为空！');
      }
      else if (fields.find(f => f.key == fieldName)) {
        alert('该字段已存在！');
      }
      else {
        let fieldRegular, params;
        if (currentFieldType == 'customer') {
          fieldRegular = value.customerFunction.substr(0, 100) + '[...]';
        }
        else {
          params = getFieldParamsFromForm(value);
          fieldRegular = `${currentFieldType}( ${params.join(', ')} )`;
        }
        dispatch({
          type: 'random_data_generator/add_field',
          payload: {
            fieldType: currentFieldType,
            key: fieldName,
            fieldName: fieldName,
            fieldRegular: fieldRegular,
            params: params,
            func: value.customerFunction
          }
        });
      }
    });
  }
  function generate() {
    form.validateFields((error, data) => {
      console.log(data);
    });
  }

  const { getFieldDecorator } = form;
  const columns = [
    {title: '字段名', dataIndex: 'fieldName', key: 'fieldName'},
    {title: '类别', dataIndex: 'fieldType', key: 'fieldType'},
    {title: '规则', dataIndex: 'fieldRegular', key: 'fieldRegular'},
    {title: '操作', key: 'action', render: (text, record) => (
      <span>
        <a >修改</a>
        <span className="ant-divider"> </span>
        <a >删除</a>
      </span>
    )}
  ];
  const fieldTypeOptions = [
    {
      value: 'basic',
      label: 'Basic',
      children: [
        { value: 'boolean', label: 'Boolean', params: ['min', 'max', 'current'] },
        { value: 'natural', label: 'Natural', params: ['min', 'max'] },
        { value: 'integer', label: 'Integer', params: ['min', 'max'] },
        { value: 'float', label: 'Float', params: ['min', 'max', 'dmin', 'dmax'] },
        { value: 'character', label: 'Character', params: ['pool'] },
        { value: 'string', label: 'String', params: ['pool', 'min', 'max'] },
        { value: 'range', label: 'Range', params: ['start', 'stop', 'step'] }
      ]
    }, {
      value: 'date',
      label: 'Date',
      children: [
        { value: 'date', label: 'Date', params: ['format'] },
        { value: 'time', label: 'Time', params: ['format'] },
        { value: 'datetime', label: 'DateTime', params: ['format'] },
        { value: 'now', label: 'Now', params: ['unit', 'format'] }
      ]
    }, {
      value: 'image',
      label: 'Image',
      children: [
        { value: 'image', label: 'Image', params: ['size', 'background', 'foreground', 'format', 'text'] },
        { value: 'dataImage', label: 'DataImage', params: ['size', 'text'] }
      ]
    }, {
      value: 'color',
      label: 'Color',
      children: [
        { value: 'hex', label: 'Hex', params: [] },
        { value: 'rgb', label: 'RGB', params: [] },
        { value: 'rgba', label: 'RGBA', params: [] },
        { value: 'hsl', label: 'HSL', params: [] }
      ]
    }, {
      value: 'text',
      label: 'Text',
      children: [
        { value: 'paragraph', label: 'Paragraph', params: ['min', 'max'] },
        { value: 'cparagraph', label: 'CParagraph', params: ['min', 'max'] },
        { value: 'sentence', label: 'Sentence', params: ['min', 'max'] },
        { value: 'csentence', label: 'CSentence', params: ['min', 'max'] },
        { value: 'word', label: 'Word', params: ['min', 'max'] },
        { value: 'cword', label: 'CWord', params: ['pool', 'min', 'max'] },
        { value: 'title', label: 'Title', params: ['min', 'max'] },
        { value: 'ctitle', label: 'CTitle', params: ['min', 'max'] }
      ]
    }, {
      value: 'name',
      label: 'Name',
      children: [
        { value: 'first', label: 'First', params: [] },
        { value: 'last', label: 'Last', params: [] },
        { value: 'name', label: 'Name', params: ['middle'] },
        { value: 'cfirst', label: 'CFirst', params: [] },
        { value: 'clast', label: 'CLast', params: [] },
        { value: 'cname', label: 'CName', params: [] }
      ]
    }, {
      value: 'web',
      label: 'Web',
      children: [
        { value: 'url', label: 'Url', params: ['protocol', 'host'] },
        { value: 'protocol', label: 'Protocol', params: [] },
        { value: 'domain', label: 'Domain', params: [] },
        { value: 'tld', label: 'TLD', params: [] },
        { value: 'email', label: 'Email', params: ['domain'] },
        { value: 'ip', label: 'IP', params: [] }
      ]
    }, {
      value: 'address',
      label: 'Address',
      children: [
        { value: 'region', label: 'Region', params: [] },
        { value: 'province', label: 'Province', params: [] },
        { value: 'city', label: 'City', params: ['prefix'] },
        { value: 'county', label: 'County', params: ['prefix'] },
        { value: 'zip', label: 'Zip', params: [] }
      ]
    }, {
      value: 'miscellaneous',
      label: 'Miscellaneous',
      children: [
        { value: 'guid', label: 'Guid', params: [] },
        { value: 'id', label: 'ID', params: [] },
        { value: 'increment', label: 'Increment', params: ['step'] }
      ]
    }
  ];

  return (
    <Wrapper>
      <div className={styles.rdg_container}>
        <Row style={{height: '100%'}} gutter={16}>
          <Col span={10} style={{borderRight: 'solid 1px #ccc'}}>
            <Form layout="inline">
              <Row gutter={16}>
                <Col span={18}>
                  <FormItem>
                    {getFieldDecorator('tableName', {
                      rules: [{ required: true, message: '请输入表名!' }]
                    })(
                      <Input size="large" addonBefore={<span><Icon type="schedule" />&nbsp;表名</span>} placeholder="请输入数据库中的表名" />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('recordCount', {
                      rules: [{ required: true, message: 'Please input record count!' }]
                    })(
                      <NumericInput addonBefore={<span><Icon type="info-circle-o" />&nbsp;记录数</span>} placeholder="请输入生成的记录数" />
                    )}
                  </FormItem>
                </Col>
                <Col span={6} style={{textAlign: 'right'}}>
                  <FormItem>
                    <Button type="primary" htmlType="submit" onClick={generate}>生成</Button>
                  </FormItem>
                </Col>
              </Row>
              <WhiteSpace />
              <Row gutter={16}>
                <Col>
                  <Button type="default" onClick={showAddFieldModal}>添加字段</Button>
                  <Modal title="添加字段" wrapClassName="vertical-center-modal"
                    visible={addFieldModalVisible} onOk={addField} onCancel={hideAddFieldModal}
                  >
                    <WhiteSpace size={16} />
                    <Row>
                      {getFieldDecorator('fieldName', {
                        rules: [{ required: true, message: 'Please input record count!' }]
                      })(
                        <Input placeholder="请填写字段名" autoFocus suffix={<Icon type="schedule" />} />
                      )}
                    </Row>
                    <WhiteSpace size={16} />
                    <Row>
                      <Tabs defaultActiveKey="1" size="small" onChange={tabChange}>
                        <TabPane tab="默认规则" key="1">
                          <Title>数据类别</Title>
                          <span style={{color: '#aaa'}}>数据类别说明请参照<a href="https://github.com/nuysoft/Mock/wiki/Mock.Random" target="_blank">Mock.Random</a>方法说明</span>
                          <WhiteSpace size={8} />
                          <div>
                            <Cascader placeholder="请选择类别" options={fieldTypeOptions} style={{width: 200}} allowClear={{false}}
                              onChange={changeFieldType}
                            />
                          </div>
                          <Title>参数</Title>
                          <span style={{color: '#aaa'}}>数据类别说明请参照<a href="https://github.com/nuysoft/Mock/wiki/Mock.Random" target="_blank">Mock.Random</a>方法所需参数</span>
                          <div style={{marginBottom: 10}}>
                            {selectedFieldType.params.length ? '' : <span>无参数</span>}
                            {
                              selectedFieldType.params.map(name =>
                                <Row key={name} style={{marginTop: 10, width: 260}}>
                                  <span>{getFieldDecorator(`param_${name}`)(<Input addonBefore={name} />)}&nbsp;可选</span>
                                </Row>)
                            }
                          </div>
                          <Title attach={<Button type="danger" size="small" onClick={reloadPreview}>刷新</Button>}>预览</Title>
                          <Quote>
                            <a><Icon type="code" />
                              Random.{selectedFieldType.value}(&nbsp;{Object.values(fieldPreviewPrams).join(', ')}&nbsp;)
                            </a>&nbsp;&nbsp;<span>results:</span>
                            <Divider grey />
                            <h2 style={{wordWrap: 'break-word'}}>{fieldPreviewResult}</h2>
                          </Quote>
                        </TabPane>
                        <TabPane tab="自定义规则" key="2">
                          <Title>数据生成方法</Title>
                          <span style={{color: '#aaa'}}>用function定义的方法，返回值为生成的数据，可使用<a>Random.xxx</a>方法</span>
                          {getFieldDecorator('customerFunction')(<Input placeholder={'function random() {\n\treturn \'姓名：\' + Random.name();\n}'} type="textarea" rows={4} />)}
                          <Title attach={<Button type="danger" size="small" onClick={reloadPreview}>刷新</Button>}>预览</Title>
                          <Quote>
                            <a><Icon type="code" />&nbsp;random()</a>>&nbsp;&nbsp;<span>results:</span>
                            <Divider grey />
                            <h2 style={{wordWrap: 'break-word'}}>{customerPreviewResult}</h2>
                          </Quote>
                        </TabPane>
                      </Tabs>
                    </Row>
                    <WhiteSpace />
                  </Modal>
                </Col>
              </Row>
              <Divider />
              <Row gutter={16}>
                <Col>
                  <Table dataSource={fields} columns={columns} />
                </Col>
              </Row>
              <WhiteSpace />
            </Form>
          </Col>
          <Col span={14}>

          </Col>
        </Row>
      </div>
    </Wrapper>
  );

}


function mapStateToProps(state) {
  const {fields, addFieldModalVisible, selectedFieldType,
    fieldPreviewPrams, fieldPreviewResult, customerPreviewResult,
    currentFieldType} = state.random_data_generator;
  return {
    fields, addFieldModalVisible, selectedFieldType, fieldPreviewPrams,
    fieldPreviewResult, customerPreviewResult, currentFieldType,
    loading: state.loading.models.random_data_generator
  };
}

export default connect(mapStateToProps)(createForm()(RandomDataGenerator));
