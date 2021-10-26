import { useState } from 'react';
import { Card, Layout, Tooltip, Tree } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';

import treeData from './treeData';

const { Header, Content } = Layout;

//  Constants
const IN_SOURCE_ONLY = "In Source Only"
const VALUES_DIFFER = "Values Differ"
const IN_DESTINATION_ONLY = "In Destination Only"

const differenceTypeStyle = { position: "absolute", right: 32, height: 8, width: 8, borderRadius: "100%", alignSelf: "center" };

function App() {
  const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1']);
  const [checkedKeys, setCheckedKeys] = useState(['0-0-0']);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    console.log('onCheck', checkedKeysValue);
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
            bodyStyle={{ padding: 16 }}
            headStyle={{ textAlign: "left", fontSize: 14, color: "#9DA1A2" }}
            style={{ borderRadius: 16 }}
            title="Components"
          >
          <Tree
            autoExpandParent={autoExpandParent}
            blockNode
            checkable
            checkedKeys={checkedKeys}
            expandedKeys={expandedKeys}
            icon={({ checkable }) => checkable ? <img src="/tree-icon.svg" alt="icon" /> : null}
            onCheck={onCheck}
            onExpand={onExpand}
            selectable={false}
            showLine={{ showLeafIcon: false }}
            style={{ overflow: "hidden"}}
            switcherIcon={<DownOutlined />}
            titleRender={({ showDifferenceType, showIcon, name, key }) => {
              return (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {showIcon ? <img src="/tree-icon.svg" alt="icon" style={{ marginRight: 8 }} /> : null}
                  <span>{name || key}</span>
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
