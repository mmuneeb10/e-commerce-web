import { Badge, Button, Layout, Space } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import "./layout.css";

const { Header, Content } = Layout;
const PagesWithHeader = () => {
  return (
    <Layout>
      <Header className="app-header">
        <div className="header-content">
          <div className="brand">
            <h1>MB Express</h1>
          </div>

          <Space size="middle">
            <Button type="primary" icon={<UserOutlined />}>
              Sign In
            </Button>

            <Badge count={10} className="cart-badge">
              <ShoppingCartOutlined
                style={{ fontSize: "24px", color: "#000" }}
              />
            </Badge>
          </Space>
        </div>
      </Header>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PagesWithHeader;
