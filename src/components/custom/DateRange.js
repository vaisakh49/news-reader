import React from "react"
import "antd/dist/antd.css"
import { Form, DatePicker, Row, Col } from "antd"
import moment from "moment"
import { useDispatch } from "react-redux"
import { startDate, endDate } from "../../actions/filterActions"

const DateRange = (props) => {
  const dispatch = useDispatch()

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

  // const onFinish = (fieldsValue) => {
  //   const rangeValue = fieldsValue["range-picker"]

  //   const firstDate = rangeValue[0].format("YYYY-MM-DD")
  //   const secondDate = rangeValue[1].format("YYYY-MM-DD")

  //   dispatch(startDate(firstDate))
  //   dispatch(endDate(secondDate))
  // }
  function onChange(date, dateStrings) {
    const start = dateStrings[0]
    const end = dateStrings[1]
    dispatch(startDate(start))
    dispatch(endDate(end))
  }

  return (
    <Row type="flex" justify="center" align="center">
      <Col>
        <Form name="time_related_controls ">
          <Form.Item name="range-picker" label="Date Range" {...rangeConfig}>
            <RangePicker
              ranges={{
                Today: [moment(), moment()],
                "This Month": [
                  moment().startOf("month"),
                  moment().endOf("month"),
                ],
              }}
              format="YYYY-MM-DD"
              onChange={onChange}
            />
          </Form.Item>

          {/* <Form.Item
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
      </Form.Item> */}
        </Form>
      </Col>
    </Row>
  )
}

// DateRange.propTypes = {}

export default DateRange
