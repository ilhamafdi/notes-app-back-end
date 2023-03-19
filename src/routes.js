const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

{
  method: 'GET',
  path: '/notes/{id}',
  handler: getNoteByIdHandler,
},

{
  method: 'PUT',
  path: '/notes/{id}',
  handler: editNoteByIdHandler,
},
];

const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
});
 
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler,
} = require('./handler');