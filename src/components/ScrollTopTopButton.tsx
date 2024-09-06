import { FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const ScrollToTopButton = () => {
  return (
    <>
      <FloatButton.BackTop
        type="primary"
        icon={<ArrowUpOutlined />}
        style={{ bottom: 60 }}
      />
    </>
  );
};

export default ScrollToTopButton;
