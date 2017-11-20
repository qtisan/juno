/**
 * Created by qtisa on 2017/7/31.
 */

import { Random } from 'mockjs';

export default {
  namespace: 'random_data_generator',
  state: {
    fields: [],
    selectedFieldType: { value: null, params: [] },
    fieldPreviewPrams: {},
    currentFieldType: 'customer'
  },
  reducers: {
    submit(state, {payload: {field}}) {
      return { ...state, fields: [...state.fields, field] };
    },
    modal(state, {payload: show}) {
      return { ...state, addFieldModalVisible: show }
    },
    random_type_change(state, {payload: index}) {
      return {...state, currentFieldType: index == 1 ? state.selectedFieldType.value : 'customer'};
    },
    field_type_change(state, {payload: options}) {
      return {...state, selectedFieldType: options, currentFieldType: options.value}
    },
    reload_preview(state, {payload: fieldPreviewPrams}) {
      let { selectedFieldType } = state;
      let fieldPreviewResult;
      try {
        fieldPreviewResult = Random[selectedFieldType.value].apply(Random, fieldPreviewPrams);
      }
      catch (ex) {
        fieldPreviewResult = '参数错误！';
      }
      return {...state, fieldPreviewResult, fieldPreviewPrams};
    },
    add_field(state, {payload: field}) {
      let {fields} = state;
      fields = [...fields, field];
      return {...state, fields, addFieldModalVisible: false};
    }

  }
}

