module.exports = [
  {
    path: '/organizations',
    acceptedTypes: 'pair:Organization',
    dereference: ['pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/projects',
    acceptedTypes: 'pair:Project'
  },
  {
    path: '/events',
    acceptedTypes: 'pair:Event',
    dereference: ['pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/users',
    acceptedTypes: 'pair:Person',
    dereference: ['pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/themes',
    acceptedTypes: 'pair:Theme'
  },
  {
    path: '/skills',
    acceptedTypes: 'pair:Skill'
  },
  {
    path: '/documents',
    acceptedTypes: 'pair:Document'
  },
  {
    path: '/status',
    acceptedTypes: [
      'pair:Status',
      'pair:ActivityStatus',
      'pair:AgentStatus',
      'pair:DocumentStatus',
      'pair:EventStatus',
      'pair:IdeaStatus',
      'pair:ProjectStatus',
      'pair:TaskStatus'
    ]
  },
  {
    path: '/types',
    acceptedTypes: [
      'pair:Type',
      'pair:ActivityType',
      'pair:AgentType',
      'pair:ConceptType',
      'pair:DocumentType',
      'pair:EventType',
      'pair:FolderType',
      'pair:GroupType',
      'pair:IdeaType',
      'pair:ObjectType',
      'pair:OrganizationType',
      'pair:PlaceType',
      'pair:ProjectType',
      'pair:ResourceType',
      'pair:SubjectType',
      'pair:TaskType'
    ]
  },
  {
    path: '/files'
  }
];
