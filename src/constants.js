export const resourceTypes = {
  COMIC: 'comics',
  CHARACTER: 'characters',
  STORY: 'stories'
};

export const filterOptions = {
  comics: [
    { id: 'titleStartsWith', label: 'Title' },
    { id: 'issn', label: 'Issue Number' }
  ],
  characters: [
    { id: 'nameStartsWith', label: 'Name' },
    { id: 'comics', label: 'Comic' },
    { id: 'stories', label: 'Story' }
  ]
};
