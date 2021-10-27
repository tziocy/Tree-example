const treeData = [
  {
    name: 'CustomObject',
    label: 'Objects',
    className: 'ant-tree-node-content-topLevel',
    checkable: false,
    selectable: false,
    children: [
      {
        name: 'Account',
        label: 'Account',
        status: 'modified',
        showDifferenceType: 'Values Differ',
        showIcon: true,
        children: [
          {
            label: 'Layout',
            children: [
              {
                name: 'Account-Partner Accounts',
                label: 'Partner Accounts',
                status: 'new',
                showDifferenceType: 'In Source Only',
                showIcon: true,
                key: '0-0-0-0',
              },
              {
                name: 'Account-User Community - Account Layout',
                label: 'User Community - Account Layout',
                status: 'removed',
                showDifferenceType: 'In Destination Only',
                showIcon: true,
                disabled: true,
                key: '0-0-0-1',
              },
            ],
            key: '0-0-0',
            className: 'ant-tree-node-content-folder',
          },
          {
            label: 'Trigger',
            children: [
              {
                name: 'AccountListener',
                status: 'new',
                label: 'AccountListener',
                showDifferenceType: 'In Source Only',
                showIcon: true,
                key: '0-0-1-0',
              },
            ],
            key: '0-0-1',
            className: 'ant-tree-node-content-folder',
          },
        ],
        key: '0-0',
      },
      {
        name: 'School Applicant',
        label: 'School_Applicant__c',
        status: 'new',
        showDifferenceType: 'In Source Only',
        showIcon: true,
        children: [
          {
            fieldName: 'fields',
            label: 'Fields',
            type: 'CustomField',
            modified: 'true',
            id: 'fullName',
            children: [
              {
                status: 'new',
                label: 'Type',
                attributes: [
                  {
                    fieldName: 'fullName',
                    fieldType: 'string',
                    sourceValue: 'School_Applicant__c.Type__c',
                    destinationValue: '',
                    modified: 'true',
                  },
                  {
                    fieldName: 'label',
                    fieldType: 'string',
                    sourceValue: 'Type',
                    destinationValue: '',
                    modified: 'true',
                  },
                  {
                    fieldName: 'businessStatus',
                    fieldType: 'picklist',
                    sourceValue: 'Active',
                    destinationValue: '',
                    modified: 'true',
                  },
                  {
                    fieldName: 'complianceGroup',
                    fieldType: 'multipicklist',
                    sourceValue: 'GDPR;PII',
                    destinationValue: '',
                    modified: 'true',
                  },
                  {
                    fieldName: 'length',
                    fieldType: 'int',
                    sourceValue: '255',
                    destinationValue: '',
                    modified: 'true',
                  },
                ],
                showDifferenceType: 'In Source Only',
                showIcon: true,
                key: '0-1-0-0',
              },
            ],
            key: '0-1-0',
            className: 'ant-tree-node-content-folder',
          },
          {
            fieldName: 'validationRules',
            label: 'Validation Rules',
            type: 'CustomField',
            modified: 'true',
            id: 'fullName',
            children: [
              {
                status: 'modified',
                label: 'ValidateStudentAddress',
                attributes: [
                  {
                    fieldName: 'fullName',
                    fieldType: 'string',
                    sourceValue: 'ValidateStudentAddress',
                    destinationValue: 'ValidateStudentAddress',
                    modified: 'false',
                  },
                  {
                    fieldName: 'active',
                    fieldType: 'boolean',
                    sourceValue: 'false',
                    destinationValue: 'true',
                    modified: 'true',
                  },
                ],
                showDifferenceType: 'Values Differ',
                showIcon: true,
                key: '0-1-1-0',
              },
            ],
            key: '0-1-1',
            className: 'ant-tree-node-content-folder',
          },
        ],
        key: '0-1',
      },
    ],
    key: '0',
  },
  {
    name: 'ApexClass',
    label: 'Apex Class',
    className: 'ant-tree-node-content-topLevel',
    checkable: false,
    selectable: false,
    children: [
      {
        name: 'AlphaClass',
        label: 'AlphaClass',
        status: 'modified',
        showDifferenceType: 'Values Differ',
        showIcon: true,
        key: '1-0',
      },
    ],
    key: '1',
  },
  {
    name: 'PermissionSet',
    label: 'Permission Set',
    className: 'ant-tree-node-content-topLevel',
    checkable: false,
    selectable: false,
    children: [
      {
        name: 'JuniorAdminPermissionSet',
        label: 'Junior Administrator Permission Set',
        status: 'new',
        showDifferenceType: 'In Source Only',
        showIcon: true,
        key: '2-0',
      },
      {
        name: 'ViewEncryptedPermissionSet',
        label: 'View Encrypted Permission Set',
        status: 'removed',
        showDifferenceType: 'In Destination Only',
        showIcon: true,
        disabled: true,
        key: '2-1',
      },
    ],
    key: '2',
  },
  {
    name: 'Profile',
    label: 'Profile',
    className: 'ant-tree-node-content-topLevel',
    checkable: false,
    selectable: false,
    children: [
      {
        name: 'Account Executive',
        label: 'Account Executive',
        status: 'modified',
        showDifferenceType: 'Values Differ',
        showIcon: true,
        key: '3-0',
      },
    ],
    key: '3',
  },
]

export default treeData;