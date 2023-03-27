import { Breadcrumb, Layout, Menu, theme } from "antd";
import logoSymptoWiz from "../../assets/logo.png";

const { Header, Content, Footer } = Layout;
const DefaultLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout flex">
            <Header className="bg-purple-900 flex">
                <img src={logoSymptoWiz} className="object-contain" />
                <Menu
                    className="bg-purple-900"
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={[{ label: "Home" }, { label: "Article" }]}
                />
            </Header>
            <Content
                style={{
                    padding: "0 50px",
                }}
                className="bg-purple-500"
            >
                <Breadcrumb
                    style={{
                        margin: "16px 0",
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="site-layout-content min-h-[80vh]"
                    // style={{
                    //     background: colorBgContainer,
                    // }}
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: "center",
                }}
                className="bg-purple-900"
            >
                SymptoWiz ©2023 Created by De Sijis
            </Footer>
        </Layout>
    );
};
export default DefaultLayout;
