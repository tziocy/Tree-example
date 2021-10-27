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

const differenceTypeStyle = { position: "absolute", right: 32, height: 8, width: 8, borderRadius: "100%", alignSelf: "center" };

function App() {
  const [expandedKeys, setExpandedKeys] = useState([])
  const [checkedKeys, setCheckedKeys] = useState([])

  const onExpand = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue);
  };

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

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
            bodyStyle={{ padding: "16px 16px" }}
            headStyle={{ textAlign: "left", fontSize: 14, color: "#9DA1A2" }}
            style={{ borderRadius: 16, borderBottomLeftRadius: 16, borderBottomRightRadius: 16, }}
            title="Components"
          >
          <Tree
            autoExpandParent={true}
            blockNode
            checkable
            checkedKeys={checkedKeys}
            expandedKeys={expandedKeys}
            icon={({ checkable }) => checkable ? <img src="/tree-icon.svg" alt="icon" /> : null}
            onCheck={onCheck}
            onExpand={onExpand}
            selectable={true}
            showLine={{ showLeafIcon: false }}
            style={{ overflow: "hidden"}}
            switcherIcon={<DownOutlined />}
            titleRender={(props) => {
              const { isFolder, isTopLevel, showDifferenceType, showIcon, name, key } = props
              let titleStyle = { fontSize: 14, whiteSpace: "no-wrap" }
              if (isFolder) {
                titleStyle = { color: "#9DA1A2", fontSize: 14, whiteSpace: "no-wrap" }
              } else if (isTopLevel) {
                titleStyle = { fontSize: 16, fontWeight: 700, whiteSpace: "no-wrap" }
              }
              return (
                <div style={{ display: "flex", alignItems: "center",  }} onClick={(p) => console.log(p)}>
                  {showIcon ? <img src="/tree-icon.svg" alt="icon" style={{ marginRight: 8 }} /> : null}
                  <span style={titleStyle}>{name || key}</span>
                  {showDifferenceType
                    ? renderDifferenceType([IN_DESTINATION_ONLY, VALUES_DIFFER, IN_SOURCE_ONLY][Math.floor(Math.random() * (2 - 0 + 1) + 0)])
                    : null
                  }
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
