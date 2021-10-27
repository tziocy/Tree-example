import { useState } from 'react';
import { Card, Layout, Tooltip, Tree } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { DownOutlined } from '@ant-design/icons';

import treeData from './treeData';

const { Header, Content } = Layout;

//  Constants
const IN_SOURCE_ONLY = "In Source Only"
const VALUES_DIFFER = "Values Differ"
const IN_DESTINATION_ONLY = "In Destination Only"

const differenceTypeStyle = {
  alignSelf: "center",
  borderRadius: "50%",
  height: 8,
  position: "absolute",
  right: 32,
  width: 8
};

function App() {
  const [expandedKeys, setExpandedKeys] = useState([])
  const [checkedKeys, setCheckedKeys] = useState([])
  const [selectedKey, setSelectedKey] = useState()

  const onExpand = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue);
  };

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (keys) => {
    setSelectedKey(keys[0])
  }

  const renderDifferenceType = (differenceType) => {
    switch (differenceType) {
      case IN_SOURCE_ONLY:
        return (
          <Tooltip title={IN_SOURCE_ONLY} color="#60DB64" overlayInnerStyle={{ borderRadius: 8 }}>
            <div style={{ ...differenceTypeStyle, background: "#60DB64" }} />
          </Tooltip>
        )
      case VALUES_DIFFER:
        return (
          <Tooltip title={VALUES_DIFFER} color="#0094FF" overlayInnerStyle={{ borderRadius: 8 }}>
            <div style={{ ...differenceTypeStyle, background: "#0094FF" }} />
          </Tooltip>
        )
      case IN_DESTINATION_ONLY:
        return (
          <Tooltip title={IN_DESTINATION_ONLY} color="#EF4438" overlayInnerStyle={{ borderRadius: 8 }}>
            <div style={{ ...differenceTypeStyle, background: "#EF4438" }} />
          </Tooltip>
        )
      default:
        return null;
    }
  }

  return (
    <div className="App">
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', overflow: "hidden" }}>
          <Card
            bodyStyle={{ padding: "8px 0px 8px 8px" }}
            headStyle={{ textAlign: "left", fontSize: 14, color: "#9DA1A2" }}
            style={{
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              height: 800,
              overflowY: "scroll"
            }}
            title="Components"
          >
          <Tree
            autoExpandParent={false}
            blockNode
            checkable
            checkedKeys={checkedKeys}
            expandedKeys={expandedKeys}
            icon={({ checkable }) => checkable ? <img src="/tree-icon.svg" alt="icon" /> : null}
            onCheck={onCheck}
            onExpand={onExpand}
            onSelect={onSelect}
            selectable={true}
            selectedKeys={[selectedKey]}
            showLine={{ showLeafIcon: false }}
            style={{ overflow: "hidden"}}
            switcherIcon={<DownOutlined />}
            titleRender={(props) => {
              const { showDifferenceType, showIcon, label, key } = props
              return (
                <div style={{ display: "flex", alignItems: "center",  }}>
                  {showIcon ? <img src="/tree-icon.svg" alt="icon" style={{ marginRight: 8 }} /> : null}
                  <span>{label || key}</span>
                  {showDifferenceType ? renderDifferenceType(showDifferenceType) : null}
                </div>
              )
            }}
            treeData={treeData}
          />
          </Card>
        </div>
      </Content>
    </Layout>
    </div>
  );
}

export default App;
