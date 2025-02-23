import React, { useState } from "react";
import { Drawer, Button, List, Typography, Divider } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const CartSlideout = ({ data }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <div className="cart-button-container">
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={showDrawer}
        >
          View Cart {data && `(${data?.totalItems})`}
        </Button>
      </div>

      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={400}
      >
        <List
          itemLayout="horizontal"
          dataSource={data?.products}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.name}
                description={`Price: $${item.price}`}
              />
            </List.Item>
          )}
        />
        <Divider />
        <Typography.Text strong>Total: ${data?.totalPrice}</Typography.Text>
      </Drawer>
    </div>
  );
};

export default CartSlideout;
