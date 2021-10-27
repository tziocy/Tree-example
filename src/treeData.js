const treeData = [
    {
      name: 'CustomObject',
      key: 'Objects',
      isTopLevel: true,
      children: [
        {
          name: 'Account',
          status: 'modified',
          key: 'Account',
          showDifferenceType: true,
          showIcon: true,
          children: [
            {
              key: 'Layout',
              isFolder: true,
              children: [
                {
                  name: 'Account-Partner Accounts',
                  status: 'added',
                  key: 'Partner Accounts',
                  showDifferenceType: true,
                  showIcon: true,
                },
                {
                  name: 'Account-User Community - Account Layout',
                  status: 'removed',
                  key: 'User Community - Account Layout',
                  showDifferenceType: true,
                  showIcon: true,
                },
              ],
            },
            {
              key: 'Trigger',
              isFolder: true,
              children: [
                {
                  name: 'AccountListener',
                  status: 'added',
                  key: 'AccountListener',
                  showDifferenceType: true,
                    showIcon: true,
                },
              ],
            },
          ],
        },
        {
          name: 'School Applicant',
          status: 'new',
          key: 'School_Applicant__c',
          showDifferenceType: true,
          showIcon: true,
          children: [
            {
              fieldName: 'fields',
              type: 'CustomField',
              modified: 'true',
              id: 'fullName',
              key: 'Fields',
              isFolder: true,
              showDifferenceType: false,
              showIcon: false,
              selectable: false,
              children: [
                {
                  status: 'added',
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
                  key: 'Type',
                  showDifferenceType: true,
                  showIcon: true,
                },
              ],
            },
            {
              fieldName: 'validationRules',
              type: 'CustomField',
              modified: 'true',
              id: 'fullName',
              key: 'Validation Rules',
              showIcon: false,
              isFolder: true,
              children: [
                {
                  status: 'modified',
                  attributes: [
                    {
                      fieldName: 'fullName',
                      fieldType: 'string',
                      sourceValue: 'ValidateStudentAddress',
                      destinationValue: 'ValidateStudentAddress',
                      modified: 'false',
                      showDifferenceType: true,
                      showIcon: true,
                    },
                    {
                      fieldName: 'active',
                      fieldType: 'boolean',
                      sourceValue: 'false',
                      destinationValue: 'true',
                      modified: 'true',
                      showDifferenceType: true,
                      showIcon: true,
                    },
                  ],
                  key: 'ValidateStudentAddress',
                  showDifferenceType: true,
                  showIcon: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'ApexClass',
      key: 'Apex Class',
      isTopLevel: true,
      children: [
        {
          name: 'AlphaClass',
          status: 'modified',
          key: 'AlphaClass',
          showDifferenceType: true,
            showIcon: true,
        },
      ],
    },
    {
      name: 'PermissionSet',
      key: 'Permission Set',
      isTopLevel: true,
      children: [
        {
          name: 'JuniorAdminPermissionSet',
          status: 'added',
          key: 'Junior Administrator Permission Set',
          showDifferenceType: true,
            showIcon: true,
        },
        {
          name: 'ViewEncryptedPermissionSet',
          status: 'removed',
          key: 'View Encrypted Permission Set',
          showDifferenceType: true,
            showIcon: true,
        },
      ],
    },
    {
      name: 'Profile',
      key: 'Profile',
      isTopLevel: true,
      children: [
        {
          name: 'Account Executive',
          status: 'modified',
          key: 'Account Executive',
          showDifferenceType: true,
            showIcon: true,
        },
      ],
    },
]

export default treeData;