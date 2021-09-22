import React from "react"
// import PropTypes from 'prop-types'
import { Form, DatePicker, Button } from "antd"
import "antd/dist/antd.css"

const DateRange = (props) => {
  const { RangePicker } = DatePicker

  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Please select time!",
      },
    ],
  }

  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue["range-picker"]
    console.log(rangeValue)

    const values = {
      ...fieldsValue,
      "range-picker": [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD"),
      ],
    }
    //Getting input values
    console.log("Received values of form: ", values)
  }

  return (
    <Form name="time_related_controls " onFinish={onFinish}>
      <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
        <RangePicker />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

// DateRange.propTypes = {}

export default DateRange
