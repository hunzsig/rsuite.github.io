# CheckPicker

Used for multiple data selection, support grouping.

* `<CheckPicker>`

## Usage

```js
import { CheckPicker } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<CheckPicker>`

| Property             | Type`(Default)`                                                  | Description                                             |
| -------------------- | ---------------------------------------------------------------- | ------------------------------------------------------- |
| appearance           | enum: 'default', 'subtle' `('default')`                          | Set picker appearence                                   |
| block                | boolean                                                          | Blocking an entire row                                  |
| classPrefix          | string `('picker')`                                              | The prefix of the component CSS class                   |
| data \*              | Array&lt;DataItemType&gt;                                        | The data of component                                   |
| disabled             | boolean                                                          | Whether disabled componet                               |
| disabledItemValues   | Array&lt;DataItemType.value&gt;                                  | Disable item by value                                   |
| groupBy              | string                                                           | Set group condition key in data                         |
| valueKey             | string `('value')`                                               | Set value key in data                                   |
| labelKey             | string `('label')`                                               | Set label key in data                                   |
| value                | any                                                              | Specifies the values of the selected items (Controlled) |
| defaultValue         | any                                                              | Default values of the selected items                    |
| height               | number `(320)`                                                   | The height of Dropdown                                  |
| onChange             | (value:DataItemType.value, event)=>void                          | Callback fired when value change                        |
| onSelect             | (value:DataItemType.value, item: DataItemType , event)=>void     | Callback fired when item is selected                    |
| onSearch             | (searchKeyword:string, event)=>void                              | Callback fired when search                              |
| onOpen               | ()=>void                                                         | Callback fired when open component                      |
| onClose              | ()=>void                                                         | Callback fired when close component                     |
| onHide               | ()=>void                                                         | Callback fired when hidden                              |
| onGroupTitleClick    | (event)=>void                                                    | Callback fired when click the group title               |
| placeholder          | React.Node `('Select')`                                          | Setting placeholders                                    |
| renderValue          | (value: Array&lt;any&gt;, items: Array&lt;any&gt;) => React.Node | Custom render selected items                            |
| renderMenuItem       | (label:React.Node, item: DataItemType)=>React.Node               | Custom render menuItems                                 |
| renderMenuGroup      | (groupTitle:React.Node, item:DataItemType)=>React.Node           | Custom render menu Group                                |
| renderExtraFooter    | ()=>React.Node                                                   | Custom render extra footer                              |
| searchable           | boolean `(true)`                                                 | Whether dispaly search input box                        |
| cleanable            | boolean `(true)`                                                 | Whether the selected value can be cleared               |
| menuClassName        | string                                                           | A css class to apply to the Menu DOM node.              |
| menuStyle            | Object                                                           | A style to apply to the Menu DOM node.                  |
| placement            | enum: [Placement](#Placement)`('bottomLeft')`                    | The placement of component                              |
| container            | HTMLElement or (() => HTMLElement)                               | Sets the rendering container                            |
| toggleComponentClass | React.ElementType `('a')`                                        | You can use a custom element for this component         |

## Types

### Placement

```js
type Placement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom'
  | 'auto'
  | 'autoVerticalLeft'
  | 'autoVerticalRight'
  | 'autoHorizontalTop'
  | 'autoHorizontalBottom';
```

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  groupBy?: string;
};
```
