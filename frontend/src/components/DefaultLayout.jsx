import { Breadcrumb, Layout, Menu, theme } from "antd";
import logoSymptoWiz from "../assets/logo.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const DefaultLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout flex">
            <Header className="bg-purple-900 flex">
                <img src={logoSymptoWiz} className="object-contain mr-4 py-2" />
                <Menu
                    className="bg-purple-900"
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={[
                        { label: <Link to="/">Home</Link> },
                        { label: <Link to="/article">Article</Link> },
                        // { label: <Link to="/doctor">Doctor Wiki</Link> },
                    ]}
                />
            </Header>
            {children}
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
