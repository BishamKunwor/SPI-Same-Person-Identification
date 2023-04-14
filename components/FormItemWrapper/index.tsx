import { Col, Form } from "antd";
import InputFieldWrapper from "../InputFieldWrapper";

// Children contains Form element (Input, select). Label is for input label and use labelAlignment for top or side-by-side alignment of label with input type
interface FormItemWrapperProps {
  children?: JSX.Element;
  formItemsProps?: any;
  label?: string;
  labelAlignment?: "vertical" | "horizontal";
  colProps?: any;
  isDisabled?: boolean;
}
export default function FormItemWrapper({
  children,
  formItemsProps,
  label,
  labelAlignment,
  colProps,
  isDisabled,
}: FormItemWrapperProps): JSX.Element {
  return (
    <Col {...colProps}>
      <InputFieldWrapper
        label={label}
        labelAlignment={labelAlignment}
        isDisabled={isDisabled}
      >
        <Form.Item {...formItemsProps}>{children}</Form.Item>
      </InputFieldWrapper>
    </Col>
  );
}
